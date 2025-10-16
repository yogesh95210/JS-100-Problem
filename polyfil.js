if(!Array.prototype.msd){
    Array.prototype.msd= function (searchEle,findIndex){
        return this.indexOf(searchEle,findIndex) !==-1
    }
}

const arr1= [1,2,3,4]

console.log(arr1.msd(1))
console.log(arr1.msd(6))



// // Remove includes if browser already has it (for testing)
// delete Array.prototype.includes;

// Custom polyfill without using indexOf

    if (!Array.prototype.includes) {
    Array.prototype.includes = function (searchElement, fromIndex = 0) {
        if (this == null) {
        throw new TypeError('Array.prototype.includes called on null or undefined');
        }

        const O = Object(this);             // convert to object
        const len = O.length >>> 0;         // ensure length is unsigned integer
        if (len === 0) return false;

        let start = fromIndex >= 0 ? fromIndex : len + fromIndex;
        if (start < 0) start = 0;

        for (let i = start; i < len; i++) {
        // Special case: NaN !== NaN, but includes should find NaN
        const current = O[i];
        if (current === searchElement || (Number.isNaN(current) && Number.isNaN(searchElement))) {
            return true;
        }
        }

        return false; // if not found
    };
    }

    const arr = [1, 2, 3, 4];
    console.log(arr.includes(2));   // true
    console.log(arr.includes(6));   // false
    console.log([NaN].includes(NaN)); // true (correct behavior)

