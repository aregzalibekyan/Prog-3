function getRandInt(min, max) {

    var z = Math.floor(Math.random() * (max - min + 1)) + min;

    return z;

}
module.exports = { getRandInt }


function generateMatrix() {

    for (let d = 0; d < 50; d++) {
        matrix[d] = [];
        for (let g = 0; g < 70; g++) {
            matrix[d][g] = getRandInt(0, 5)
        }
    }
}
module.exports = { generateMatrix }