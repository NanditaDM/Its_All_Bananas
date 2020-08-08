var bananaImage, obstacleImage, obstacleGrp, backGround, backgroundImage, score, monkey, monkeyImage,score, obstacle, ground;

function preload(){
  bananaImage = loadImage("banana.png");
  backgroundImage = loadImage("jungle.png");
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(100,240,20,20);
  monkey.addAnimation("mainCharacter", monkeyImage);
  monkey.scale = 0.2;
  monkey.velocityY = 0.8;
  
  backGround = createSprite(200,400,20,20);
  backGround.addAnimation("jungle", backgroundImage);
  
  var ground = createSprite(200,380,400,4);
  ground.visible = false;
  
  obstacleGrp = new Group();
  foodGroup = new Group();
  
  backGround.velocity = 3;
  score = 0;
}

function draw() {
  background(220);
  
  spawnFood();
  spawnObstacles();
  
  if(backGround.x === 150){
    backGround.x = 400;
  }
  
  if(foodGrp.isTouching(monkey)){
  score = score+2;
  }
  
  if(obstacleGrp.isTouching(monkey)){
  monkey.scale = 0.2;
  }
  switch(score) { 
      case 10: monkey.scale=0.4; 
        break; 
      case 20: monkey.scale=0.6; 
        break; 
      case 30: monkey.scale=0.8; 
        break; 
       case 40: monkey.scale=1.0; 
        break; 
        default: break; 
    }
  drawSprites();
  
  text("Score = " + score, 380,20);
}

function spawnFood(){
  if (frameCount % 80 === 0) {
    banana = createSprite(400,randomNumber(120,200),10,10);
    banana.addAnimation("food", bananaImage);
    banana.scale= 0.1;
    banana.velocityX= -4;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount % 300 === 0) {
    obstacles = createSprite(400,360,10,10);
    obstacle.addAnimation("stone", obstacleImage);
    obstacles.scale=0.1
    obstacles.velocityX= -3;
    obstacles.lifetime = 100;
    obstacleGroup.add(obstacles);
  }
}