至少回答出10个ES6新增的东西

for...of

//4-1：
1 .ES6新增常用方法
2. let 块级作用域,怎么使用?
3. const   用来定义常量,一旦定义了,后面就不能修改了
4. 箭头函数=> *function()中this是指向调用这个函数的对象

    箭头函数中,this指向了window
    arguments,不能使用
    由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略

//4-2：
数组中ES6新增
    1.forEach   
	forEach() 被调用时，不会改变原数组
	但是有个致命缺陷，不能提供返回值return
	forEach的写法和map很相识，但是map有return，forEach没有return
	与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，并且不可链式调用

    2.map不是ES6新增的   
	
    3.filter   
    4.sort
    5.新增两个数据类型，Set&Map

//4-3 :
	1.string,prototype.startsWith
	    判断给定的字符串是否等于当前字符串开头
	    语法：str.startsWith(searchString[, position])
