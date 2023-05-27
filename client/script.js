var socket = io()
var sum=document.getElementById("summer")
var aut=document.getElementById("autumn")
var win=document.getElementById("winter")
var spr=document.getElementById("spring")
 var weat =0
 console.log(spr)
function setup() {

    frameRate(60);
    createCanvas(700, 500);
    background('#acacac');
}
socket.on("matrix", my_draw);

aut.addEventListener("click",function(){
    weat +=2
})

// spr.addEventListener("click",function(){
//     weather = 3
// })

// win.addEventListener("click",function(){
//     weather = 4
// })



function my_draw(matrix) {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
        if(weat===0){
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
            else if (matrix[y][x] == 6) {
                fill("blue");
            }
            rect(x * 10, y * 10, 10, 10);
        
        
          
        }
        else if(weat===2){
            if (matrix[y][x] == 1) {
                fill("gray");

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
            else if (matrix[y][x] == 6) {
                fill("blue");
            }
            rect(x * 10, y * 10, 10, 10);
        }
    }

            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)
        
      
           
           
        
    }



    // for (var m in bonuskerparArr) {
    //     bonuskerparArr[m].eat()

    // }

}




