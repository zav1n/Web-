let str = "level";
let fn1 = (str) => {
    let str2 = ""
    let flag = false;
    length = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        str1 = str.substring(length, length + 1);
        length--
        str2 += str1
    }
    if (str == str2) {
        flag = true
    }
    return flag
}
console.log(fn1(str))