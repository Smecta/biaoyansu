## javascript 

引入外部

标签内
script

### 基本语法

一个分号 是一条语句（分号可加可不加，严格加上，便于识别）

关键词 关键词不允许重新定义

单行注释 和 多行注释

### 数据类型

Number 数字类型

    整型 浮点数 负数 NaN(Not a Number) Infinity(无限大) 科学计数法

String 字符串类型

    任意字符包涵到引号里面 双引号和单引号 都可以
    es6 模板字符串 反引号
    程序不会理解字符串

Boolean 布尔值类型

    True & False 真假
    判断的结果是真还是假

Array 数组类型

    中括号包括里面的内容
    多条结果，多条数据，关系平行，可以分组

Object 对象类型

    大括号包括里面的内容
    键值对关系



### 变量

variable 变量 var 

一个变量只能赋值一个值，可以进行覆盖赋值

使用 typeof 判断类型

这里 数组 无法使用这个进行严谨的判断会返回object

Es6 let 定义变量


### 控制流 if&else

条件判断  只有一条语句可以省略花括号

要记就只记false倾向的值，而且记两个就好了
!!0 // false
!!'' // false
其他的如undefined、null、NaN一看就是怪胎，你不false谁false？

在正常的业务中，大部分的数据都是用户动态产生的，如帖子、评论、个性签名、手机号等等， 这类动态数据中的大部分我们并不在乎，我们在乎的是一些起到记录状态和重要信息的数据， 如登录与否（状态）、手机号（重要信息）。 当需要用到这些数据时我们通常会先判断目标数据是否存在，一般情况下只有存在时我们才会继续，若不存在则执行另一些操作。

### 控制流 switch

针对情况比较多，且条件为确定的则使用switch


### 运算符

一个等号是赋值，对比的话，则使用双等号和三等号

== //对比，判断是否相等 === //对比，判断是否相等（严格模式） 如果值的类型不同，认为不同，而‘==’在对比中会自动转换类型

+号 不仅仅可以进行数字类型的计算，也可以对字符串进行拼接

### 循环 for

    for 循环体 花括号内 会一遍一遍执行 直到循环结束
    
    初始值 ，什么情况下继续循环，循环情况下怎么变

### 循环 while

    只要。。。
    当。。。

    使用while 需要知道这个条件必须会结束，不然会陷入死循环
    只有停止了才会到下一步


### 函数

    函数能做什么
    1. 用于封装代码
    2. 用于控制数据流
    3.  

### 闭包
