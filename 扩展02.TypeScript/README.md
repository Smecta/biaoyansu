# TypeScript 是什么
 
是JavaScript的超群，它可以编译为ES5 ES6 ES7 标准的 js

## 初始化 ts

安装nodejs 查看npm版本 包管理工具 npm -V

安装typescript 

``` ts
npm init  //当前目录初始化

npm install typescript -g //建议全局安装 -g 代表全局，可以使用tsc命令

tsc test.ts //执行后 会编译一个 test.js

tsc test.ts --watch //监控test.ts文件

```

## ts 数据类型

* 字符串的定义方式：

``` ts

let a:string = "字符串"

let b:string = 1; // 错误的 赋值

```

* 数字的定义方式
``` ts
let b:number = 1
```

* 数组的定义方式
``` ts
    //字符串数组
let c:string[] = ['xiaoming','xiaogang','xiaohong']
    //数字数组
let c:number[] = [1,2,3]

```

* 布尔类型的定义方式
``` ts
let e:boolean = true
```

* 元祖类型的定义方式
数组的一种，比较严格
``` ts
let f:[number,string] = [1,'hello']
```
* 不限制定义方式
``` ts
let g:any = 1
```
* void 类型的定义方式是空

一般定义函数的时候使用
``` ts
function fun():void {
    alert(1)
}
// 没有返回的值就是用void 返回的有值的话就别的类型
```

## 函数类型
共两种
* 参数限制类型 
* 返回值限制类型
``` ts
// ES5
function hello (name:string):string {
    retrun 'hello'+ name
}
console.log(hello('王花花'))

let obj = {a:1,b:1}

function add(obj){
    return obj.a + obj.b
}


// ES6

let hello = (name:string):string => `hello ${name}`
console.log(hello('韩梅梅'))

// ES6 解构写法
let obj = {a:1,b:1}
let add = ({a,b}:{a:number,b:number}):number => a + b


```

## Class 类的类型

TS 类的定义，类的继承，可以给类里面的属性和方法 限定权限 
* 默认公共可见  public  

    ` public name: string；` 

* 如果定义了private 私有的 只能在类里面进行调用 

    ` private name: string；` 

* 如果定义了 protected 保护的 只能自己和子类可见 外部不可见

    ` protected name: string；`

总结：private 比 protected 更加严格

``` ts
// 类的定义
class Person {
    // 属性 默认为public
    public name: string；
    // 构造函数 关键词固定写法 类实例一瞬间执行
    constructor(name:string){
        this.name = name
    }
    // 方法
    greet(){
        return `$(this.name)向你问好`;
    }
}
// 类的继承
class Student extends Person{
    major: string;
    
    constructor(name:string,major:string){
        父级类的constructor 把name 传进去 剩下的父级来处理
        super(name);
        this.major = major

    }

    studentGreet(){
        return `${this.major}系的${this.name}向你问好`
    }
}

// let xiaoming = new Person('xiaoming')
// console.log(xiaoming.greet())

let xiaoming = new Student('xiaoming','哲学')
console.log(xiaoming.studentGreet())
// 哲学系的xiaoming向你问好
```

## 接口

限制数据结构，以及用于描述结构基础的框架

``` ts

// 接口属性

createUser({
    name:'王花花', 
    age:18, 
    gender:'male', 
    balance:100
    })

// 此时的data:object的object 太广泛

// {name:string,age:number} 就是接口

interface User {
    // 必填
    name:string,
    // 必填
    age:number,
    // 可选的传参 加？值类型指定是字符串
    gender?: string,
    // 其他属性 键名是任意字符串，值是任何类型
    [key:string]:any
}

function createUser(data:User){
    console.log(data)
}


//接口限制函数
// 函数接口
interface UserFunction{
    // 设定参数的限制和返回值的限制 @param name @param age
    (name:string, age:number,):void;
}
// 接口定义后，直接使用，不在函数里进行限制
let createUser:UserFunction = (name,age) => {
    console.log(name,age)
}
    // 函数调用
createUser('王花花',18)

// 接口限制类



```