let fn1 = (str) => {
    let palindromeStr = "";
    let tempPalindrome = "";
    for (let i = 0; i < str.length; i++) {
        tempPalindrome = ""
        for (let j = i; j < str.length; j++) {
            tempPalindrome += str.charAt(j)
            if (fn2(tempPalindrome) && tempPalindrome.length > palindromeStr.length) {
                palindromeStr = tempPalindrome
            }
        }
    }
    return palindromeStr
}

let fn2 = (s) => {
    let rev = s.split('').reverse().join('');
    return rev === s;
}

console.log(fn1("ddabbade").length)