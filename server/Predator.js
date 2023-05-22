var livingCreature = require("./livingcreature")
var { random1 } = require("./random1")
module.exports = class Predator extends livingCreature{
    constructor(x, y,index) {
        super(x,y,index)
        this.countEating = 0
        this.direction = []
        // this.x = x
        // this.y = y
        // this.direction = []
        // this.countEating = 0
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
       return super.chooseCell(character)
        // var found = [];
        // for (var i in this.directions) {
        //     var x = this.directions[i][0];
        //     var y = this.directions[i][1];
        //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        //         if (matrix[y][x] == character) {
        //             found.push(this.directions[i]);
        //         }
        //     }
        // }
        // return found;
    }

    eat() {
        this.countEating++
        let grassesN = this.chooseCell(1)
        let grassesEaterN = this.chooseCell(2)
        let all = grassesN.concat(grassesEaterN)
        let oneP = random1(all)
        if (oneP) {
            matrix[this.y][this.x] = 0
            matrix[oneP[1]][oneP[0]] = 3
            this.x = oneP[0]
            this.y = oneP[1]
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            } 
            if(this.countEating >= 3){
                this.die()
            }
        }
        else {
            this.move()
        }
    }
    move() {

        let emptyCells = this.chooseCell(0)
        let newCell = random1(emptyCells)
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }

    }
    die() {
        

        matrix[this.y][this.x] = 0
        for (var i in grassEaterArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }



}