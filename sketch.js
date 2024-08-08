let red 
let green  
let blue  
function setup() {
  createCanvas(500, 500);
  background(220, 220, 220);
  red = random(0,255);
  green = random(0,255);
  blue = random(0,255);
}

function draw() {
  stroke(red,green,blue);
  line(250,250,mouseX,mouseY);
}

function mouseClicked() {
  background(220,220,220);
  red = random(0,255);
  green = random(0,255);
  blue = random(0,255);
}