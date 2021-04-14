var arr = new Array
arr = [1,1,4,5,3,5,3,9]

function removeDuplicate (items){
    return [...new Set(items)]
}
removeDuplicate(arr)
console.log(removeDuplicate(arr))