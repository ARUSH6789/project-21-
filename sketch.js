var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(85,600,200,40);
    surface1.shapeColor = "blue";
    
    surface2 = createSprite(290,600,200,40);
    surface2.shapeColor = "red";

    surface3 = createSprite(495,600,200,40);
    surface3.shapeColor = "orange";

    surface4 = createSprite(700,600,200,40);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    
    box = createSprite(450,400,35,35);
    var velocity = random(20,750);
    box.velocityY = 2;
    box.velocityX = 4;
    box.shapeColor = "white";
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

  box.bounceOff(edges);
  
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "red";
        //music.play();
    }

    if(surface3.isTouching(box)){
        box.velocityY = 0;
        box.velocityX = 0;
        box.shapeColor = "orange";
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
        //music.play();
    }

 

drawSprites();
}


