var livingCreature = require("./livingcreature")
var { random1 } = require("./random1")
var time = [16,18]

module.exports = class eatervord extends livingCreature{
    constructor(x,y,index){
        super(x,y,index)
        this.time1=random1(time)
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
    
        chooseCell(ch) {
            this.getNewCoordinates()
            return super.chooseCell(ch);
    
        }
        mul() {
            var newCell = random1(this.chooseCell(2));
            if (newCell) {
                var eatervordobj = new eatervord(newCell[0], newCell[1],1);
                bonuskerparArr.push(eatervordobj);
                matrix[newCell[1]][newCell[0]] = 6;
                this.energy = 5
            }
            
        }
        move() {
    
            this.energy--
            let emptyCells = this.chooseCell(0)
            let newCell = random1(emptyCells)
            if (newCell) {
    
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[this.y][this.x] = 0
                matrix[newY][newX] = 6
                this.x = newX
                this.y = newY
                
            }
            if (this.energy === 0) {
                this.die()
            }
            
        }
    
        eat() {
    
            let foods = this.chooseCell(5)
            let food = random1(foods)
            if (food) {
                this.energy++
                this.counts++
                matrix[this.y][this.x] = 0
    
                let newX = food[0]
                let newY = food[1]
                matrix[food[1]][food[0]] = 6
                this.x = newX
                this.y = newY
                for (var i in vordArr) {
                    if (newX == vordArr[i].x && newY == vordArr[i].y) {
                        vordArr.splice(i, 1);
                        break;
                    }
                }
                
                if (this.energy >= this.time1) {
                    this.mul()
                }
               
            }
            else {
                this.move()
            }
            
        }
        die() {
    
            
            matrix[this.y][this.x] = 0
            for (var i in bonuskerparArr) {
                if (this.x == bonuskerparArr[i].x && this.y == bonuskerparArr[i].y) {
                    bonuskerparArr.splice(i, 1)
                    break;
                }
            }
        }
    }
