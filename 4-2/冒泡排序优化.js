// let arr = [1, 2, 3, 5, 4]
// console.log(bubbleSort(arr))
// 如何优化冒泡排序算法 成功完毕之后就不比较呢???
//1.执行到最后第n-3轮的时候就剩下2个数字没比较，这时已经完成所有排序了，所以在n-3轮的时候就不用比较了
//2.如果数组是[8,7,1,6,2,3,4,5]

//1.可用Array.prototype.reverse()