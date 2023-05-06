var matrix = [];

var side = 50;
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var newkerparArr = []

var vordArr = []

function setup() {

    for (let d = 0; d < 50; d++) {
        matrix[d] = [];
        for (let g = 0; g < 70; g++) {
            matrix[d][g] = Math.round(random(5))
        }
    }
    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    var gr = new Grass(1, 2, 1);
    var emptyCells = gr.chooseCell(0);
    console.log(emptyCells);

    for (var b = 0; b < matrix.length; b++) {
        for (var h = 0; h < matrix[b].length; h++) {
            if (matrix[b][h] === 1) {
                var gr1 = new Grass(h, b, 1)
                grassArr.push(gr1)

            }
        }
    }
    for (var b = 0; b < matrix.length; b++) {
        for (var h = 0; h < matrix[b].length; h++) {
            if (matrix[b][h] === 2) {
                var grassEater = new GrassEater(h, b, 1)
                grassEaterArr.push(grassEater)
              
            } 
           else if (matrix[b][h] === 3) {
                let Predatorobj = new Predator(h, b)
                predatorArr.push(Predatorobj)

            }
            else if (matrix[b][h] === 4) {
                let Bombobj = new bomb(h, b)
                newkerparArr.push(Bombobj)

            }
            else if (matrix[b][h] === 5) {
                let  vordobj = new vord(h, b)
                vordArr.push(vordobj)

            }
        }

    }
}




function draw() {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");



            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("lime");
            }
            rect(x * side, y * side, side, side);


            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

    
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var d in grassEaterArr) {
        // grassEaterArr[d].move()
        grassEaterArr[d].eat()
        
        
        }
        for (var b in newkerparArr) {
            // grassEaterArr[d].move()
            newkerparArr[b].explode()
            
            
            }
            for (var g in predatorArr) { 
                predatorArr[g].eat()
            }
       
    for (var m in vordArr) {
        vordArr[m].move()
                                                                                     
    } 
     
    }
  



// console.log(grassArr)
// console.log(grassEaterArr)
// console.log(vord)
console.log(newkerparArr)
console.log(newkerparArr)
console.log(newkerparArr)
console.log(newkerparArr)
console.log(newkerparArr)


