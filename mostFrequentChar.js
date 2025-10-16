// Find the Most Frequent Character

function mostFrequentChar(s){
    const map= {}
    let maxChar= ""
    let maxCount=0
    for (const char of s){
        if(map[char]){
            map[char]=map[char]+1   
        }else{
            map[char]=1
        }
        if(map[char]>maxCount){
            maxCount= map[char]
            maxChar= char
        }
    }
    return {char: maxChar,count:maxCount}
}

console.log(mostFrequentChar("geeksforgeeks"))
console.log(mostFrequentChar("geeksgeeks"))

function mostFrequentCharBest(s){
   let map = new Map()
   let maxChar=""
   let maxCount= 0

   for(let char of s){
    if(map.has(char)){
        map.set(char, map.get(char)+1)
    }else{
        map.set(char,1)
    }
    if(map.get(char)>maxCount){
        maxCount= map.get(char)
        maxChar= char
    }
   }
   return {char: maxChar, count: maxCount}
}
console.log(mostFrequentCharBest("geeksforgeeks"))
console.log(mostFrequentCharBest("geeksgeeks"))

