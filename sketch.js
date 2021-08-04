var canvas,bg;
var together;
var tom, tomImg1,tomImg2,tomImg2;
var jerry, jerryImg1,jerryImg2,jerryImg3,jerryImg4;

function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
  tomImg3=loadAnimation("tomFour.png");
  
  jerryImg1=loadAnimation("jerryOne.png");
  
  jerryImg2=loadAnimation("jerryTwo.png","jerryThree.png");
  
  jerryImg3=loadAnimation("jerryFour.png");
  
  

    
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;
  
  mouse = createSprite(400, 600);
  mouse.addAnimation("jerrySleeping", jerryImg1);
  mouse.scale = 0.2;

    
}

function draw() {

    background(bg);

  if(tom.x - mouse.x < (tom.width - mouse.width)/2){
      tom.velocityX = 0;
    tom.addAnimation("ultimaImagengato", tomImg3);
        tom.changeAnimation("ultimaImagengato");
    tom.x=300;
    tom.scale=0.2;
    
    
    mouse.addAnimation("ultimaImagenraton", jerryImg3);
        mouse.changeAnimation("ultimaImagenraton");
    mouse.scale=0.2;
     }
  
  
  
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
     
      
      
      mouse.addAnimation("jerryTeasing", jerryImg2);            
      
        mouse.changeAnimation("jerryTeasing");
      
     
    }
}