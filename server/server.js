var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000, function () {
    console.log("Game is running on port 3000");
});
var Grass = require("./class")
var GrassEater = require("./grassEater")
var vord = require("./vord")
var Predator = require("./Predator")
var bomb = require("./new kerpar")
var { generateMatrix } = require("./functions")
 matrix = []
 vordArr = []
  grassArr = []
grassEaterArr = []
 predatorArr = []
 newkerparArr = []
 bonuskerparArr = []


io.on('connection', function (socket) {
    // socket.emit("matrix", matrix) //uxarkelna
});
generateMatrix()
createObject()

// generateMatrix()
// console.log(matrix)
io.sockets.emit("matrix",matrix)

var gr = new Grass(1, 2, 1);
    var emptyCells = gr.chooseCell(0);
    console.log(emptyCells);

function createObject(){
    

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
                let vordobj = new vord(h, b)
                vordArr.push(vordobj)

            }
            // else if (matrix[b][h] === 6) {
            //     // let eatergrassEater = new eatergrasseater(h, b)
            //     // bonuskerparArr.push(eatergrassEater)

            // }
        }

    }
}
function game(){
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
    io.sockets.emit("matrix", matrix)

}

setInterval(game,2000)