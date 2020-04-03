//方法一 利用栈的先进后出
let str = "hello"
let fn1 = (str) => {
    arr = [...str]
    length = arr.length
    arr1 = []
    for(let i=0;i<length;i++){
        arr1.push(arr.pop());
    }
    return arr1.join('')
}
console.log(fn1(str))

//    栈
//
//    |              |          |              |
//    |      h       |          |              |
//    ----------------          ----------------
//    |              |          |              |
//    |      l       |          |      o       |
//    ----------------          ----------------
//    |              |          |              |
//    |      o       |          |      l       |
//    ----------------          ----------------
//    |              |          |              |
//    |      l       |          |      l       |
//    ----------------          ----------------
//    |              |          |              |
//    |      e       |          |      e       |
//    ----------------          ----------------
//    |              |          |              |
//    |              |          |      h       |
//    ----------------          ----------------


//方法二
let fn2 = (str) =>{
    let str2 = ""
    length = str.length-1;
    for(let i=0;i<str.length;i++){
        str1 = str.substring(length,length + 1)
        length--
        str2 +=str1
    }
    return str2
}
console.log(fn2(str))