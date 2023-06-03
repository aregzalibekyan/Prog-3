var socket = io()

var sum = document.getElementById("summer")
var aut = document.getElementById("autumn")
var win = document.getElementById("winter")
var spr = document.getElementById("spring")
var noDisease = document.getElementById("No-Disease")
var explosion = document.getElementById("explosion")
var grass = document.getElementById("grass")
var p = document.getElementById("p")
var p1 = document.getElementById("p1")
var lig = document.getElementById('lighting')
var Disease = document.getElementById("Disease")
// var explosion1 = 0
var explosion1 = 0
var grass1 = 0
var lighting = 0
var Disease1 = 0
let something = "#666666"
socket.on("matrix", my_draw)

var weat = 5000






Disease.addEventListener("click", function () {
    Disease1 = 1
})
noDisease.addEventListener("click", function () {
    Disease1 = 0
})

explosion.addEventListener("click", function () {
    explosion1 = 1
    socket.emit("explosion", explosion1)
})
grass.addEventListener("click", function () {
    grass1 = 1
    socket.emit("grass", grass1)
})
lig.addEventListener("click", function () {
    lighting = 1
    setTimeout(function(){
        socket.emit("lighting",lighting)
    },7000)
})

sum.addEventListener("click", function () {
    weat = 1000
    p1.innerText = "Summer"
    p1.style.backgroundColor = "Green"
    socket.emit("weat", weat)
})

aut.addEventListener("click", function () {
    weat = 3000
    p1.innerText = "Autumn"
    p1.style.backgroundColor = "lime"
    socket.emit("weat", weat)
})

spr.addEventListener("click", function () {
    weat = 2000
    p1.innerText = "Spring"
    p1.style.backgroundColor = "yellow"
    socket.emit("weat", weat)
})

win.addEventListener("click", function () {
    weat = 5000
    p1.innerText = "Winter"
    p1.style.backgroundColor = "white"
    socket.emit("weat", weat)
})



socket.on("statistic", function (statistic) {
    p.innerText = statistic
})


function setup() {

    frameRate(60);
    createCanvas(700, 500);
    background('#acacac');
}






function my_draw(matrix) {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (weat === 1000) {
                if (matrix[y][x] == 1 && Disease1 == 0) {
                    fill("green");

                }
                else if (matrix[y][x] == 1 && Disease1 == 1) {
                    fill("red")
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2 && lighting == 0) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 2 && lighting == 1) {
                    fill(something)
                    setTimeout(function () {
                        something = "black"
                    }, 4000)

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
                else if (matrix[y][x] == 6) {
                    fill("#00FFFF");
                }
                rect(x * 10, y * 10, 10, 10);



            }
            else if (weat === 3000) {
                if (matrix[y][x] == 1 && Disease1 == 0) {
                    fill("#9efd38");

                }
                else if (matrix[y][x] == 1 && Disease1 == 1) {
                    fill("red")
                }

                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2 && lighting == 0) {
                    fill("#FFFFE0");
                }
                else if (matrix[y][x] == 2 && lighting == 1) {
                    fill(something)
                    setTimeout(function () {
                        something = "black"
                    }, 4000)
                }
                else if (matrix[y][x] == 3) {
                    fill("#FFFFFF");
                }
                else if (matrix[y][x] == 4) {
                    fill("#404040");
                }
                else if (matrix[y][x] == 5) {
                    fill("lime");
                }
                else if (matrix[y][x] == 6) {
                    fill("#00FFFF");
                }
                rect(x * 10, y * 10, 10, 10);
            }
            else if (weat === 5000) {
                if (matrix[y][x] == 1 && Disease1 == 0) {
                    fill("white");

                }
                else if (matrix[y][x] == 1 && Disease1 == 1) {
                    fill("red")
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2 && lighting == 0) {
                    fill("#d1cd58");
                }
                else if (matrix[y][x] == 2 && lighting == 1) {
                    fill(something)
                    setTimeout(function () {
                        something = "black"
                    }, 4000)
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }
                else if (matrix[y][x] == 4) {
                    fill("brown");
                }
                else if (matrix[y][x] == 5) {
                    fill("lime");
                }
                else if (matrix[y][x] == 6) {
                    fill("#00FFFF");
                }
                rect(x * 10, y * 10, 10, 10);
            }
            else if (weat === 2000) {
                if (matrix[y][x] == 1 && Disease1 == 0) {
                    fill("#7fff00");

                }

                else if (matrix[y][x] == 1 && Disease1 == 1) {
                    fill("red")
                }

                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2 && lighting == 0) {
                    fill("#FDDA0D");
                }
                else if (matrix[y][x] == 2 && lighting == 1) {
                    fill(something)
                    setTimeout(function () {
                        something = "black"
                    }, 4000)
                }

                else if (matrix[y][x] == 3) {
                    fill("purple");
                }
                else if (matrix[y][x] == 4) {
                    fill("brown");
                }
                else if (matrix[y][x] == 5) {
                    fill("lime");
                }
                else if (matrix[y][x] == 6) {
                    fill("#00FFFF");
                }
                rect(x * 10, y * 10, 10, 10);
            }
        }





    }



    // for (var m in bonuskerparArr) {
    //     bonuskerparArr[m].eat()

    // }

}



