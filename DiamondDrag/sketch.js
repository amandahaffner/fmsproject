//Creating all instance variables
let cx;
let cy;
let c2x;
let c2y;
let c3x;
let c3y;

let circleSize = 25; //Define circle 1 diameter
let overCircle = false; //Initialize mouse detector as false
let overCircle2 = false;
let overCircle3 = false;
let locked = false; //Initialize locked status to false
let locked2 = false;
let locked3 = false;
//Current offset for all circles will be 0
let xOffset = 0.0;
let yOffset = 0.0;
let x2Offset = 0.0;
let y2Offset = 0.0;
let x3Offset = 0.0;
let y3Offset = 0.0;


function setup() {
  createCanvas(720, 400);
  //Define locations of each circle
  cx = width/2.0;
  cy = height/2.0;
  c2x = width/2.0;
  c2y = height/2.0 - 30;
  c3x = width/2.0;
  c3y = height/2.0 - 60;
  
  strokeWeight(10);
}

function draw() {
  background(220);
  
  //Check if cursor is over circle 1
  if (
  mouseX > cx - circleSize &&
  mouseX < cx + circleSize &&
  mouseY > cy - circleSize &&
  mouseY < cy + circleSize
    )
    overCircle = true;
  if(!locked){
    stroke(255);
    fill(244,122,158);
  }
  else{
    stroke(156, 39, 176);
    fill(244, 122, 158);
    overCircle = false;
  }
  
  //Draw the circle
  circle(cx, cy, circleSize);
  
    //Check if cursor is over circle 2
  if (
  mouseX > c2x - circleSize &&
  mouseX < c2x + circleSize &&
  mouseY > c2y - circleSize &&
  mouseY < c2y + circleSize
    )
    overCircle2 = true;
  if(!locked2){
    stroke(255);
    fill(244,122,158);
  }
  else{
    stroke(156, 39, 176);
    fill(244, 122, 158);
    overCircle2 = false;
  }
  
  //Draw the circle
  circle(c2x, c2y, circleSize);
  
  //TODO: CONSTRUCT CIRCLE 3
}

function mousePressed(){
  if(overCircle){
    locked = true;
    fill(255, 255, 255);
  }
//  else{
//    locked = false;
//    if(overCircle2){
//      locked2 = true;
//      fill(255, 255, 255);
//    }
//    else{
//      locked2 = false;
//    }

  xOffset = mouseX - cx;
  yOffset = mouseY - cy;
  x2Offset = mouseX - c2x;
  y2Offset = mouseY - c2y;
//  x3Offset = mouseX - c3x;
//  y3Offset = mouseY - c3y;
}
function mouseDragged(){
  if (locked){
    cx = mouseX - xOffset;
    cy = mouseY - yOffset;
  }
  else{
    if(locked2){
      c2x = mouseX - x2Offset;
      c2y = mouseY - y2Offset;
    }
  }
}

function mouseReleased(){
  locked = false;
  locked2 = false;
}