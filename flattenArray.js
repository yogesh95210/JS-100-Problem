// Flatten an Array without Array.flat()
// 👉 Input: [1,2,3,[4,5,6,[7,8,[10,11]]],9]
// 👉 Output: [1,2,3,4,5,6,7,8,10,11,9]


function flatten(arr){
let res=[]
for(let item of arr){
    if(Array.isArray(item)){
     res= res.concat(flatten(item))   // recursion
    }else{
        res.push(item)
    }
}
return res
}

console.log(flatten([1,2,3,[4,5,6,[7,8,[10,11]]],9]))

// Direct way using flat()
const arr= [1,2,3,[4,5,6,[7,8,[10,11]]],9]
let res= arr.flat(Infinity)
console.log(res)