var livingCreature = require("./livingcreature")
module.exports = class bomb extends livingCreature {
    //
    // constructor(x, y) {
    //   this.x = x;
    //   this.y = y;
    //   this.counts = 0;
    //   this.directions = [
    //     [this.x - 1, this.y - 1],
    //     [this.x, this.y - 1],
    //     [this.x + 1, this.y - 1],
    //     [this.x - 1, this.y],
    //     [this.x + 1, this.y],
    //     [this.x - 1, this.y + 1],
    //     [this.x, this.y + 1],
    //     [this.x + 1, this.y + 1]
    //   ];
    
  

    updateDirections() {
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
      this.updateDirections();
      return super.chooseCell(ch);
      // var found = [];

    //   for (var i in this.directions) {
    //     var x = this.directions[i][0];
    //     var y = this.directions[i][1];
    //     if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //       if (matrix[y][x] == character) {
    //         found.push(this.directions[i]);
    //       }
    //     }
    //   }
    //   return found;
    // }
    }
   //paytum e miayn ayn jamanak , erb inch vor mekin erku angam spanum e
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
      } else if (this.counts >= 2) {
        this.die();
      }
    }
  

    die() {
      matrix[this.y][this.x] = 0;
      for (var i in newkerparArr) {
        if (this.x == newkerparArr[i].x && this.y == newkerparArr[i].y) {
          newkerparArr.splice(i, 1);
          break;
        }
      }
    }
  }
  
   