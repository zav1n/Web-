//问题 我有个N个阶梯 我每次迈出的步子 可以是一个阶梯 也可以是两个阶梯
//请问 爬楼的方法 有多少种?
//爬阶梯利用了斐波那契的方法
/**
 * 解题思路
 * 若爬10层,则
 * fn(10) = fn(9) + fn(8)
 * fn(9) = fn(8) + fn(7)
 * fn(8) = fn(7) + fn(6)
 *  ...
 * fn(3) = fn(2) + fn(1)
 * fn(2) = 2 
 * fn(1) = 1
 * 因为走一步和两步,只有一种或者两种情况,所以第一步和第二步各是1 和 2 ,所以for的判断要从3开始
 */
function ladder1(m) {       //一定要有形参数
    if (m === 1 || m === 2) return m
    let r1 = 1
    let r2 = 2
    let result;
    for (let i = 3; i <= m; i++) {  //i从3开始,因为前面的第1步和第2步的走法只有1种或者2种 
        result = r1 + r2
        r1 = r2
        r2 = result    //这3各条件的顺序不能乱,要不然就不是本题意思
    }
    return result
}
console.log(ladder1(3));
console.log(ladder1(4));
console.log(ladder1(5));
console.log(ladder1(6));

console.log("----------最简便的写法----------------");

function ladder2(n) {
    if (n === 1 || n === 2) {
        return n
    } else {
        return ladder2(n - 1) + ladder2(n - 2)//注意!!是函数里面的fn(n-1)和fn(n-2),而不是n-1和n-2
    }
}
console.log(ladder2(3));
console.log(ladder2(4));
console.log(ladder2(5));
console.log(ladder2(6));
