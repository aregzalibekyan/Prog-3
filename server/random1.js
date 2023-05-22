function random1(arr){ //6
    let num = Math.floor(Math.random() *arr.length)
    return arr[num]
}
module.exports = { random1 } 