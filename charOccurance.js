// Count the Occurrences of Each Character

function occurrencesEachChar(s){
    const map= {}
    for (const char of s){
        if(map[char]){
            map[char]=map[char]+1   
            
        }else{
            map[char]=1
        }
    }
    return map
}

console.log(occurrencesEachChar("geeksforgeeks"))
console.log(occurrencesEachChar("geeksgeeks"))