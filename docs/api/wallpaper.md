---
title: 随机动漫
---

<center><h1>小窝动漫</h1></center>

## 简介

小窝漫图，是一个外链形式的壁纸服务，通过固定一个 URL 随机输出图片，每次刷新都会输出不一样的图片！
随机提供动漫二次元风格壁纸，文件格式不一定。（由于运营成本限制，目前本 API 借助 图床/CDN 等平台托管图片。欢迎给予资源赞助~）

## 接口说明

如果您已开始使用本 API 服务，则默认视为遵守 [本约定](/Notice/appointment)。

<p>图片版权归原作者所有，本站不为滥用本 API 进行违规操作者承担责任。</P>

::: tip
已开启域名白名单验证， <a href="https://www.flagg.cn/examine.html" target="_blank">留言申请</a> 调用吧！速度嘎嘎快！
:::

### 请求地址

|地址  |协议   |方法    | 线路|
| :--: | :---: | :----: | :---: |
|images.gitcc.cn/|HTTPS|Any|境内|

### 请求参数

| 参数       | 可选 | 说明                          |
| ---------- | ---- | ----------------------------- |
| images(默认）| 否   | 默认图库（含二次猿、风景）  |
|   acg      | 否   | 二次猿                        |
| beauty     | 否   | 小姐姐                        |

## 使用示例

把本站 URL 复制到你需要展示图片的地方中，相当于图片的文件地址。

### 基本调用

```html
https://images.gitcc.cn/images (默认)
https://images.gitcc.cn/images/acg (二次猿)
https://images.gitcc.cn/images/beauty (小姐姐)
```
### 多次调用
<P>使用随机数载入的情况通常在一个页面多次调用随机图的时候，比如首页文章列表，否则图片都是一样的。</p>
随机数载入方式   <font color="red">“https://images.gitcc.cn/images?随机数”</font>  ，就是原有 URL 上添加一个英文问号和任意随机数。

```html
https://images.gitcc.cn/images?d8c196951e5bbf3edd158de4
https://images.gitcc.cn/images/acg?9f0d34f8ee6f96b56d8902d1
```

## 建议反馈

如果你有好看的图片（包含二次猿、风景、小姐姐等）可<a href="tencent://message/?uin=25998584&Site=Sambow&Menu=yes">投稿给我</a>。 我会将你记录到[投稿记录单](/Notice/Contribution)里且附上链接。

## 测试

直接引用图片

<img src="https://images.gitcc.cn/images/acg" style="border: 1px solid #ddd; border-radius: .5em">