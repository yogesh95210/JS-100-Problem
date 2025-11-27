// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.
// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: s = "zxyzxyz"
// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

// Example 2:
// Input: s = "xxxx"
// Output: 1

function lengthOfLongestSubstring(str){     // Brute Force Approch
let maxLen=0

for(let i=0;i<str.length;i++){
    let temp= ""
    for(let j=i;j<str.length;j++){
        if(temp.indexOf(str[j])!==-1){   // iska matlab hain ki temp mein char hain
            break;
        }
        temp= temp+ str[j]
        maxLen= Math.max(maxLen,temp.length)
    }
}
return maxLen

}
console.log(lengthOfLongestSubstring("zxyzxyz"))
console.log(lengthOfLongestSubstring("xxxx"))


function lengthOfLongestSubstringOptimal(str){
 let maxLen=0
 let set= new Set()
 let l =0
 for(let r=0;r<str.length;r++){
    while(set.has(str[r])){
        set.delete(str[l])
        l++
    }

    set.add(str[r])
    maxLen= Math.max(maxLen,r-l+1)
 }
 return maxLen
}

console.log(lengthOfLongestSubstringOptimal("zxyzxyz"))
console.log(lengthOfLongestSubstringOptimal("xxxx"))
