// Check if a String is a Palindrome 

function isPalindrome(str){
    let temp=""
for(let i=str.length; i>=0;i--){
     temp+=str[i]
}
return str===temp
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))