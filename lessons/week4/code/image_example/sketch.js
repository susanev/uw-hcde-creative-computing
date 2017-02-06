// images gif, png, jpg, svg

// javascript is asynchronous, which means sometimes things happen at the same time
// we want to tell our program to load images before anything else starts
// this is why we need preload

var cat;
var catWidth = 736;
var aspectRatio = 654/736;

function preload() {
  cat = loadImage("kitty.jpg");
}

function setup() {
  createCanvas(736, 736);
  image(cat, 0, 0);
}

function draw() {
  background(255);
  image(cat, 0, 0, mouseX, mouseX * aspectRatio);
}

// function mousePressed() {
//   catWidth = random(10, 736);
//   image(cat, random(0, 500), random(0, 500), catWidth, catWidth * catHeightRatio);
// }