//Find the First Non-Repeating Character

// Input: "geeksforgeeks"
// Output: "f"
function firstNonRepeting(s){
    for (let i = 0; i < s.length; ++i) {
        let found = false;
        for (let j = 0; j < s.length; ++j) {
            if (i !== j && s[i] === s[j]) {
                found = true;
                break;
            }
        }
        if (!found) return s[i];
    }
    return '$';
}
console.log(firstNonRepeting("geeksforgeeks"))


function firstNonRepetingOptimize(s){
    let map= new Map()
    for (let char of s){
        if(map.has(char)){
               map.set(char, map.get(char)+1)
        }else{
            map.set(char,1)
        }
    }
    
    for(const char of s){
        if(map.get(char)===1){
            return char
        }
    }
    return "not Found"
    
}

console.log(firstNonRepetingOptimize("geeksforgeeks"))
console.log(firstNonRepetingOptimize("geeksgeeks"))