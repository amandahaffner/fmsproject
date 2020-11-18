function setup() {
    // create canvas
    createCanvas(710, 400);
  
    input = createInput();
    input.position(20, 65);
  
    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(greet);
  
    greeting = createElement('h2', 'For parents: type what word or letter your kids should trace');
    greeting.position(20, 5);
  
    textAlign(CENTER);
    textSize(50);
  }
  
  function greet() {
    const name = input.value();
    greeting.html( 'Trace over the letters with your mouse');
    input.value('');
  
    let s = name;
  fill(60);
  textSize(200);
  text(s, 300,300);
  }
  
  function draw() {
    stroke(200);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
    button2 = createButton('done');
    button2.position(input.x + input.width, 300);
    button2.mousePressed(congrats);
  }
  
  function congrats(){
    let s= 'Good job! Restart page to sketch more!';
    textSize(30);
  text(s, 400,350);
  }
  