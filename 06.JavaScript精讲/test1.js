function getarrmax(arr) {  //定一个 函数 getarrmax 函数名 arr 形参
  var max = arr[0];   // max 等于实参的数组的 第一个元素 
  for (i = 1; i <= arr.length; i++) {
    if (arr[i] > max) { // 数组第二个元素 大于 第一个元素 
        // 数组第二个元素 大于 第一个元素 arr[i]= 3
        // 数组第三个元素 大于 第二个元素 arr[i]=  4
        // 数组第四个元素 大于 第三个元素 arr[i]=  5 
        // 数组第五个元素 大于 第四个元素 arr[i]=  9
      max = arr[i]; //
    }else{
        
    }
  }
  return max; // 完成循环 arr[i] 9 
}
var re = getarrmax([2, 3, 4, 5, 9]);
console.log(re); //9

