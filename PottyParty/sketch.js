//variable for whether the game is in progress or not.
var inProgress = 0;
//variable created for message within game, message changes.
var endMsg = "Start at the yellow, go to the white";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //build maze
  
  noStroke();
  background(0,200,200);
  fill("gray");
  rect(40,0,60,100);
  rect(0, 150, 100, 250);
  rect(140, 40, 60, 200);
  rect(140, 280, 100, 120);
  rect(200, 0, 60, 100); 
  rect(240, 140, 160, 60);
  rect(280, 200, 70, 160);
  rect(300, 0, 60, 100);
  rect(360, 0, 40, 40);
  
  //start and end blocks
  fill('yellow');
  rect(0,0, 40, 12);
  fill("white");
  rect(260, 0, 40, 12);
  
  //creation of message text
  textSize(18);
    fill("white");
    text(endMsg, width/2-200, height/2);
  
  //if the game is in progress
  if(inProgress == 1) {
    strokeWeight(15);
    //mouse is displayed as brown dot in game
    stroke('brown');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  //if the mouse hits one of the gray blocks, the losing message appears.
  
  if (mouseX > 0 && mouseX < 40 && mouseY >0 && mouseY < 12)
    {
      endMsg = "Go to the white";
      inProgress = 1;
    }
  if (inProgress == 1)
    {
      
    
    {
  if (mouseX > 40 && mouseX < 100 && mouseY >0 && mouseY < 100)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    }
  if (mouseX > 0 && mouseX < 100 && mouseY > 150 && mouseY < 400)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    }
  if (mouseX > 140 && mouseX < 200 && mouseY > 40 && mouseY < 240)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    }
  if (mouseX > 140 && mouseX < 240 && mouseY > 280 && mouseY < 400)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    }
  if (mouseX > 200 && mouseX < 260 && mouseY > 0 && mouseY < 100)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    }
  if (mouseX > 240 && mouseX < 400 && mouseY > 140 && mouseY < 200)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    }
  if (mouseX > 280 && mouseX < 350 && mouseY > 200 && mouseY < 360)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    }
  if (mouseX > 300 && mouseX < 360 && mouseY > 0 && mouseY < 100)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    }
 if (mouseX > 360 && mouseX < 400 && mouseY > 0 && mouseY < 40)
    {
      endMsg = "Restart at yellow! You cannot touch the gray";
    } 
    }
  if (mouseX > 260 && mouseX < 300 && mouseY > 0 && mouseY < 12)
    {
      //if player reaches end without hitting gray blocks, victory message appears.
      if (endMsg == "Go to the white")
      {
        endMsg = "Great flushin'!";
        inProgress = 0;
      }
    }

  
  
}}

