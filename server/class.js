var livingCreature = require("./livingcreature")
var { random1 } = require("./random1")



var time =[2,4]



module.exports = class Grass extends livingCreature{
  constructor(x,y,index){
    super(x,y,index)
    this.time1=random1(time)
  }
  mul(){
      
        this.multiply++;
        var newCell = random1(this.chooseCell(0));
      
        if (this.multiply >= this.time1 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
            


        }
       
        }
          
      }
      

   
  
 


                             

         
