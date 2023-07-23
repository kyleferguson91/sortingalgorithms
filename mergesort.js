
function mergesort(arr) {

// split array in half..
let left = arr.slice(0,arr.length/2)
let right = arr.slice(arr.length/2)


// if we pass in an array of length 1, it is sorted!
if (arr.length == 1) {return arr}

else {


    // imagine the calls of [1,2,5,7,3]
    //// this returns 
//    return merge(mergesort([1,2]), mergesort([5,7,3]))
// which then each returns certain calls..
// this line becomes paused.. and merge(mergesort([1,2]) is called
// this returns return merge(mergesort([1], mergesort[2])
// this gets paused
// because length 1, they return the array
// then we are dealing with 
// return merge([1,2])
// which returns [1,2]
// the function call mergesort([1,2]) returns [1,2]
// in the line return merge(mergesort([1,2]), mergesort([5,7,3]))
// becomming return merge([1,2], mergesort([5,7,3]))
// now we unpause and can solve mergesort([5,7,3])
// this returns  return merge(mergesort([5], mergesort([7,3])))
// mergesort([5]) returns [5]
// now we are dealing with
// merge(([5], mergesort([7,3])))
// mergesort([7,3]) returns merge(mergesort[7], mergesort[3])
// mergesort[7] and mergesort[3] because length 1 satisfy base case and return the array
// so we are dealing with merge([7,3])
// this sorts the array that becomes [3,7]
// now we have
// merge([5], [3,7])
// which can unp[ause the line return merge([1,2], mergesort([5,7,3]))
// and becomes return merge([1,2],[3,5,7])
// which gets us closer to bottom of stack, run through sort function and returns the array sorted!

    return merge(mergesort(left), mergesort(right))
}



}

function merge(left,right) {

let leftindex = 0
let rightindex = 0
let i = 0
let result = []

while (i < left.length) {
// compare the value left at 0 vs right at 0..

    if (left[leftindex] <= right[rightindex]) {
        // left is less than or equal to right at this index so push onto results
        result.push(left[leftindex])
        // and advance the left index by 1
        leftindex++
    }
    else {
        // right side is less so push that and advance left index by 1
        result.push(right[rightindex]) 
        rightindex++

        
    }


    i++

}


// if we finish and an array still has stuff remaining..
if (leftindex < left.length) {
    // push the rest of left
    result = result.concat(left.slice(leftindex))
}
if (rightindex < right.length) {
    // push the rest of right
    result = result.concat(right.slice(rightindex))
}

return result
}


console.log(mergesort([1,2,5,11,7,3]))