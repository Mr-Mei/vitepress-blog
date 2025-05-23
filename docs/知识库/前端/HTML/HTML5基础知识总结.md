# HTML5 基础知识总结

## 1.文档类型<!DOCTYPE>

```xml
<!DOCTYPE html>
这句活就是告诉我们使用那个html版本。
只需要记住，看到上面这行代码，说明使用的是html5的版本。
```

## 2.字符集

```xml
<meta charset = "UTF-8">
utf-8是目前最常用的字符集编码方式，其他的还有gb2312(简单中文)，BIG5(繁体中文)，
GBK(全部中文字符)，UTF-8(全世界所有国家需要用到的字符！)。
这里只需要记录UTF-8。
```

注意：**记住一点，以后我们统统使用UTF-8字符集，这样就避免出现了字符集不统一而引起乱码的情况了。**

## 3.标签< h1 >到< h6 >

```xml
<h1>~<h6>
大小依次递减，注意没有<h7>啥的，只有这六个！
```

## 4.文本格式化标签（熟记）

在网页中，有时需要为文字设置粗体、斜体或下划线效果，这时就需要用到HTML中的文本格式化标记：
![在这里插入图片描述](/assets/images/HTML/文本格式化标签.png)
注意：**推荐用哪一个，就是使用哪一个！因为上面的b 、i、s、u只有使用，没有强调的意思。**

## 5.标签属性

```xml
例如：
<hr width="400">
1.属性采用的是“键值对”的形式，key = "value" 格式。
2.属性不分先后顺序！
3.任何属性都有默认值，忽略该属性则取默认值。
```

## 6.图像标签img

```xml
<img src = "图像URL" />    注意：img是单标签和hr，br一样。
这里的img是image图像。
```

![在这里插入图片描述](/assets/images/HTML/img图像标签.png)
**注意：以上几个属性必须牢记！！！**

## 7.链接标签

```xml
<a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
<a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
这里的a是单词anchor的缩写，意思是铁锚，锚。
1. href:用于指定链接目标的url地址，当为标签应用href属性时，它就具有了超链接的功能。
href全称Hypertext Reference.
提醒一下：
如果还不想添加url地址，可以使用" # "来代替一下。
这里的链接不仅仅可以添加网址还可以添加图片，影像之类的。
2. target:制定链接页面的打开方式，有两种取值，self和blank。
blank也可以写成" _blank "(固定写法)。
例如下面的百度链接就是用以下语句写的：
<a href="http://www.baidu.com" target="blank">百度链接</a>
```

## 8.锚点定位

```xml
通过锚点链接可以快速的定位到目标内容。
很好理解在a标签中加入了id的属性：
例如：
<a href="#biaoqian">定位到数字1那里去</a>
<a id="biaoqian">数字1</a>
这里很简单两个命令，就是通过href属性然后定位到了id的属性，很好理解。
```

## 9. base标签

```xml
base可以设置整体的链接的打开状态。
在<head>中设定，也是有两个状态，self和_blank。
```

## 10.特殊字符

![在这里插入图片描述](/assets/images/HTML/特殊字符.png)
注意：以上这些都是很常用的特殊字符。
其中：
**1.空格 的英文全称是no-break space。2.小于号&It的英文全称是less than。3.大鱼号&gt的英文全称是greater than。** 4.其他符号自己搜寻一下就可以。

## 11.注释标签

```xml
<!--我要注释的内容-->
```

注释一般都是给开发人员看的，用来标记一下内容或者代码的功能。

## 12.相对路径

![在这里插入图片描述](/assets/images/HTML/相对路径.png)

**这里一定要理解好和记住两个路径的格式用法！！！**
**容易忘记的是相对路径的第3条，一定要实操一下。**
注意：本地的绝对路径最好不要使用，因为绝对路径一旦换电脑或者换地址，就over了。**不过如果使用互联网上的图片绝对地址是可以的！**

例如：

```xml
<img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png">
这里的地址就是百度图片的地址。
```

## 13.div span标签

```xml
div就是division的英文，分割分区。
span是跨度的意思。
两个标签，最常用的，一定记住。
```

## 14.无序列表ul

```xml
<ul>
<li>...</li>
<li>...</li>
	...
<li>...</li>
</ul>
下面就是通过使用上面格式表现出来：
1234567
```

- 李白
- 杜甫

**注意：在ul标签里面除了li标签，最好不要使用其他的标签。或者将想要创建的标签放到li下面如下。** ![在这里插入图片描述](/assets/images/HTML/ul标签.png)

## 15.有序列表ol

```xml
<ol>
<li>...</li>
...
<li>...</li>
</ol>
下面就是通过使用上面格式表现出来：
123456
```

1. 苹果
2. 香蕉

## 16.自定义列表

```xml
<dl>
	<dt>...</dt>
	<dd>...</dd>
	<dd>...</dd>
	...
	<dt>...</dt>
	<dd>...</dd>
	<dd>...</dd>
</dl>
这里dd标签是来解释dt标签的。
例如：
	<dl>
	<dt>北京</dt>
	<dd>昌平</dd>
	<dd>通州</dd>
	<dd>顺义</dd>
	</dl>
结果如下：
北京
    昌平
    通州
    顺义
```

## 17.font标签

```xml
<font> 规定文本的字体、字体尺寸、字体颜色。
```

## 18. 标签换行

**我们接触的很多标签都是默认换行的，像h1，p等都是默认换行的。**

**自然像span标签，b标签，form表单中的标签基本上都是不换行的。**

## 19. table中的caption标签

---

**表头标签要牢记，此外tr代表行，td代表纵。**

![在这里插入图片描述](/assets/images/HTML/table中的caption标签.png)

## 20. select 和 option 标签

---

**select和option标签组合为：下拉框。**

![在这里插入图片描述](/assets/images/HTML/select和option标签.png)

## 21. input属性type="radio"用法 和 label的for属性

**单选按钮(单选框)：就是讲input的type属性赋值为radio。**

**首先，我们点击label标签中的内容，从而让input单选按钮被选中。**

**这就用到label中的for属性，来指向input的id值！**

**此外，必要时候，我们声明的name属性必须相同。**

![在这里插入图片描述](/assets/images/HTML/label的for属性.png)

## 22. 如果不设置 name属性 和 value值 会怎样？

**我们设置完input等等标签后，提交参数，如果不设置name属性，他就不会传递参数。**

**如果设置了name属性不设置value值，那么它默认传出" on "的值来，也就是说name和value两个属性一定要设置！！！**

## 23. input的type属性的reset 使用

**input的type属性还有一个reset值，作用就是：重置表单。也是很重要的！**

## 24. html 的事件

- **onchange HTML 元素已被改变。**
- **onclick 用户点击了 HTML 元素。**
- **onmouseover 用户把鼠标移动到 HTML 元素上。**
- **onmouseout 用户把鼠标移开 HTML 元素。**
- **onkeydown 用户按下键盘按键。**
- **onload 浏览器已经完成页面加载。**
