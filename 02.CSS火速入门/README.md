## CSS 火速入门

### CSS语法

> 技巧1 样式调整

1. 宽 width
2. 高 height
3. 颜色 color
4. 大小 font-size
5. 间距 letter-spacing
6. 背景颜色 background-color

等等，业务时间到MDN之类的文档网站上去查它们的用法，增长见识

> 技巧2 布局调整

Flex 布局

Grid 布局

说明：

正常的文档流，均是元素从上到下，从左到右依次排列
块级元素因为占据一整行，所以均是从上到下依次排列

脱离文档流
``` css
position: absolute // 绝对定位
或
position: fixed  // 固定定位
float: left  // 浮动属性

```

元素脱离文档流，则后面的元素会占用这个元素的空间，这个元素则会被拿走，使用left,top 根据一点的规则来自由定义这个元素的位置，如果存在折叠可以使用z-index来定义谁在上谁在下

需要注意: 使用transform 移动位置不会导致脱离文档流，所占用的空间也会停留在原位

响应式布局

通过@media来查询屏幕宽度 根据页面显示效果把相对应的样式覆盖来正常显示布局
``` css
@media(max-width:1024px){
    /* ... */
}
``` 
训练布局规划 
1. 分析规则网站布局

    导航->头部信息->内容区域->底部信息
2. 分析不规则网站布局(多练、多看)

> 技巧3 形状、特效的拆解与合并

前端工程师需要掌握一些设计方面的知识，因为前端页面存在不规则图形和动画效果，复杂的图形一般都是有基本的图形组成，所谓的点-线-面

例子一 三角形

利用css画一个三角形，可以利用div元素，都有四条边，border边框的方式，border-left border-top border-right border-bottom , 可以通过把div的高度和宽度取消，通过调整边框的宽度，来制作出一个三角形
``` html 
<div class="triangle"></div> 
```
``` css
.triangle {
    border: 40px solid #eccc68;
    width: 0;
    height: 0;
    border-top: none;
    border-left-color: transparent;
    border-right-color: transparent;
}
```

例子二 波纹动画

可以拆解成两个同样的元素叠在一起，底下的元素先放大，然后把透明度最终过渡为0，就能实现这种效果

``` html
<div class="circle circle1">
    <div class="circle circle2"></div>
</div>
```

``` css
.circle {
    width: 30px;
    height: 30px;
    background: #7bed9f;
    border-radius: 50%;
}

.circle1 {
    positon: relative;
}

.circle2 {
    position: absolute;
    animation: 2s ease-in-out ripple infinite;
}

@keyframes ripple {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(1.5);
    }
}
```
重点：想理解前端页面和组件的特效，先去研究一下设计的基础原则和理论，不但能加快开发效率，而且能减少与设计师沟通的成本和时间，变相的减少加班

> 技巧4 页面组件设计原则

先研究下设计稿，分析页面组件那些大致相同，把这些相同的组件样式通过class或者其他方式做成独立的整体，再通过组合多个class扩展原有的样式

例子一

比如按钮可能有不同颜色，不同大小，但是形状和文字 大小间距一样，通过一个button class 来定义通用样式 利用color class 来控制它的颜色
``` html
<button class="button green">+Add</button>
<button class="button blue">+Save</button>

```
``` css
.button {
    width: 75px;
    height: 50px;
    padding: 15px 20px;
}

.blue {
    background-color: blue;
}

.green {
    background-color: green;
}
```

注意：

1. 如果发现大多数写重复的css style，那么这些代码应用于多个组件,这种情况下，本着不编写重复代码的精神，单独抽离出来作为工具class (Utility class)

2. 设计组件时，首先分析设计稿中哪些组件大体相同，然后把它们的公共样式抽离出来，在特殊情况时通过组合class来覆盖已有的样式，另外在设计组件时，只关心组件盒子内部的区域，不要设置像外边距这样的属性，它们应该由包含这个组件的容器来设置，因为相同的组件在不同容器中的位置和间距可能不同。

> 技巧5 CSS模块化学习

分解成独立模块，整体上CSS可以做的操作有：

* 通过选择器选择对应的 html 元素，应用样式
* 设置元素外观，比如颜色、背景、字体等
* 调整元素的位置和与其他元素的间距
* 安排一组元素或者整个页面的布局
* 覆盖或继承已有样式

> 参考资料：
> 
> MDN: https://developer.mozilla.org/en-US/docs/Web/CSS
> W3Schools: https://www.w3schools.com/css/default.asp


#### css 引入方式

    外部样式
> 在head头部标签内 `<link>`

    内部样式
> 在head头部标签内`<style>`

    内联样式
> 在指定标签里添加样式 `style=""`

加入 !important 权重是最高的，优先使用

### CSS选择器

1. 元素选择器

    eg: 

    h1 {}  h2 {} 

    选择器分组,可以拥有相同属性

    h1, h2, h3 {}

2. 类选择器和ID选择器

    给元素一个class="" 或者id=""

    类选择器 class .class{}

    ID选择器 id #id{}

3. 属性选择器

    选取元素属性的选择器

    [元素属性名]{}
    值也选中
    [属性名="值"]{}
    包含关系
    [属性名*="值"]{}
    匹配开始的
    [属性名^="值"]{}
    匹配属性包含的最后一个
    [属性名$="值"]{}

4. 后代选择器

    后台选择中间加空格 {}

5. 相邻选择器及通用相邻选择器

    兄弟选择器（相邻选择器）只能从上往下选择

    .a + div //选择a下面的一个

    通用相邻选择器 只能从上往下选择
    
    .a ~ div  //选择a下面的所有


6. 伪类选择器

    选择器加:条件{}

    :link{} 未访问的链接

    :visited{} 已经访问过的链接

    :hover{} 鼠标悬停

    :active{} 鼠标激活

    :focus{} 聚焦后


7. 伪元素选择器

    单冒号和双冒号 是相同效果，最好统一使用一种规范

    :first-letter{} //第一个字符

    :after{
        content:'',
    } //内容最后添加内容

    ::before {
        content:'',
    } //内容追加到前面

    :first-child{} 第一个

    :last-child{} 最后一个

    :nth-child(n){} 第n个

8. 选择器权重

![权重图片](https://cdn.biaoyansu.com/8c0211cadd362e8cadc0349aaec9deba.png)

可以覆盖行内样式的只有 !important

权重的计算
权重：style 属性（内联） > ID 选择器 > 类选择器 / 属性选择器 / 伪类选择器 > 元素选择器

将纵轴的四级用数字的方式记录为 0，0，0，0 即 行内样式，ID选择器，类选择器，元素选择器。这样无论选择器有多复杂，都可以精确的计算出来。
选择器	权重

a	0,0,0,1（最低）
p a	0,0,0,2
p > span a	0,0,0,3
.black	0,0,1,0
[class="black"]	0,0,1,0
a.black	0,0,1,1
#sober	0,1,0,0
a#sober.black	0,1,1,1
p a#sober.black	0,1,1,2（最高）

### 字体属性

衬线字体  serif

非衬线字体 sans-serif

* font-family 字体类型

* font-weight 字重字体加粗

* font-size 字体大小

### 文字属性

默认向左对齐

* text-align 文字对齐方式 默认向左 left right center justify(向两端对齐，平铺化)
* line-height 行高 
* text-decoration 文字装饰 默认 none 无 underline 下划线 overline 上划线 line-through 删除线

### display属性

元素的显示方式

* display:block; 块级元素 占据整个宽度 即使设置了width宽度,也要独占一行整宽（margin填充剩下的部分）同时也不会占据不到100%的宽度

* display:inline; 行内元素，内嵌行内文字，边缘padding只能变化左右宽度，上下高度不变

* display:inline-block; 行内块元素，内嵌行内块文字，边缘padding可以变化上下左右宽高度 按钮 导航链接

* display:none; 隐藏块元素

### 框

盒子模型

### 行框

![行框](https://cdn.biaoyansu.com/MIR0XElXko0ByiwvoqPtun9kamtUgTdUDxvhI3i9.jpeg)

### 继承

全局选择器 可以覆盖 继承样式

继承来的样式权重很低，甚至是0以下的全局选择器

