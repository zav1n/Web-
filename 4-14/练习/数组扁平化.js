//只展开一次数组
let arr = [1, -1, [[2, 0], 5, [3]], 5]
function flatArr(a) {   //一定要有形参!要不然会显示undefined
    let newArr = []  //定义一个空的数组来接新的数组
    for (let i = 0; i < arr.length; i++) {
        if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
            newArr = [...newArr, ...arr[i]]
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr  //一定要return newArr  要不然会显示undefined
}
console.log(flatArr(arr))
console.log("-----------------张开多个数组------------------------");


let arr = [1, -1, [[2, 0], 5, [3]], 5]
function flatArr(a) {   
    let newArr = []  
    for (let i = 0; i < arr.length; i++) {
        if (Object.prototype.toString.call(arr[i]) === "[object Array]") {
            //newArr = [...newArr, ...arr[i]]   只需要改这里
            newArr.push(...flatArr(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr 
}
console.log(flatArr(arr))