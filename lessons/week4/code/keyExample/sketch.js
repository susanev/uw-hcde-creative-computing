var y = 75;

function setup() {
  createCanvas(500, 500);
  textSize(40);
  background(200);
}

function draw() {
  background(255);
  fill(0, 255, 0);
  ellipse(100, y, 150, 150);
  
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      y = max(75, y - 10);
    } else if (keyCode == DOWN_ARROW) {
      y = min(y + 10, 425);
    }  
  }
}

// // action keys ignored
// function keyTyped() {
//   background(200);
//   text(key, 100, 100);
  
//   if (key.toUpperCase() == "R") {
//     background(255, 0, 0);
//   }
// }

// all keys
function keyPressed() {

}