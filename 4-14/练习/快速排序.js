let arr = [2, 9, 5, 6, 4, 1, 8, 3, 7]

function quickSort(arr){
    if (arr.length <= 1) return arr//最后的结束语句

    let flag = arr.shift()  //取中间值

    let left=[],right=[];//来存左右边的值
    for(let i =0;i<arr.length;i++){
        if(arr[i]<flag){  //如果小于flag就往左边放,否则往右边放
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    //return [左边 flag  右边]
    return[...quickSort(left),flag,...quickSort(right)]
}
console.log(quickSort(arr));