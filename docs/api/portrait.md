---
title: QQ 头像获取
---

<center>
    <h1>
        QQ头像获取（加密）
    </h1>
</center>

## 简介

我们可以直接获取到 QQ 头像的 URL 地址，并调用。
但是 URL 的地址中包含了 QQ 号，所以也就暴露了我们的 QQ，如果不想暴露的话可以使用下面的接口进行加密。

## 接口说明

> 接口是加密的。不会轻易暴露所获取头像的QQ号。

### 参数
#### 请求参数

<p>接口地址：https://api.gitcc.cn/portrait</p>
<p>请求类型：POST/GET</p>
<p>请求参数：qq</p>
<p>请求示例：https://api.gitcc.cn/portrait/?qq=QQ号</p><br>

#### 返回参数

```
https://q1.qlogo.cn/g?b=sdk&k=iaqK3nq38ZMOudibQT8LnjSg&s=640
```