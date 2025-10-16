// Remove Duplicates from a String 

function removeDuplicates(str){
   let set= new Set()
   let temp= ""     // we can use arr as wellthen we need to push and in return join method have to use
   for(let char of str){
    if(!set.has(char)){
    temp+=char
    set.add(char)
    }
   }
   return temp
}
console.log(removeDuplicates("geeksforgeeks"))   //  O(n)