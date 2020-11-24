let gui;
let b;
let img1;
let img2;
let img3;
function preload() {
  img1 = loadImage('/GUI/assets/potty party.png');
  img2 = loadImage('/GUI/assets/diamonddrag.png');
  img3 = LoadImage('/GUI/assets/spelling champs.png');
}
function setup() {
 
  createCanvas(400, 400);
  gui = createGui();
  
  b1 = createButton("Potty Party", 50, 150);
  b2 = createButton("Diamond Drag", 200, 150, 150);
  b3 = createButton("Spelling Champs", 125, 200, 175);
  
  gui.loadStyle("Blue");
  image(img2, 50, 300);// (width, height);
  image(img1, 125, 300);//( w, h);
  image(img3, 225, 300);//( w, h);
}

function draw() {
  background(225);
  drawGui();
  fill('rgba(0,255,0, 0.25)');
  stroke(color(0, 0, 255));
  strokeWeight(1.5);
  textSize(60);
  text('Toddler Tap', 45, 100);
  
  if(b1.isPressed) {
    print(b1.label + " is loading...");
    window.open('https://teward-52.github.io/fmsproject/PottyParty/');
  } 
  if(b2.isPressed) {
    print(b2.label + " is loading...");
    window.open('https://teward-52.github.io/fmsproject/DiamondDrag/');
  }
  if(b3.isPressed) {
    print(b3.label + " is loading...");
    window.open('https://teward-52.github.io/fmsproject/SpellingChamps/');
  }
  
}