let arr = [2, 9, 5, 6, 4, 1, 8, 3, 7]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
}
bubbleSort(arr)
console.log(arr);
//不能直接写在控制台,因为排序改变了原来的数组