# -*- coding: utf-8 -*-
"""FP16转换脚本 — 将飞桨导出的FP32 ONNX转为FP16，压缩体积并确保WASM兼容
在本地运行（非AI Studio），需安装: pip install onnx onnxruntime onnxconverter-common
"""
import os, sys
sys.stdout.reconfigure(line_buffering=True)

import onnx
import onnxruntime
from onnxconverter_common import float16

input_file = 'bird_model_paddle.onnx'
output_file = 'bird_model.onnx'

print(f'输入: {input_file} ({os.path.getsize(input_file)/1024/1024:.1f}MB)')

# 加载FP32模型
model = onnx.load(input_file)

# 检查是否有ConvInteger节点（不兼容WASM）
conv_int = sum(1 for n in model.graph.node if n.op_type == 'ConvInteger')
print(f'ConvInteger节点: {conv_int} (应为0)')

# FP16转换
model_fp16 = float16.convert_float_to_float16(model, keep_io_types=True)
onnx.save(model_fp16, output_file)

# 验证
sess = onnxruntime.InferenceSession(output_file)
print(f'输出: {output_file} ({os.path.getsize(output_file)/1024/1024:.1f}MB)')
print(f'输出shape: {sess.get_outputs()[0].shape}')
print(f'✅ FP16转换完成，可替换GitHub Pages中的bird_model.onnx')