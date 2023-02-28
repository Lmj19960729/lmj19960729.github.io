**WXML**:WeiXin Markup Language（页面结构文件）是小程序框架设计的一套标签（标记）语言。用于渲染界面，它结合基础组件和时件系统，可以构建出页面结构.WXML 文件后缀名是 .wxml，语句在语法上同 HTML 非常相似
####标签与属性
```
语法规则：
1、所有元素都必须闭合标签且小写：
<text（小写）> Hello World </text>
2、所有元素都必须正确嵌套：
<view>（开始标签1）<text>（开始标签2）Hello </text>（结束标签2)</view>（结束标签1）
3、属性值必须使用引号保卫：
<text id=“myText”（参数值必须使用引号包围）> myText </text>
4、WXML中连续出现多个空格会被合并为1个空格。
```
####组件列表
基础组件分为以下七大类：
视图容器(View Container)：
<table>
<tr><th>组件名</th><th>说明</th></tr>
<tr><td>view</td><td>视图容器</td></tr>
<tr><td>scroll-view</td><td>可滚动视图容器</td></tr>
<tr><td>swiper</td><td>滑块视图容器</td></tr>
</table>
基础内容(Basic Content)：
<table>
<tr><th>组件名</th><th>说明</th></tr>
<tr><td>icon</td><td>图标</td></tr>
<tr><td>text</td><td>文字</td></tr>
<tr><td>progress</td><td>进度条</td></tr>
</table>
表单(Form)：
<table>
<tr><th>标签名</th><th>说明</th></tr>
<tr><td>button</td><td>按钮</td></tr>
<tr><td>form</td><td>表单</td></tr>
<tr><td>input</td><td>输入框</td></tr>
<tr><td>checkbox</td><td>多项选择器</td></tr>
<tr><td>radio</td><td>单项选择器</td></tr>
<tr><td>picker</td><td>列表选择器</td></tr>
<tr><td>picker-view</td><td>内嵌列表选择器</td></tr>
<tr><td>slider</td><td>滚动选择器</td></tr>
<tr><td>switch</td><td>开关选择器</td></tr>
<tr><td>label</td><td>标签</td></tr>
</table>
导航(Navigation)：
<table>
<tr><th>组件名</th><th>说明</th></tr>
<tr><td>navigator</td><td>应用链接</td></tr>
</table>
多媒体(Media)：
<table>
<tr><th>组件名</th><th>说明</th></tr>
<tr><td>audio</td><td>音频</td></tr>
<tr><td>image</td><td>图片</td></tr>
<tr><td>video</td><td>视频</td></tr>
</table>
地图(Map)：
<table>
<tr><th>组件名</th><th>说明</th></tr>
<tr><td>map</td><td>地图</td></tr>
</table>
画布(Canvas)：
<table>
<tr><th>组件名</th><th>说明</th></tr>
<tr><td>canvas</td><td>画布</td></tr>
</table>


####属性
组件是视图层的基本组成单元。一个组件通常包括“开始标签”和“结束标签”，属性就是用来修饰这个组件的，内容在两个标签之内。公共属性如下：
<table>
<tr>
<th>属性</th>
<th>类型</th>
<th>描述</th>
<th>注解</th>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>组件的唯一标识</td>
<td>保持整个页面的唯一</td>
</tr>
<tr>
<td>class</td>
<td>String</td>
<td>组件的样式类</td>
<td>在对应的WXSS中定义样式类</td>
</tr>
<tr>
<td>style</td>
<td>String</td>
<td>组件的内联样式</td>
<td>可以动态设置的内联样式</td>
</tr>
<tr>
<td>hidden</td>
<td>Boolean</td>
<td>组件的是否显示</td>
<td>所有组件默认显示</td>
</tr>
<tr>
<td>data-*</td>
<td>Any</td>
<td>自定义属性</td>
<td>组件上触发事件时，会发送给事件处理函数</td>
</tr>
<tr>
<td>bind*/catch*</td>
<td>EventHandler</td>
<td>组件的事件</td>
<td>详见事件</td>
</tr>

</table>



