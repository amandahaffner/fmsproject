//This is the main program for the game "DiamondDrag"

var target, sprite1, sprite2, sprite3, sprite4;

function setup(){
    createCanvas(800, 400);
    
    //Create target sprite object
    target = createSprite(400, 200, 25, 25);
    //Add target image to target
    target.addImage(loadImage('DDassets/rsz_targetimage.jpg'));

    //Create diamond sprite objects
    diamond1 = createSprite(300, 150, 77, 77);
    diamond2 = createSprite(150, 70, 77, 77);
    diamond3 = createSprite(75, 300, 77, 77);
    //Add diamond image to diamond sprite objects
    diamond1.addImage(loadImage('DDassets/diamondedited.png'));
    diamond2.addImage(loadImage('DDassets/diamondedited.png'));
    diamond3.addImage(loadImage('DDassets/diamondedited.png'));
}

function draw(){
    background(255, 255, 255);
    drawSprites();
}