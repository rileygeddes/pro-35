class Food{
    constructor(){
      this.foodStock=0;
      this.lastFed = 0;
      this.image = loadImage("images/Milk.png")
    }

display(){
var x=80,y=100
imageMode(CENTER)
image(this.image,720,220.70,70)
if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
           x=400
           y=y+50
         }
           image(this.image,x,y,50,50)
           x=x+30
         }
      }
    }

getFoodStock(){
    database.ref('food').val;
}

updateFoodStock(){
  this.foodStock++    
    
}

deductFood(){
if(this.foodStock>0){
  this.foodStock--

}
}


}