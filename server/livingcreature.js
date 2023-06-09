var { random1 } = require("./random1") 
module.exports = class LivingCreature{


    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 8;
        this.counts = 0;
        this.index = index;
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
    chooseCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    // mul() {
    //     this.multiply++;
    //     var newCell = random1(this.chooseCell(0));
    //     // console.log(newCell, this.multiply);
    //     if (this.multiply >= 2 && newCell) {
    //         var newGrass = new Grass(newCell[0], newCell[1], this.index);
    //         grassArr.push(newGrass);
    //         matrix[newCell[1]][newCell[0]] = 1;
    //         this.multiply = 0;
    //     }

    }
