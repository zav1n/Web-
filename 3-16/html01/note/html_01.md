# HTML01(markdown)

### 前端介绍
### 项目开发流程(前端在中间所处的位置及作用)

### 班级规定

1. **睡午觉**
2. 上课不要做**影响他人**的事情
3. 下课不要玩游戏或看淘宝

### 前端书籍介绍
1. head first html and css(没听过公共课的同学)
2. JavaScriptDOM编程艺术(已经听过公共课并掌握HTML和CSS的同学)
3. JavaScript高级程序设计(上班后都可以看看,重点第一章-第九章)
### 编程小游戏
1. 人力资源机器(手机版译名:程序员升职记)
### 前端学习网站

1. w3cschool [w3cschool](https://www.w3school.com.cn/)
2. 菜鸟教程 [菜鸟教程](https://www.runoob.com/)
3. MDN [MDN](https://developer.mozilla.org/zh-CN/)

### 前端课程介绍

#### 基础

+ HTML
+ CSS
+ **JS**

#### 进阶

+ HTML5
+ CSS3
+ ajax
+ jQuery

#### 框架

+ **Vue**
+ React
+ 小程序

### 项目开发工具(IDE)
1. **vscode**
2. Hbuilder/X
3. Sublime3/2
4. WebStorm

### 浏览器选择
一般选择**谷歌浏览器**,因为方便调试(debugger) 查看网页的代码通过**F12**查看

浏览器的内核有哪些?内核是什么?

### HTML和CSS和JS的关系
HTML相当于人的**身体**,表**结构**  
CSS相当于人的**衣服**,表**样式**
JS相当于人的**动作**,表**行为**

### 做一个最简单的网页

+ 将文件改成.html后缀的文件
  + .html和.htm有什么区别(没区别)
  + .jpg .jpeg 没区别
+ 写前端代码

### HTML前置介绍

HTML hyper text markup language 超文本标记语言 (HTML是语言.但是不是**编程语言**)

HTML他没有逻辑性 他的代码总从上往下运行的 而编程语言 最大的特点(判断和循环)

+ hyper text 除了基本的文本 还可以在文件中加入
  + 列表
  + 表格
  + 表单
  + 图片
  + 音频
  + 视频
  + flash (flash在2020年将全面停运)
+ markup language  标记语言
  + XML 可扩展标记语言(用来做数据的交互) 前后台 或者 后台和后台之间数据交互的媒介
    + JSON(前后端交流 基本靠JSON)
    + DTD文档类型定义
      + 请写一个xml文件 里面表达一个书库 书库里面有三本书?
  + HTML
  + XHTML 更加严格且纯净的HTML文件
    + `<br />`
    + `<P></P>` HTML对大小写不敏感

### HTML介绍
超文本标记语言.本质是一门标记语言,可以在该语言中放置文字,链接,段落,图片,音视频元素

1. 规定html中的所有代码全小写(但是大写没有错误的,所有HTML对大小写不敏感)
2. 需要有缩进(缩进的规则是两个空格或一个tab(4个空格))
   为什么需要缩进? 因为我们需要网页能够清晰的表达结构或者标签之间的关系
3. html**嵌套**head标签和body标签,head标签和body标签互为**并列**关系
4. html的子标签为head和body,head和body的父标签是html,head和body互相为兄弟标签
   通过缩进,我们可以准确的观察到所有标签之间的关系

可以使用vscode 的 ! 再加tab 直接初始化整个html页面

#### 标签的关系

+ 嵌套

  ```html
  <标签1>
  	<标签2>
  	</标签2>
  </标签1>
  ```

+ 并列

  ```html
  <标签1></标签1><标签2></标签2>
  ```

#### 最简单的网页的标签关系

+ 嵌套
  + html **嵌套**着 head 和 body 标签
  + html标签 和 head以及body 是**嵌套关系**
  + html是head和body的**父标签**
  + head和body是html的**子标签**
+ 并列
  + head标签和body标签是**并列标签**
  + head和body互为**并列关系**
  + head和body互为**兄弟节点**

#### 插件安装

open in browser 按住`alt + b` 可以在默认网页打开该文件

按住`shift + alt + b` 可以选择浏览器打开该文件

#### 标记

```
//完整的标记
//有头有尾,成对出现
<html></html>
```
+ 单标签 省略掉尾部标签的标签
  - br 换行标签
  - hr 水平线标签
  - meta 头部描述标签
  - img 图片 最重要的单标签
+ 标签对
  - 大部分的标签都是标签对
  - div,span
  - p,h1-h6

#### div

div 是一个 块标签

+ 页面需要切分成很多个功能块,需要借助的标签就是div,用div来做分割

+ 无语义
+ 独占一行

如果没有div标签包裹的话 所有的文字都会在一行显示

如果是多个连续空格的话 那么在页面解析渲染的时候 只会显示一个空格

#### span

span 是一个 行内(内嵌)标签

+ 不独占一行
+ 区分一个小型区域

#### p

+ p标签和div标签唯一的区别就是 p标签的前后总是会有一个该标签文字大小的空行

+ p标签一般只包含纯文本

#### a

+ 页面间跳转
  + 外网跳转(从一个服务器可能会跳转到另外一个服务器)(通常都写绝对路径)
  + 内网跳转(从服务器的一个位置跳转到该服务器的另外一个位置)(通常都写相对路径)
+ 页面内跳转

#### 相对路径和绝对路径

+ 相对路径 往往没有盘符名或协议名 他是一个分割的/不完整的地址
  + `\note\02-我的第一个文件.html`
+ 绝对路径 一定会有协议名或盘符名
  + `http://www.baidu.com`
  + `C:\Users\lenovo\Desktop\2020\html01\note\02-我的第一个文件.html`

> ?为什么返回上一级不需要写文件的名字 而跳到下一级总是要写文件名字

1. 如何跳转到下一个文件夹中的一个网页
   1. `\`window `/`linux
2. 如何跳转到上一个文件夹中的一个网页
   1. `../`
3. 请实现如下需求: A页面 做三个链接 B页面做三段小说,如何实现点击A页面跳转到B页面的同时还跳转到对应章节

#### 属性
```
<a href="" target=""></a>
```

### 练习题

+ 了解一下 html/xhtml/xml 之间的关系

+ 了解一下 http/https之间的区别
+ 了解一下URL的组成
+ 了解一下浏览器的内核有哪些(*) 还要能够默写和读出哪些内核是什么
+ 了解html的结构
+ 熟悉html代码
+ 熟悉div/span/a/p/img
+ 图片热点