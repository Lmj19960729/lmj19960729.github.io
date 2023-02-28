####微信小程序的新建
```
1.第一次登录微信开发者工具需要使用邮箱绑定的微信扫码激活
2.新建项目，填写APPID（前文说到过如何获取）或使用测试号，但在APP打算上线的话，需要后期改为APPID
3.新建一个程序后，点调试器，可以看到运行视图
4.点击编译，点击真机调试，即可扫码调试使用
```
####目录结构介绍
使用MINA.html原生框架结构，调试在视图层和逻辑层提供了数据传输和事件系统（即程序员只需要关注数据，也不需要关注操作页面的结构）
<table>
<tr><td>结构</td><td>传统web</td><td>微信小程序</td></tr>
<tr><td>标签</td><td>HTML</td><td>WXLL</td></tr>
<tr><td>样式</td><td>CSS</td><td>WXSS</td></tr>
<tr><td>逻辑</td><td>Javascript</td><td>javascript</td></tr>
<tr><td>配置</td><td>无</td><td>JSON</td></tr>
</table>
由上表，可以看出，微信小程序是四层结构:
```
├──sitemap.json
├──project.config.json
├── app.js
├── app.json
├── app.wxss
├── pages
│   │── index
│   │   ├── index.wxml
│   │   ├── index.js
│   │   ├── index.json
│   │   └── index.wxss
│   └── logs
│       ├── logs.wxml
│       └── logs.js
└── utils
```
<table>
<tr><td>pages</td><td>页面文件夹（该文件夹下保存所有直接显示的页面，初始包括index和log页面）</td></tr>
<tr><td>index</td><td>首页面文件夹（该文件夹保存首页信息）</td></tr>
<tr><td>log</td><td>日志文件夹（保存日志页面的信息）</td></tr>
<tr><td>utils</td><td>第三方的工具js（完全可以删除，对我们开发者来说，我们就是第三方，所以这个就是相当于帮助文档的作用）</td></tr>
<tr><td>app.js</td><td>小程序的入口文件，也是全局文件</td></tr>
<tr><td>app.json</td><td>小程序的全局配置文件，如项目的标题名称等</td></tr>
<tr><td>app.wxss</td><td>默认全局的样式文件</td></tr>
<tr><td>project.config.json</td><td>内容和小程序开放平台详情页面内容相同，比如可以修改小程序的APPID等内容</td></tr>
<tr><td>sitemap.json</td><td>小程序根目录下的 sitemap.json 文件用来配置小程序及其页面是否允许被微信索引。只需要在发布时才使用</td></tr>
</table>
page中每个页面都有四个文件，包括js、json、wxml、wxss四个文件，正好对应微信小程序的四层结构