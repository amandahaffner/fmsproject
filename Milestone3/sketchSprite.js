//This is the main program for Project FMS: Implementation 3
let square1X = 50, square1Y = 50, square1Size = 100; //Square 
let circle1X = 200, circle1Y = 250, circle1Size = 100;
let rect1X = 200, rect1Y = 50, rect1Size1 = 150; rect1Size2 = 125;

let square1Over = false;
let circle1Over = false;
let rect1Over = false;

var message;
var message2;

function setup(){
    createCanvas(400, 800);
    changeDirection = false;
    changeDirection2 = false;
}

function draw(){
    background(0, 0, 0);
    update(mouseX, mouseY);

    if(square1X > width){
        changeDirection = true;
    } else if(square1X <= 0){
        changeDirection = false;
    }
    if(square1X >= 0 && changeDirection == false){
        square1X = square1X + 1;
    } else if(changeDirection == true){
        square1X = square1X - 1;
    }

    if(rect1Y > height){
        changeDirection2 = true;
    } else if(rect1Y <= 0){
        changeDirection2 = false;
    }
    if(rect1Y >= 0 && changeDirection2 == false){
        rect1Y = rect1Y + 1;
    } else if(changeDirection2 == true){
        rect1Y = rect1Y - 1;
    }
    
    

    fill(255, 204, 0);
    var square1 = square(square1X, square1Y, square1Size);
    fill('blue');
    var circle1 = circle(circle1X+45, circle1Y+45, circle1Size);
    fill('red');
    var rect1 = rect(rect1X, rect1Y, rect1Size1, rect1Size2);
    
    textSize(15);
    fill(255, 204, 0);
    text(message, 30, 400);

    if(overSquare1(square1X, square1Y, square1Size)){
        message = "YOU'RE OVER THE GOLD SQUARE!";
    } else{
        message = "YOU'RE NOT OVER THE GOLD SQUARE!";
    }

    fill('blue');
    text(message2, 30, 420);

    if(mouseIsPressed && overCircle1(circle1X, circle1Y, circle1Size)){
        message2 = "YOU'RE CLICKING THE BLUE CIRCLE!";
    } else{
        message2 = "YOU'RE NOT CLICKING THE BLUE CIRCLE!";
    }

    
}

function update(x, y){
    if(overSquare1(square1X, square1Y, square1Size)){
        square1Over = true;
        circle1Over = false;
        rect1Over = false;
    } else if(overCircle1(circle1X, circle1Y, circle1Size)){
        circle1Over = true;
        square1Over = false;
        rect1Over = false;
    } else if(overRect1(rect1X, rect1Y, rect1Size1, rect1Size2)){
        rect1Over = true;
        circle1Over = false;
        square1Over = false;
    }
}

function overSquare1(x, y, size){
    if (mouseX >= x && mouseX <= x+size &&
        mouseY >= y && mouseY <= y+size){
            return true;
        } else{
            return false;
        }
}

function overCircle1(x, y, size){
    if (mouseX >= x && mouseX <= x+size &&
        mouseY >= y && mouseY <= y+size){
            return true;
        } else{
            return false;
        }
}

function overRect1(x, y, sizeW, sizeH){
    if (mouseX >= x && mouseX <= x+sizeW &&
        mouseY >= y && mouseY <= y+sizeH){
            return true;
        } else{
            return false;
        }
}