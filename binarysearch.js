
// must be performed on a sorted array, use bubble sort if need be..
// this function is passed an already sorted array..

function binarysearch(arr,value, low = 0,high = arr.length -1) {

// we add low to the midpoint so when we take an array on the right side 
// [1,2,3,5,11,18,21]
// say we want 19, initially low is 0 high is 6, mid is 3
// if we want 19 which is greater than 5, we now have [11,18,21]
// the midpoint would be 6-4 / 2 which gives us 1
// however this does not reference the original index in the array, but the index of the SUB ARRAY
// to also consider that index we must add the low value which is 4, to account 
// for the 4 values that we are ignoring (thus 1+4 == 5, so that is the reference to the array..)
// which gives us 5, which is the midpoint in the original array of the sub array
// initially this does not matter as the low point is 0
// ****without this, we lose the reference to the array and cause an endless loop..

let midpoint = low + Math.floor((high-low)/2)

// check the midpoint, is it equal if so return index

if (arr[midpoint] == value) {return midpoint}

// this condition works like this.. [1,2,3,5,11,18,21]
// say we want 4
// we see 4 is less than 5 so arr becomes [1,2,3]
// 2 is less than 4 so now we want right side
// which means high is the same and low is midpoint plus 1
// in this case both indexes point to 3 as they are equal..
// so we can say if mid is equal to high, and the value is what we want, return the point,
// if it is not, there is no where left to look and thus must not contain the value, return -1!


if (midpoint == high) {
    if (arr[midpoint] == value) {
        return midpoint
    }
    else {return -1}
}


if (arr[midpoint] < value) {


return binarysearch(arr,value,midpoint+1, high)

}
else {
    return binarysearch(arr,value,low, midpoint-1)
}






}




let arr = [
   1,  2,  3, 5,
  11, 18, 21
]

console.log(binarysearch(arr,18))