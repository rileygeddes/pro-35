
var dog,dogImg,dogImg1;
var feedTime
var database;
var foodStock;
var foodObj
var feed, addfood
function preload(){
   dogImg=loadImage("images/dogImg.png");
   dogImg1=loadImage("images/dogImg1.png");
  }
//Function to set initial environment
function setup() {
  foodObj = new Food()
  database=firebase.database();
  createCanvas(1000,500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  textSize(20); 
  feed= createButton("feed the dog")
  feed.position(500,95)
  feed.mousePressed(feedDog)

  addfood=createButton("add food")
  addfood.position(600,95)
  addfood.mousePressed(addFood)
}

// function to display UI
function draw() {
  background(46,139,87);
  foodObj.display();
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodObj.foodStock,170,200);
  //text("Food remaining : "+foodS,170,200);
  feedTime=database.ref('feedTime')
  feedTime.on("value",function(data){
    foodObj.lastFed=data.val()
    fill(255,255,254);
  stroke("black");
    text("last fed time : "+foodObj.lastFed,170,230);
  })  

  foodObj.display()
}
function addFood(){
  foodObj.updateFoodStock()
  database.ref().update({
    food:foodObj.foodStock
  })
}
function feedDog(){
foodObj.deductFood()
database.ref().update({
  food:foodObj.foodStock,
  feedTime:hour()
})
dog.addImage(dogImg1)

}


//Function to read values from DB
function readStock(data){
  foodObj.foodStock=data.val();
}
