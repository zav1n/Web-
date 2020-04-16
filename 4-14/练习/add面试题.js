
//一个小括号
function addOne(...arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}
console.log(addOne(1, 2, 3)) //1+2+3


//两个小括号
function addTwo(...arr) {
    return function (...arr2) {
        let result = 0;
        let allArr = [...arr, ...arr2] //[1, 2, 3]
        for (let i = 0; i < allArr.length; i++) {
            result += allArr[i]
        }
        return result
    }
}
console.log(addTwo(1, 2)(3)) //1+2+3




