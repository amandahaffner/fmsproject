var inProgress = 0;
var endMsg = "Start at the white, go to the yellow";

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
  fill('white');
  rect(0,0, 40, 12);
  fill("yellow");
  rect(260, 0, 40, 12);
  
  textSize(22);
    stroke("black");
    fill("white");
    text(endMsg, width/2-200, height/2);
  
  if(inProgress == 1) {
    strokeWeight(15);
    stroke('brown');
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  if (mouseX > 0 && mouseX < 40 && mouseY >0 && mouseY < 12)
    {
      endMsg = "";
      inProgress = 1;
    }
  if (mouseX > 40 && mouseX < 100 && mouseY >0 && mouseY < 100)
    {
      endMsg = "Please restart! You cannot touch the gray";
    }
  if (mouseX > 0 && mouseX < 100 && mouseY > 150 && mouseY < 400)
    {
      endMsg = "Please restart! You cannot touch the gray";
    }
  if (mouseX > 140 && mouseX < 200 && mouseY > 40 && mouseY < 240)
    {
      endMsg = "Please restart! You cannot touch the gray";
    }
  if (mouseX > 140 && mouseX < 240 && mouseY > 280 && mouseY < 400)
    {
      endMsg = "Please restart! You cannot touch the gray";
    }
  if (mouseX > 200 && mouseX < 260 && mouseY > 0 && mouseY < 100)
    {
      endMsg = "Please restart! You cannot touch the gray";
    }
  if (mouseX > 240 && mouseX < 400 && mouseY > 140 && mouseY < 200)
    {
      endMsg = "Please restart! You cannot touch the gray";
    }
  if (mouseX > 280 && mouseX < 350 && mouseY > 200 && mouseY < 360)
    {
      endMsg = "Please restart! You cannot touch the gray";
    }
  if (mouseX > 300 && mouseX < 360 && mouseY > 0 && mouseY < 100)
    {
      endMsg = "Please restart! You cannot touch the gray";
    }
 if (mouseX > 360 && mouseX < 400 && mouseY > 0 && mouseY < 40)
    {
      endMsg = "Please restart! You cannot touch the gray";
    } 
  if (mouseX > 260 && mouseX < 300 && mouseY > 0 && mouseY < 12)
    {
      if (endMsg == "")
      {
        endMsg = "Great flushin'!";
      }
    }

  
  
}

