# 深度学习概念

## 基础概念

流程：
* 数据处理（采集 + 去噪）
* 模型训练（特征 + 模型）。以下已神经网络训练过程为例：
    1. 随机生成一组w和b
    1. 计算损失函数：例如y’和y的欧氏距离
    1. 迭代修改w和b的值（梯度下降、链式法则），让损失函数的结果趋于最小
    1. 停止：模型在训练集和验证集上的损失都最小的时候。
* 模型评估与优化（MSE、AUC+调参）
* 模型应用（A/B测试）

算法：
* 神经网络。它接受多个输入（x1，x2，x3…），产生一个输出（output）
    * DNN：深度神经网络
    * CNN：卷积神经网络（计算机视觉）
    * RNN：递归神经网络（自然语言处理）
    * GAN：对抗神经网络（模仿）
* 朴素贝叶斯。给定的待分类项，求解在此项出现的情况下其他各个类别出现的概率。典型案例：垃圾分类
* KNN
* SVM
* 聚类
* 自动编码器

深度学习进展：
* 图像分类
* 机器翻译
* 图像生成

## 深度学习流程

1. 模型训练
    1. 数据收集和清洗
        1. 上传到集群 hadoop hdf共享存储地址
        1. [数据预处理](https://dl.netease.com/docs/tutorials/bert_named_entity_recognition/bert_named_entity_recognition.html#%E6%95%B0%E6%8D%AE%E7%9A%84%E9%A2%84%E5%A4%84%E7%90%86)，集群分布式处理能力
    2. 模型训练
        1. 写好代码，提交任务
            * 单机/单机集群，都是生成单个进程任务。
            * 多机任务（分布式）则数据并行，训练时读取不同的数据，然后计算梯度，各进程计算完梯度后进行同步（合并），使用合并后的梯度更新所有进程的参数，进行下一轮迭代。
        ![](https://dl.netease.com/docs/assets/img/data_parallel.818a0fae.png)
        1. 训练（日志存储产出 + dashboard查看）
        1. [模型存储](https://dl.netease.com/docs/tutorials/short_video_classification/short_video_classification.html#%E6%A8%A1%E5%9E%8B%E5%AD%98%E5%82%A8)
        > 所以在编写分布式训练程序时，需要在单卡训练程序的基础上，重写数据和梯度合并部分（意味着需要改源代码）。
    3. 模型测试
        1. 加载已训练好的模型，基于数据集进行结果测试。
    4. 评测和优化
1. 模型部署上线 + 对外提供服务
    * 使用tf serving部署模型并对外提供服务

## tensorflow
TensorFlow 是一个端到端开源机器学习平台。个人理解，通过提供tensorflow python包以及它提供的API，可以进行模型的制作。

1. 在系统上安装 Python 开发环境
```
// 检查
python --version
pip --version
virtualenv --version

// 安装
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
export PATH="/usr/local/bin:/usr/local/sbin:$PATH"
brew update
brew install python@2  # Python 2
sudo pip install -U virtualenv  # system-wide install
```

2. 开辟虚拟空间
```
// 创建一个新的虚拟环境，方法是选择 Python 解析器并创建一个 ./venv 目录来存放它
virtualenv --system-site-packages -p python2.7 ./venv

// 使用特定于 shell 的命令激活该虚拟环境：(此时上下文已经有了tensorflow环境)
source ./venv/bin/activate  # sh, bash, ksh, or zsh
```

3. 校验
```
python
import tensorflow as tf
print tf.__verison__
```

开启tensorflow编程，如下：
``` python
#!/usr/bin/env
# -*- coding: UTF-8 -*-
# from __future__ import absolute_import, division, print_function, unicode_literals

import tensorflow as tf
import tensorflow.contrib.keras as keras
import cPickle # python2自带
import os # python自带
# NumPy(Numerical Python) 是 Python 语言的一个扩展程序库，支持大量的维度数组与矩阵运算.
# 单独安装：https://www.runoob.com/numpy/numpy-tutorial.html
import numpy as np

print(tf.__version__)
print os.listdir('./package_runoob')
print np.eye(4)
```

## slurm

slurm是一种可用于大型计算节点集群的高度可伸缩和容错的`集群管理器和作业调度系统`。SLURM 维护着一个待处理工作的队列并管理此工作的整体资源利用。SLURM 会为任务队列合理地分配资源，并监视作业至其完成。

> slurm分配集群计算机资源，开启job，跑模型训练。

## Service Mesh

如果用一句话来解释什么是服务网格，可以将它比作是应用程序或者说微服务间的 TCP/IP，负责服务之间的网络调用、限流、熔断和监控。对于编写应用程序来说一般无须关心 TCP/IP 这一层（比如通过 HTTP 协议的 RESTful 应用），同样使用服务网格也就无须关心服务之间的那些原来是通过应用程序或者其他框架实现的事情，比如 Spring Cloud、OSS，现在只要交给服务网格就可以了。

## tf-operator

tf-operator 为 tensorflow 提供了 TFJob 资源，以满足 tensorflow 分布式训练的资源和拓扑需求，最终达到一键拉起分布式机器学习集群的效果。

> 简单理解，tf-operator 就是让用户在 K8S 集群上部署训练任务更加方便和简单。

## 参考文章

* [mooc Tensorflow课程](https://www.youtube.com/watch?v=kGktiYF5upk&list=PLqVl9yVjQ_EK67vL3ZE2391TZOdQEbrpg)
* [google 机器学习](https://developers.google.cn/machine-learning/crash-course/introduction-to-neural-networks/video-lecture)
* [斯坦福大学公开课 ：机器学习课程](http://open.163.com/special/opencourse/machinelearning.html)
* [纯新手入门安装TensorFlow并写Hello（mac版）](https://blog.csdn.net/Cloudox_/article/details/77823389)
* [人人都可以做深度学习应用：入门篇](https://juejin.im/entry/58afdd9c2f301e0068f7da72)
* [deeplearningbook-chinese](https://github.com/exacity/deeplearningbook-chinese)
* [Deep-Learning-21-Examples](https://github.com/hzy46/Deep-Learning-21-Examples)