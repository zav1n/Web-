//下面程序输出的结果
let x = [1, 2, 3]
let y = x
let z = [4, 5, 6]
y[0] = 10
y = z
z[1] = 20
x[2] = z = 30 //难点
console.log(x, y, z)


