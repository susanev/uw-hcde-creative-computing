function setup() {
	createCanvas(400, 400);
	background(240);
	rectMode(CENTER);
}

function draw() {
	//if (frameCount % 25 == 0) {
		//fill(random(255), random(255), random(255));
		//fill(0);
		translate(200, 200);
		rotate(radians(frameCount));
		rect(0, 0, 300, 20);
	//}
}