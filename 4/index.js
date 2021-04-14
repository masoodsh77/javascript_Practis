var string = "i have 2 apples and 3 pineapples"

for(let i = 0 ; i<string.length ; i++){
    var arr = new Array
    arr.push(string.match(/\d+/).map(Number))
}
console.log(arr)