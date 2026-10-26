# -*- coding: utf-8 -*-
"""飞桨推理验证脚本 — 加载训练好的模型，测试准确率并对比PyTorch版本
"""
import os, json, random, sys
sys.stdout.reconfigure(line_buffering=True)

import paddle
import numpy as np
from paddle.vision import transforms, datasets
from paddle.vision.models import resnet18
from PIL import Image

paddle.set_device('gpu' if paddle.device.is_compiled_with_cuda() else 'cpu')

CLASS_NAMES = json.load(open('classes.json', encoding='utf-8'))
NUM = len(CLASS_NAMES)
sz = 224
mean = [0.485, 0.456, 0.406]
std = [0.229, 0.224, 0.225]

# 加载模型
model = resnet18(pretrained=False, num_classes=NUM)
model.set_state_dict(paddle.load('bird_best_paddle.pdparams'))
model.eval()

# 预处理
val_tf = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(sz),
    transforms.ToTensor(),
    transforms.Normalize(mean=mean, std=std),
])

# 测试集
val_ds = datasets.ImageFolder('data/val', transform=val_tf)
print(f'验证集: {len(val_ds)} 张图片, {NUM} 类')

correct = 0
total = 0
class_correct = {}
class_total = {}

for i in range(len(val_ds)):
    img, label = val_ds[i]
    out = model(img.unsqueeze(0))
    pred = int(paddle.argmax(out, axis=1).numpy()[0])
    name = CLASS_NAMES[label]
    class_total[name] = class_total.get(name, 0) + 1
    if pred == label:
        correct += 1
        class_correct[name] = class_correct.get(name, 0) + 1
    total += 1
    if (i + 1) % 100 == 0:
        print(f'  {i+1}/{len(val_ds)} 当前准确率: {correct/total:.3f}', flush=True)

print(f'\n总体准确率: {correct}/{total} = {correct/total*100:.1f}%')
print('\n各类准确率:')
for name in sorted(CLASS_NAMES):
    if name == '非鸟类': continue
    tc = class_total.get(name, 0)
    cc = class_correct.get(name, 0)
    if tc > 0:
        acc = cc / tc * 100
        flag = '⚠️' if acc < 60 else '✅' if acc > 85 else '  '
        print(f'  {flag} {name}: {cc}/{tc} = {acc:.0f}%')

# 测试单张图片
print('\n=== 单张图片测试 ===')
test_birds = ['白头鹎', '麻雀', '喜鹊', '白鹭', '红隼']
for bird in test_birds:
    bird_dir = f'data/all/{bird}'
    if not os.path.isdir(bird_dir): continue
    files = [f for f in os.listdir(bird_dir) if f.lower().endswith(('.jpg','.jpeg','.png'))]
    if not files: continue
    img = Image.open(os.path.join(bird_dir, files[0])).convert('RGB')
    tensor = val_tf(img).unsqueeze(0)
    out = model(tensor)
    probs = paddle.nn.functional.softmax(out, axis=1).numpy()[0]
    top5 = sorted(enumerate(probs), key=lambda x: -x[1])[:5]
    print(f'\n  {bird} (实际) → {CLASS_NAMES[top5[0][0]]} ({top5[0][1]*100:.0f}%)')
    for idx, prob in top5:
        print(f'    {CLASS_NAMES[idx]}: {prob*100:.1f}%')