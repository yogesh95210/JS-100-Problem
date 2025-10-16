// Objects

const obj = {a:1,b:{c:2}}
const clone= JSON.parse(JSON.stringify(obj))
console.log(obj)
console.log(window)

const isBrowser= typeof window !== undefined
console.log(isBrowser)