// inspired by http://genekogan.com/

function setup() {
	createCanvas(350, 350);
	// draw rect from CENTER
	// rectMode(CENTER);
}

function draw() {
	background(240);

	// move the origin to the pivot point
	translate(150, 150); 

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	rotate(radians(frameCount));

	// and draw the square at the origin
	fill(0);
	rect(0, 0, 100, 100);
}