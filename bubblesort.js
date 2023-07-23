
function bubblesort(arr) {

// variable to check weather we changed any values this pass, if not we can return

let changed = false

// logic to change the array
let i = 0
while(i<arr.length){
    // placeholders for current index value and
    let oldvalue = arr[i]
    let newvalue = arr[i+1]

    if (arr[i] > arr[i+1]) {
        arr[i] = newvalue
        arr[i+1] = oldvalue
        // set changed to true so we iterate again
        // once we iterate and change nothing, changed stays as false
        // then we can return arr as we are done! 
        // without this condition, we loop endlessly
    changed = true
    }

    i++
}



// if we have not changed anything this pass we can return the array, if we have, we iterate again..
return changed == false ? arr : bubblesort(arr)
// if changed is equal to false, return arr, if it is true, iterate again / recurse.

}




let arr = [1,4,5,18,21,2,11]
console.log(bubblesort(arr))