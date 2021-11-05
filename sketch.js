var pacmanbg;
var pacmang,Pacmani,fullpacmani;
var redGhost
var rghost

var gameState = "serve";


function preload() {
  pacmanbg = loadImage("pacmanbg.png");
  pacmang = loadAnimation("pacman.gif");
  Pacmani = loadImage("PacmanH.png");
  fullpacmani = loadImage("fullpacman.png");
  rghost = loadAnimation("ghost1-red.png","ghost2-red.png");
}

function setup() {
  createCanvas(600,600);


  redGhost = createSprite(350,300,10,10);
  redGhost.addAnimation("enemy",rghost);
  redGhost.scale = 0.03

  wall1 = createSprite(20, 100, 20, 190);
  wall2 = createSprite(585, 100, 20, 190);
  wall3 = createSprite(300, 10, 550, 20);
  wall4 = createSprite(300, 590, 550, 20);
  wall5 = createSprite(60, 190, 100, 20);
  wall6 = createSprite(545, 190, 100, 20);
  wall7 = createSprite(490, 220, 20, 80);
  wall8 = createSprite(120, 220, 20, 80);
  wall9 = createSprite(65, 250, 130, 30);
  wall10 = createSprite(65, 300, 130, 30);
  wall11 = createSprite(550, 250, 130, 30);
  wall12 = createSprite(550, 300, 130, 30);
  wall13 = createSprite(20, 480, 20, 240);
  wall14 = createSprite(585, 480, 20, 240);
  wall15 = createSprite(65, 360, 130, 30);
  wall16 = createSprite(550, 360, 130, 30);
  wall17 = createSprite(495, 330, 20, 80);
  wall18 = createSprite(10, 330, 20, 80);
  wall19 = createSprite(120, 330, 20, 80);
  w1 = createSprite(95,75,60,35);
  w2 = createSprite(210,75,85,35);
  w3 = createSprite(395,75,85,35);
  w4 = createSprite(510,75,60,35);
  w5 = createSprite(95,140,60,20);
  w6 = createSprite(510,140,60,20);
  w7 = createSprite(302,60,20,80);
  ws1 = createSprite(175,195,20,133);
  ws2 = createSprite(210,195,70,20);
  ws3 = createSprite(390,195,65,20);
  ws4 = createSprite(425,195,20,133)
  ws5 = createSprite(302,170,20,80);
  ws6 = createSprite(305,140,150,20);
  ws7 = createSprite(302,395,20,75);
  ws8 = createSprite(302,369,140,20);
  ws9 = createSprite(302,480,140,20);
  ws10 = createSprite(302,510,20,75);
  Ls1 = createSprite(176,505,20,70);
  Ls2 = createSprite(155,534,180,20);
  Ls3 = createSprite(425,505,20,70);
  Ls4 = createSprite(445,534,180,20);
  Ls5 = createSprite(489,450,20,70);
  Ls6 = createSprite(510,425,60,20);
  Ls7 = createSprite(115,450,20,70);
  Ls8 = createSprite(90,425,60,20);
  s1 = createSprite(210,425,80,20);
  s2 = createSprite(395,425,80,20);
  s3 = createSprite(570,475,50,25);
  s4 = createSprite(50,475,50,25);
  s5 = createSprite(175,340,20,70);
  s6 = createSprite(425,340,20,70);
  ghe1 = createSprite(230,280,10,70);
  ghe2 = createSprite(370,280,10,70);
  ghe3 = createSprite(300,320,150,10);
  ghe4 = createSprite(250,250,50,10);
  ghe5 = createSprite(350,250,50,10);



}
function draw() {
  background(pacmanbg); 
 wall1.visible = false;
 wall2.visible = false;
 wall3.visible = false;
 wall4.visible = false;
 wall5.visible = false;
 wall6.visible = false;
 wall7.visible = false;
 wall8.visible = false;
 wall9.visible = false;
 wall10.visible = false;
 wall11.visible = false;
 wall12.visible = false;
 wall13.visible = false;
 wall14.visible = false;
 wall15.visible = false;
 wall16.visible = false;
 wall17.visible = false;
 wall18.visible = false;
 wall19.visible = false;
 w1.visible = false;
 w2.visible = false;
 w3.visible = false;
 w4.visible = false;
 w5.visible = false;
 w6.visible = false;
 w7.visible = false;
 ws1.visible = false;
 ws2.visible = false;
 ws3.visible = false;
 ws4.visible = false;
 ws5.visible = false;
 ws6.visible = false;
 ws7.visible = false;
 ws8.visible = false;
 ws9.visible = false;
 ws10.visible = false;
 Ls1.visible = false;
 Ls2.visible = false;
 Ls3.visible = false;
 Ls4.visible = false;
 Ls5.visible = false;
 Ls6.visible = false;
 Ls7.visible = false;
 Ls8.visible = false;
 s1.visible = false;
 s2.visible = false;
 s3.visible = false;
 s4.visible = false;
 s5.visible = false;
 s6.visible = false;
 ghe1.visible = false;
 ghe2.visible = false;
 ghe3.visible = false;
 ghe4.visible = false;
 ghe5.visible = false;


 if (gameState === "serve"){
    //pacman Sprites
    Pacman = createSprite(305,450,10,10);
    Pacman.addImage("Circle",fullpacmani);
    Pacman.scale = 0.03;
 }
 else if(gameState === "play"){
  Pacman.changeAnimation("Paceat",pacmang);

 }

 if(keyDown(UP_ARROW)){
   gameState = "play";
   Pacman.y = Pacman.y - 3;
 }
 if(keyDown(DOWN_ARROW)){
  gameState = "play";
  Pacman.y = Pacman.y + 3;
  
}
if(keyDown(RIGHT_ARROW)){
  gameState = "play";
  Pacman.x = Pacman.x + 3;
 
}
if(keyDown(LEFT_ARROW)){
  gameState = "play";
  Pacman.x = Pacman.x - 3;
}



 

  drawSprites();
}
