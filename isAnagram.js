// check two Strings are Anagram

function isAnagram(s1,s2){
   let map= new Map()
   for( const char of s1){
    if(map.has(char)){
    map.set(char,map.get(char)+1)
    }
    else{
        map.set(char,1)
    }
   }

   for( const char of s2){
    if(!map.has(char)||map.get(char)===0) return false      // 3rd input will satisfy or condition else it will be worong result for some cases
    map.set(char,map.get(char)-1)
   }
   return true
}

console.log(isAnagram("racecar","carrace"))
console.log(isAnagram("jar","jam"))
console.log(isAnagram("bbcc","ccbc"))   