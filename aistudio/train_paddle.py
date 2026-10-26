# -*- coding: utf-8 -*-
"""飞桨 PaddlePaddle 版训练脚本 — 51类鸟类识别(50鸟+非鸟类)
在百度AI Studio中运行，使用免费V100 GPU加速训练。
"""
import os, sys, time, random, shutil, json
sys.stdout.reconfigure(line_buffering=True)

import paddle
import paddle.nn as nn
from paddle.vision import transforms, datasets
from paddle.vision.models import resnet18
from paddle.io import DataLoader

print(f"PaddlePaddle 版本: {paddle.__version__}")
print(f"GPU 可用: {paddle.device.is_compiled_with_cuda()}")
device = paddle.set_device('gpu' if paddle.device.is_compiled_with_cuda() else 'cpu')

BIRDS = [
 ('白头鹎','Pycnonotus sinensis'),('麻雀','Passer montanus'),('喜鹊','Pica pica'),
 ('普通翠鸟','Alcedo atthis'),('白鹭','Egretta garzetta'),('戴胜','Upupa epops'),
 ('珠颈斑鸠','Spilopelia chinensis'),('红嘴蓝鹊','Urocissa erythroryncha'),
 ('黑枕黄鹂','Oriolus chinensis'),('棕背伯劳','Lanius schach'),
 ('白颊噪鹛','Garrulax sannio'),('乌鸫','Turdus mandarinus'),
 ('鸽子','Columba livia'),('夜鹭','Nycticorax nycticorax'),
 ('四声杜鹃','Cuculus micropterus'),('绿头鸭','Anas platyrhynchos'),
 ('斑嘴鸭','Anas zonorhyncha'),('苍鹭','Ardea cinerea'),('池鹭','Ardeola bacchus'),
 ('黑水鸡','Gallinula chloropus'),('红嘴鸥','Chroicocephalus ridibundus'),
 ('普通鸬鹚','Phalacrocorax carbo'),('赤麻鸭','Tadorna ferruginea'),
 ('鸳鸯','Aix galericulata'),('凤头麦鸡','Vanellus vanellus'),
 ('白腰草鹬','Tringa ochropus'),('黑鸢','Milvus migrans'),('红隼','Falco tinnunculus'),
 ('大斑啄木鸟','Dendrocopos major'),('灰头绿啄木鸟','Picus canus'),
 ('灰喜鹊','Cyanopica cyanus'),('山斑鸠','Streptopelia orientalis'),
 ('蓝翡翠','Halcyon pileata'),('大杜鹃','Cuculus canorus'),
 ('领雀嘴鹎','Spizixos semitorques'),('画眉','Garrulax canorus'),
 ('黑脸噪鹛','Pterorhinus perspicillatus'),('北红尾鸲','Phoenicurus auroreus'),
 ('鹊鸲','Copsychus saularis'),('红胁蓝尾鸲','Tarsiger cyanurus'),
 ('大山雀','Parus minor'),('红头长尾山雀','Aegithalos concinnus'),
 ('暗绿绣眼鸟','Zosterops japonicus'),('白鹡鸰','Motacilla alba'),
 ('树鹨','Anthus hodgsoni'),('金翅雀','Chloris sinica'),
 ('黑尾蜡嘴雀','Eophona migratoria'),('三道眉草鹀','Emberiza cioides'),
 ('灰椋鸟','Spodiopsar cineraceus'),('灰头麦鸡','Vanellus cinereus'),
 ('非鸟类','NonBird'),
]

DATA = 'data'
ALL = os.path.join(DATA, 'all')
NUM = len(BIRDS)
sz = 224

# ============ 步骤1: 划分 train/val ============
print('=== 步骤1: 划分 train/val (8:2) ===')
for phase in ['train', 'val']:
    p = os.path.join(DATA, phase)
    if os.path.exists(p): shutil.rmtree(p)
for cls in os.listdir(ALL):
    pp = os.path.join(ALL, cls)
    if not os.path.isdir(pp): continue
    imgs = [f for f in os.listdir(pp) if f.lower().endswith(('.jpg','.jpeg','.png'))]
    random.shuffle(imgs)
    n = int(len(imgs) * 0.8)
    for phase, part in [('train', imgs[:n]), ('val', imgs[n:])]:
        d = os.path.join(DATA, phase, cls)
        os.makedirs(d, exist_ok=True)
        for f in part:
            shutil.copy(os.path.join(pp, f), os.path.join(d, f))
print('  划分完成')

# ============ 步骤2: 数据增强与加载 ============
print('=== 步骤2: 数据增强与加载 ===')
mean = [0.485, 0.456, 0.406]
std = [0.229, 0.224, 0.225]

train_tf = transforms.Compose([
    transforms.RandomResizedCrop(sz, scale=(0.7, 1.0)),
    transforms.RandomHorizontalFlip(),
    transforms.RandomRotation(15),
    transforms.ColorJitter(0.3, 0.3, 0.3, 0.1),
    transforms.ToTensor(),
    transforms.Normalize(mean=mean, std=std),
])
val_tf = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(sz),
    transforms.ToTensor(),
    transforms.Normalize(mean=mean, std=std),
])

train_ds = datasets.ImageFolder(os.path.join(DATA, 'train'), transform=train_tf)
val_ds = datasets.ImageFolder(os.path.join(DATA, 'val'), transform=val_tf)
CLASS_NAMES = train_ds.classes
print(f'  类别数: {len(CLASS_NAMES)}, 训练: {len(train_ds)}, 验证: {len(val_ds)}')

bs = 32
train_dl = DataLoader(train_ds, batch_size=bs, shuffle=True, num_workers=4)
val_dl = DataLoader(val_ds, batch_size=bs, shuffle=False, num_workers=4)

# ============ 步骤3: 构建模型 ============
print('=== 步骤3: 构建ResNet18模型 ===')
model = resnet18(pretrained=True, num_classes=NUM)
print(f'  ResNet18 加载完成, 输出类别: {NUM}')

# ============ 步骤4: 训练 ============
print('=== 步骤4: 开始训练 ===')
epochs = 25
lr = 5e-4
weight_decay = 1e-4

optimizer = paddle.optimizer.Adam(
    parameters=model.parameters(), learning_rate=lr, weight_decay=weight_decay)
scheduler = paddle.optimizer.lr.CosineAnnealingDecay(learning_rate=lr, T_max=epochs)
criterion = nn.CrossEntropyLoss()

best_acc = 0.0
for epoch in range(epochs):
    scheduler.step()
    for phase in ['train', 'val']:
        if phase == 'train':
            model.train()
            dl = train_dl
        else:
            model.eval()
            dl = val_dl
        t0 = time.time()
        tot = cor = 0
        for bi, (x, y) in enumerate(dl):
            out = model(x)
            loss = criterion(out, y)
            if phase == 'train':
                optimizer.clear_grad()
                loss.backward()
                optimizer.step()
            pred = paddle.argmax(out, axis=1)
            cor += int(paddle.sum(pred == y).numpy()[0])
            tot += int(y.shape[0])
            if (bi + 1) % 20 == 0:
                print(f'    [epoch {epoch} {phase}] {bi+1} loss={float(loss):.3f} acc={cor/tot:.3f}', flush=True)
        acc = cor / tot
        if phase == 'val' and acc > best_acc:
            best_acc = acc
            paddle.save(model.state_dict(), 'bird_best_paddle.pdparams')
        print(f'  epoch {epoch} {phase} acc={acc:.3f} 耗时{time.time()-t0:.0f}s', flush=True)
    print(f'  学习率: {scheduler.get_lr():.6f}', flush=True)

print(f'\n最佳验证准确率: {best_acc:.4f}')

# ============ 步骤5: 导出ONNX ============
print('=== 步骤5: 导出ONNX ===')
model.set_state_dict(paddle.load('bird_best_paddle.pdparams'))
model.eval()

paddle.onnx.export(
    model,
    'bird_model_paddle',
    input_spec=[paddle.static.InputSpec(shape=[None, 3, sz, sz], dtype='float32', name='input')],
    opset_version=13,
)
print(f'  ONNX 已导出: bird_model_paddle.onnx')

with open('classes.json', 'w', encoding='utf-8') as f:
    json.dump(CLASS_NAMES, f, ensure_ascii=False)
print(f'  classes.json 已保存: {len(CLASS_NAMES)} 类')

print('\n✅ 训练完成！')
print('   下一步: 下载 bird_model_paddle.onnx 和 classes.json')
print('   在本地做 FP16 转换后替换 GitHub Pages 中的 bird_model.onnx')