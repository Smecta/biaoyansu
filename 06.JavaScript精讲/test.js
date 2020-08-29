// 请将以下所有题目的解封装在函数里。

// 遍历[2, 4, 6, 8, 10]并将它们加起来。
const list = [2, 4, 6, 8, 10]
let num = 0
for (let i=0; i<list.length; i++) {
    num = num + list[i]
}
console.log(num)

// 遍历['y', 'o', 'o', 'o']并将它们连接起来。
const list1 = ['y', 'o', 'o', 'o']
let str = ""
for (let i=0; i<list1.length; i++){
    // str = str +list1[i]
    str += list1[i]
}
console.log(str)
// 遍历[1, 3, 2, 7, 6]并找出所有的偶数，将找到的所有偶数放到一个数组里。
// 被2整除的都是偶数，也就是说余0的都是偶数 求余是%
const list2 = [1, 3, 2, 7, 6]
const result = []

for (let i =0; i< list2.length; i++){
    if(list2[i]%2 == 0){
        result.push(list2[i])
    }
}
console.log(result)

// 通过遍历生成数组[1, 2, 3, 4, 5]。

const result1 = []
const max = 5 
for(let i=1; i<=max;i++){
    result1.push(i)
}

console.log(result1)

// 遍历下方数组，
// ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3']
// 并将其打印为：

// 第1级：a1, a2 , a3
// 第2级：b1, b2 , b3
// 第3级：c1, c2 , c3

const list3 = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3']
const res1 = []
const res2 = []
const res3 = []
// 嵌套循环加控制流
for(let i =0; i<list3.length;i++){
    if(typeof list3[i] == "string"){
        res1.push(list3[i])
    }else{
        for(let j=0;j<list3.length;j++){
            if(typeof list3[j] =='string'){
                res2.push(list3[j])
            }else{
                for(let k =0; k<list3.length;k++){
                    if(typeof list3[k]=='string'){
                        res3.push(list3[k])
                    }
                }
            }
        }
    }
}
// 数组转字符串
const result2 = `
第一级：${res1.join(', ')}
第二级：${res2.join(', ')}
第三级：${res3.join(', ')}
`
console.log(result2)

// 遍历下方数组

// [
//   {
//     name: '王花花',
//     salary: 100,
//   },
//   {
//     name: '李拴蛋',
//     salary: 200,
//   },
//   {
//     name: '牛备备',
//     salary: 300,
//   },
// ]
// 找出工资大于100的人，将找到的人放到一个数组里。

const users = [
      {
        name: '王花花',
        salary: 100,
      },
      {
        name: '李拴蛋',
        salary: 200,
      },
      {
        name: '牛备备',
        salary: 300,
      },
]

const result3 = []

for (let i=0; i< users.length;i++){
    if (users[i].salary > 100) {
        result3.push(users[i])
    }
}
console.log(result3)

// 遍历下方数组

// [
//   {
//     name: '王花花',
//   },
//   {
//     name: '王拴蛋',
//   },
//   {
//     name: '牛备备',
//   },
// ]
// 找出所有姓王的人，将找到的人放到一个数组里。

const users1 = [
      {
        name: '王花花',
      },
      {
        name: '王拴蛋',
      },
      {
        name: '牛备备',
      },
]
const result4 = []

for (let i = 0; i< users1.length; i++){
    // startsWith() 方法 判断字符串 是不是以字符串()里内容开头 返回true和false 相反的是endsWith() 是不是以字符串()里内容结尾
    if(users1[i].name.startsWith('王')){
        result4.push(users1[i])
    }
}
console.log(result4)

// 遍历下方数组
// [
//   {
//     name: '王花花',
//     playing: ['CS', '红警'],
//   },
//   {
//     name: '李拴蛋',
//     playing: ['守望屁股', '吃鸡', 'CS'],
//   },
//   {
//     name: '牛备备',
//     playing: ['红警', '吃鸡'],
//   },
// ]
// 完成一个搜索函数

// search('CS'); // ["王花花", "李拴蛋"]
// search('吃鸡'); // ["李拴蛋", "牛备备"]
// search('红警'); // ["王花花", "牛备备"]
// search('守望屁股'); // ["李拴蛋"]

const list4 = [
      {
        name: '王花花',
        playing: ['CS', '红警'],
      },
      {
        name: '李拴蛋',
        playing: ['守望屁股', '吃鸡', 'CS'],
      },
      {
        name: '牛备备',
        playing: ['红警', '吃鸡'],
      },
]
function search(keyword){
    const result5 = []
    for(let i=0; i< list4.length;i++){
        // includes() 方法用来判断一个数组是否包含一个指定的值,如果是返回 true,否则false。
        if(list4[i].playing.includes(keyword)){
            result5.push(list4[i].name)
        }
    }
    return result5
}

console.log(search('吃鸡'))
console.log(search('红警'))

// 遍历下方数组
// [
//   {
//     name: '王花花',
//     playing: ['CS', '红警'],
//   },
//   {
//     name: '李拴蛋',
//     playing: ['守望屁股', '吃鸡', 'CS'],
//   },
//   {
//     name: '牛备备',
//     playing: ['红警', '吃鸡'],
//   },
//   {
//     name: '木哈哈',
//     playing: ['红警', 'CS', '吃鸡'],
//   },
// ]
// 完成一个搜索函数

// search(['CS', '红警']); // ["王花花", "木哈哈"]
// search(['吃鸡']); // ["李拴蛋", "牛备备", "木哈哈"]
// search(['守望屁股', '吃鸡', 'CS']); // ["李拴蛋"]

const list5 = [
      {
        name: '王花花',
        playing: ['CS', '红警'],
      },
      {
        name: '李拴蛋',
        playing: ['守望屁股', '吃鸡', 'CS'],
      },
      {
        name: '牛备备',
        playing: ['红警', '吃鸡'],
      },
      {
        name: '木哈哈',
        playing: ['红警', 'CS', '吃鸡'],
      },
]
function search1(keywords){
    const result6 = []
    for(let j =0; j< list5.length;j++){
        if (isSuperSet(list5[j].playing, keywords)) {
            result6.push(list5[j].name)
        }
    }
    return result6
}

function isSuperSet(a,b){
    let is = true
    for(let i =0; i<b.length;i++){
        if(!a.includes(b[i])){
            is = false
            break
        }
    }
    return is
}

console.log(search1(['CS','红警']))
console.log(search1(['吃鸡']))
console.log(search1(['守望屁股', '吃鸡', 'CS']))