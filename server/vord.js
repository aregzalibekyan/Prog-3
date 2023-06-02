var livingCreature = require("./livingcreature")
var { random1 } = require("./random1") 
module.exports = class vord extends livingCreature {
    // uxaki sharjvum e aranc mahanalu
  
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

    ChooseCell(ch) {
        this.getNewCoordinates()
        return super.chooseCell(ch);

    }

    move() {
        
        let emptyCells = this.ChooseCell(0)
        let newCell = random1(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

    }



}






