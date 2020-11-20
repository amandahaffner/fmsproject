//This is the main program for the game "DiamondDrag"
var diamondAnimation;
var target, diamond1, diamond2, diamond3, draggedSprite;
let inconsolata;
var removedCounter = 0;

function preload(){
    diamondAnimation = loadAnimation("DDassets/diamondedited.png", "DDassets/diamondeditedsideways.png");
    inconsolata = loadFont('DDassets/InconsolataUltraExpanded-ExtraBold.ttf');
}
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
    //Add animations to each diamond object TODO: implement animations
    //diamond1.addAnimation('moving', diamondAnimation);
    //diamond2.addAnimation('moving', diamondAnimation);
    //diamond3.addAnimation('moving', diamondAnimation);
    //Create collider for target
    target.setCollider('circle', 0, 0, 5);
    //Create colliders for each diamond
    diamond1.setDefaultCollider();
    diamond2.setDefaultCollider();
    diamond3.setDefaultCollider();

    //Functions to move each diamond object
    diamond1.onMousePressed = function(){
        this.animation.goToFrame(this.animation.getLastFrame());
        if(draggedSprite == null){
            draggedSprite = this;
        }
        //diamond1.changeAnimation('moving');
        diamond1.rotation -= 90;
    }
    diamond1.onMouseReleased = function(){
        this.animation.goToFrame(0);
        if(draggedSprite == this){
            draggedSprite = null;
        }
        diamond1.rotation += 90;
    }

    diamond2.onMousePressed = function(){
        this.animation.goToFrame(this.animation.getLastFrame());
        if(draggedSprite == null){
            draggedSprite = this;
        }
        diamond2.rotation -= 90;
    }
    diamond2.onMouseReleased = function(){
        this.animation.goToFrame(0);
        if(draggedSprite == this){
            draggedSprite = null;
        }
        diamond2.rotation += 90;
    }

    diamond3.onMousePressed = function(){
        this.animation.goToFrame(this.animation.getLastFrame());
        if(draggedSprite == null){
            draggedSprite = this;
        }
        diamond3.rotation -= 90;
    }
    diamond3.onMouseReleased = function(){
        this.animation.goToFrame(0);
        if(draggedSprite == this){
            draggedSprite = null;
        }
        diamond3.rotation += 90;
    }
}

function draw(){
    background(255, 255, 255);

    if(draggedSprite != null){
        draggedSprite.position.x = mouseX;
        draggedSprite.position.y = mouseY;
    }

    if(diamond1.collide(target)){
        diamond1.remove();
        draggedSprite = null;
    }
    if(diamond2.collide(target)){
        diamond2.remove();
        draggedSprite = null;
    }
    if(diamond3.collide(target)){
        diamond3.remove();
        draggedSprite = null;
    }

    endGame();

    drawSprites();
}

function endGame(){
    if((diamond1.removed == true) && (diamond2.removed == true) && (diamond3.removed == true)){
        target.remove();
        textFont(inconsolata);
        textSize(width / 20);
        textAlign(CENTER, CENTER);
        //let time = millis(); //Leftover code for possible WEBGL implementation
        //rotateX(time / 1000);
        //rotateY(time / 1234);
        fill(34, 139, 34);
        text('YOU DID IT!', 250, 200);
        textSize(width /40);
        text('PLEASE REFRESH TO PLAY AGAIN.', 290, 230);
    }
}