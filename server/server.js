
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
var eatervord = require("./bonuskerpar")

var explosion2 = 0
var grass2 = 0
var lighting2 = 0
var { generateMatrix } = require("./functions");
let time = 1000
let intervalId;

matrix = []
vordArr = []
grassArr = []
grassEaterArr = []
predatorArr = []
newkerparArr = []
bonuskerparArr = []

function handleVariable(value) {
    time = value
    clearInterval(intervalId);
    intervalId = setInterval(game, time);
    doSomethingWithVariable()
}
function doSomethingWithVariable() {
    
}

function waitForVariable(callback) {
    if (time !== undefined) {
        callback();
    } else {
        setTimeout(() => waitForVariable(callback), 100); // Retry after 100 milliseconds
    }
}


function explosion11(explosion1) {
    explosion2 = explosion1

    for (var b = 0; b < matrix.length; b++) {
        for (var h = 0; h < matrix[b].length; h++) {
            if (explosion2 == 1) {
                for (var i in grassEaterArr) {
                    grassEaterArr.splice(i, 1)

                }
                if (matrix[b][h] === 2) {
                    matrix[b][h] = 0
                }
            }
        }
    }
}
function grass11(grass1){
 grass2 = grass1
 
 for (var b = 0; b < matrix.length; b++) {
    for (var h = 0; h < matrix[b].length; h++) {
        if (grass2 == 1) {
            for (var i in grassArr) {
                grassArr.splice(i, 1)

            }
            if (matrix[b][h] === 1) {
                matrix[b][h] = 0
            }
        }
    }
}
}
function lighting11(lighting1) {
    lighting2 = lighting1

    for (var b = 0; b < matrix.length; b++) {
        for (var h = 0; h < matrix[b].length; h++) {
            if (lighting2 == 1) {
                for (var i in grassEaterArr) {
                    grassEaterArr.splice(i, 1)

                }
                if (matrix[b][h] === 2) {
                    matrix[b][h] = 0
                }
            }
        }
    }
}

io.on('connection', function (socket) {





    socket.on("weat", function (weat) {
        handleVariable(weat)

    })
    socket.on("explosion", function (explosion1) {
        explosion11(explosion1)
    })
    socket.on("grass", function (grass1) {
        grass11(grass1)
    })
    socket.on("lighting",function(lighting1){
       lighting11(lighting1)
    })
});


waitForVariable(doSomethingWithVariable)


generateMatrix()
createObject()

io.sockets.emit("matrix", matrix)

var gr = new Grass(1, 2, 1);
var emptyCells = gr.chooseCell(0);
console.log(emptyCells);


function createObject() {


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
                let Predatorobj = new Predator(h, b, 1)
                predatorArr.push(Predatorobj)

            }
            else if (matrix[b][h] === 4) {
                let Bombobj = new bomb(h, b, 1)
                newkerparArr.push(Bombobj)

            }
            else if (matrix[b][h] === 5) {
                let vordobj = new vord(h, b, 1)
                vordArr.push(vordobj)

            }
            else if (matrix[b][h] === 6) {
                let eatervordobj = new eatervord(h, b, 1)
                bonuskerparArr.push(eatervordobj)

            }
        }

    }
}
function main() {
    var fs = require("fs")
    statistic = {
        grassCount: grassArr.length,
        grassEaterCount: grassEaterArr.length,
        newKerparCount: newkerparArr.length,
        vordArr: vordArr.length,
        predatorArr: predatorArr.length,
        bonuskerparArr : bonuskerparArr.length
    }
    fs.writeFileSync("Qanak.json", JSON.stringify(statistic))
    
   io.sockets.emit("statistic",JSON.stringify(statistic))
  


}

function game() {
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
    for(var z in bonuskerparArr){
        bonuskerparArr[z].eat()
    }
    io.sockets.emit("matrix", matrix)


    main()

}







