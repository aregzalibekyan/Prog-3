function random(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}


function generateMatrix() {

    for (let d = 0; d < 50; d++) {
        matrix[d] = [];
        for (let g = 0; g < 70; g++) {
            matrix[d][g] = random(0, 6)
        }
    }
}
function random1(arr){ //6
    let num = Math.floor(Math.random() *arr.length)
    return arr[num]
}
module.exports = { generateMatrix }
// module.exports = { random1 }