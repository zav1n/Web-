let arr = [1, 4, [2, [3, 3], 2], 1]     
    function flatArr(arr) {
      let newArr = [];
      for(let i = 0; i < arr.length; i++) {
        if(Object.prototype.toString.call(arr[i]) === "[object Array]") {
          //当前数组元素是数组的话就递归
          newArr = [...newArr, ...flatArr(arr[i])]    
        } else {
          //当前数组元素不是数组的话就是直接push
          newArr.push(arr[i])
        }
      }
      return newArr
    }
    debugger
    console.log(flatArr(arr))