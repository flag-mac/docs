(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{417:function(t,a,e){"use strict";e.r(a);var s=e(44),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("center",[e("h1",[t._v("小窝动漫")])]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("小窝漫图，是一个外链形式的壁纸服务，通过固定一个 URL 随机输出图片，每次刷新都会输出不一样的图片！\n随机提供动漫二次元风格壁纸，文件格式不一定。（由于运营成本限制，目前本 API 借助 图床/CDN 等平台托管图片。欢迎给予资源赞助~）")]),t._v(" "),e("h2",{attrs:{id:"接口说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口说明"}},[t._v("#")]),t._v(" 接口说明")]),t._v(" "),e("p",[t._v("如果您已开始使用本 API 服务，则默认视为遵守 "),e("a",{attrs:{href:"/Notice/appointment"}},[t._v("本约定")]),t._v("。")]),t._v(" "),e("p",[t._v("图片版权归原作者所有，本站不为滥用本 API 进行违规操作者承担责任。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("💨")]),t._v(" "),e("p",[t._v("已开启域名白名单验证， "),e("a",{attrs:{href:"https://www.flagg.cn/api.html",target:"_blank"}},[t._v("留言申请")]),t._v(" 调用吧！速度嘎嘎快！")])]),t._v(" "),e("h3",{attrs:{id:"请求地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求地址"}},[t._v("#")]),t._v(" 请求地址")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("地址")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("协议")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("线路")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("images.gitcc.cn/")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("HTTPS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Any")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("境内")])])])]),t._v(" "),e("h3",{attrs:{id:"请求参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求参数"}},[t._v("#")]),t._v(" 请求参数")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("可选")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("images(默认）")]),t._v(" "),e("td",[t._v("否")]),t._v(" "),e("td",[t._v("默认图库（含二次猿、风景）")])]),t._v(" "),e("tr",[e("td",[t._v("acg")]),t._v(" "),e("td",[t._v("否")]),t._v(" "),e("td",[t._v("二次猿")])]),t._v(" "),e("tr",[e("td",[t._v("beauty")]),t._v(" "),e("td",[t._v("否")]),t._v(" "),e("td",[t._v("小姐姐")])])])]),t._v(" "),e("h2",{attrs:{id:"使用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),e("p",[t._v("把本站 URL 复制到你需要展示图片的地方中，相当于图片的文件地址。")]),t._v(" "),e("h3",{attrs:{id:"基本调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本调用"}},[t._v("#")]),t._v(" 基本调用")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("https://images.gitcc.cn/images (默认)\nhttps://images.gitcc.cn/images/acg (二次猿)\nhttps://images.gitcc.cn/images/beauty (小姐姐)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"多次调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多次调用"}},[t._v("#")]),t._v(" 多次调用")]),t._v(" "),e("P",[t._v("使用随机数载入的情况通常在一个页面多次调用随机图的时候，比如首页文章列表，否则图片都是一样的。")]),t._v(" "),e("p",[t._v("随机数载入方式   "),e("font",{attrs:{color:"red"}},[t._v("“https://images.gitcc.cn/images?随机数”")]),t._v("  ，就是原有 URL 上添加一个英文问号和任意随机数。")],1),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[t._v("https://images.gitcc.cn/images?d8c196951e5bbf3edd158de4\nhttps://images.gitcc.cn/images/acg?9f0d34f8ee6f96b56d8902d1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"建议反馈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建议反馈"}},[t._v("#")]),t._v(" 建议反馈")]),t._v(" "),e("p",[t._v("如果你有好看的图片（包含二次猿、风景、小姐姐等）可"),e("a",{attrs:{href:"tencent://message/?uin=25998584&Site=Sambow&Menu=yes"}},[t._v("投稿给我")]),t._v("。 我会将你记录到"),e("a",{attrs:{href:"/Notice/Contribution"}},[t._v("投稿记录单")]),t._v("里且附上链接。")]),t._v(" "),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),e("p",[t._v("直接引用图片")]),t._v(" "),e("img",{staticStyle:{border:"1px solid #ddd","border-radius":".5em"},attrs:{src:"https://images.gitcc.cn/images/acg"}})],1)}),[],!1,null,null,null);a.default=r.exports}}]);