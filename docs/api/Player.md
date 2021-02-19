---
title: H5 弹幕播放器
---

<center>
    <h1>
        H5弹幕播放器
    </h1>
</center>

### 使用方法

支持`m3u8`、`mp4`、`flv`、等常见视频格式.
支持`P2P`加速.
支持`H5`适配`Android`、`IOS`.

如果您已开始使用本 API 服务，则默认视为遵守 [本约定](/Notice/appointment)。

!> 注：只支持直链视频地址

### 参数

<div class="ks-table">
                <table>
                    <thead>
                    <tr>
                        <td>调用地址</td>
                        <td>请求方式</td>
                        <td>协议</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>https://h5.gitcc.cn/player/?url=视频地址</td>
                        <td>POST/GET</td>
                        <td>https</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
### 文章内使用方法

```html
<iframe src="https://h5.gitcc.cn/player/?url=直链视频地址" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="500px" frameborder="0"></iframe>
```

### 请求示例

<iframe src="https://h5.gitcc.cn/player/?url=https://video.gitcc.cn/%E3%81%BF%E3%82%84%E3%81%96%E3%81%8D%20%E3%81%AF%E3%82%84%E3%81%8A/%E4%BE%A7%E8%80%B3%E5%80%BE%E5%90%AC/%E4%BE%A7%E8%80%B3%E5%80%BE%E5%90%AC.mp4" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="500px" frameborder="0"></iframe>