// [1,2,2,3,3,2] ---> {2-->3}

function mostFrequentEleBest(arr){
   let map = new Map()
   let maxCount= 0
     let res
   for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
   }
   for(let [key,value] of map){
       if(value>maxCount)
       maxCount= value
       res= key
   }
   return {element : res, freq:maxCount}
}
console.log(mostFrequentCharBest([1,2,2,3,3,2]))


