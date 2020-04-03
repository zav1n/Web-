let str = "appleapple"
let max = 0
let fn1 = (str) => {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if (!obj[str.charAt(i)]) {
            obj[str.charAt(i)] = 1;
        } else {
            obj[str.charAt(i)]++
        }
    }
    for (var key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            name = key;
        }
    }
    console.log(`该字符串出现次数最多的是:${name}出现了${max}次`)
}

fn1(str)