class bomb{
    constructor(x,y){
        this.x=x
        this.y=y
        this.counts=0
        this.energy=3
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    move() {

        this.energy--

        console.log(this.energy);
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {

            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }
        if (this.energy <= 0) {
            this.die()
        }
    }
    
       
        explode() {
            
            let food = this.chooseCell(3);
            if (food.length > 0) {
                this.counts++;
                
                let foodX = food[0][0];
                let foodY = food[0][1];
                matrix[foodY][foodX] = 0;
                for (var i in predatorArr) {
                    if (foodX == predatorArr[i].x && foodY == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                this.move();
            }
            if (this.counts === 2) {
                this.die();
            } 
        }
        
               
           
        
    

        
       
       
    
    
    die() {
        // console.log("merav");

        matrix[this.y][this.x] = 0
                
                
                for (var i in newkerparArr) {
                    if (this.counts === 2) {
                        newkerparArr.splice(i,1)
                        break;
                    }
            }
        }
    }
    
    
