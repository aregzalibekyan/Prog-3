var livingCreature = require("./livingcreature")
var { random1 } = require("./random1")
module.exports = class Grass extends livingCreature{
  mul(){
      
        this.multiply++;
        var newCell = random1(this.chooseCell(0));
        // console.log(newCell, this.multiply);
        if (this.multiply >= 2 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        
  }
 

}
}
                             

         
