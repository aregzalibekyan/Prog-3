// utum e grasseaternerin, bonus kerpar(karox eq stugel ete urish koderic voreve meky aytqan el lav che)
// class eatergrasseater{
    
//         constructor(x, y) {
//             this.x = x;
//             this.y = y;
//             this.count = 0
//             this.energy = 8;
//             this.directions = [
//                 [this.x - 1, this.y - 1],
//                 [this.x, this.y - 1],
//                 [this.x + 1, this.y - 1],
//                 [this.x - 1, this.y],
//                 [this.x + 1, this.y],
//                 [this.x - 1, this.y + 1],
//                 [this.x, this.y + 1],
//                 [this.x + 1, this.y + 1]
//             ];
//         }
//         getNewCoordinates() {
//             this.directions = [
//                 [this.x - 1, this.y - 1],
//                 [this.x, this.y - 1],
//                 [this.x + 1, this.y - 1],
//                 [this.x - 1, this.y],
//                 [this.x + 1, this.y],
//                 [this.x - 1, this.y + 1],
//                 [this.x, this.y + 1],
//                 [this.x + 1, this.y + 1]
//             ];
//         }
    
//         chooseCell(character) {
//             this.getNewCoordinates()
//             var found = [];
//             for (var i in this.directions) {
//                 var x = this.directions[i][0];
//                 var y = this.directions[i][1];
//                 if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                     if (matrix[y][x] == character) {
//                         found.push(this.directions[i]);
//                     }
//                 }
//             }
//             return found;
    
//         }
//         // mul() {
//         //     var newCell = random(this.chooseCell(2));
//         //     if (newCell) {
//         //         var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
//         //         grassEaterArr.push(newGrassEater);
//         //         matrix[newCell[1]][newCell[0]] = 2;
//         //         this.energy = 5
//         //     }
            
//         // }
//         move() {
    
//             this.energy--
//             let emptyCells = this.chooseCell(0)
//             let newCell = random(emptyCells)
//             if (newCell) {
    
//                 let newX = newCell[0]
//                 let newY = newCell[1]
//                 matrix[this.y][this.x] = 0
//                 matrix[newY][newX] = 6
//                 this.x = newX
//                 this.y = newY
                
//             }
//             if (this.energy === 0) {
//                 this.die()
//             }
            
//         }
    
//         eat() {
    
//             let foods = this.chooseCell(4)
//             let food = random(foods)
//             if (food) {
//                 this.energy++
//                 this.counts++
//                 matrix[this.y][this.x] = 0
    
//                 let newX = food[0]
//                 let newY = food[1]
//                 matrix[food[1]][food[0]] = 6
//                 this.x = newX
//                 this.y = newY
//                 for (var i in vordArr) {
//                     if (newX == vordArr[i].x && newY == vordArr[i].y) {
//                         vordArr.splice(i, 1);
//                         break;
//                     }
//                 }
//                 if(this.counts === 1){
//                     this.die()
//                 }
//                 // if (this.energy >= 10) {
//                 //     this.mul()
//                 // }
               
//             }
//             else {
//                 this.move()
//             }
            
//         }
//         die() {
    
//             console.log("merav")
//             matrix[this.y][this.x] = 0
//             for (var i in bonuskerparArr) {
//                 if (this.x == bonuskerparArr[i].x && this.y == bonuskerparArr[i].y) {
//                     bonuskerparArr.splice(i, 1)
//                     break;
//                 }
//             }
//         }
//     }
