# 观鸟AI图鉴 — 百度飞桨AI Studio项目

## 项目简介

基于PaddlePaddle训练的51类鸟类识别模型（50种鸟+非鸟类），使用ResNet18迁移学习。
训练完成后导出ONNX模型，部署到GitHub Pages前端网页，浏览器端ONNX Runtime Web推理。

## 文件说明

| 文件 | 说明 |
|------|------|
| `train_paddle.py` | PaddlePaddle训练脚本（主文件） |
| `inference_paddle.py` | 推理验证脚本（测试准确率） |
| `convert_fp16.py` | FP16转换脚本（本地运行，压缩ONNX） |

## 运行步骤

### 1. 上传数据集

将本地 `data/all/` 目录打包为 `bird_data.zip`（约15GB），上传到AI Studio数据集：
- 点击「数据集」→「创建数据集」
- 名称：`birdwatcher-data`
- 上传 `bird_data.zip`
- 在项目中挂载该数据集

### 2. 配置环境

AI Studio已预装PaddlePaddle，无需额外安装。如需额外包：
```python
!pip install onnx onnxconverter-common
```

### 3. 解压数据

```python
!unzip /home/aistudio/data/data{数据集ID}/bird_data.zip -d /home/aistudio/data/
```

### 4. 训练

```python
!python train_paddle.py
```

或直接在Notebook中运行：
```python
%run train_paddle.py
```

训练约25个epoch，V100 GPU约10-15分钟。

### 5. 验证准确率

```python
!python inference_paddle.py
```

### 6. 下载模型

训练完成后下载以下文件到本地：
- `bird_model_paddle.onnx` — FP32 ONNX模型
- `classes.json` — 类别标签

### 7. 本地FP16转换

```bash
pip install onnx onnxruntime onnxconverter-common
python convert_fp16.py
```

### 8. 部署到GitHub Pages

将FP16转换后的 `bird_model.onnx` 和 `classes.json` 复制到项目根目录，然后：
```bash
git add bird_model.onnx classes.json
git commit -m "update: 飞桨训练模型"
git push origin main
```

## 回退方案

如果飞桨训练的模型效果不如预期，回退到备份版本：
```bash
git checkout v1-github-pages-stable -- bird_model.onnx classes.json
git commit -m "rollback: 回退到PyTorch版本模型"
git push origin main
```

或直接用git tag查看备份：
```bash
git tag  # 查看所有标签
git checkout v1-github-pages-stable  # 切换到备份版本
```

## 与PyTorch版本的差异

| 项目 | PyTorch版本 | 飞桨版本 |
|------|------------|---------|
| 框架 | PyTorch + torchvision | PaddlePaddle + paddle.vision |
| GPU | 本地CPU/GPU | AI Studio免费V100 |
| 模型 | ResNet18 | ResNet18（相同架构） |
| 导出 | torch.onnx.export | paddle.onnx.export |
| 前端 | 不变 | 不变（只需替换ONNX文件） |

## 注意事项

1. **classes.json顺序**：飞桨的ImageFolder与PyTorch排序规则相同（拼音字母序），但务必验证
2. **FP16转换必须做**：飞桨导出的是FP32（42MB），FP16后约21MB且WASM兼容
3. **前端代码零改动**：只需替换bird_model.onnx和classes.json
4. **数据集大小**：约15GB，上传到AI Studio数据集而非项目仓库