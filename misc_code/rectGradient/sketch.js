function setup() {
  createCanvas(400, 400);
  noStroke();
  
  for(y = 0; y < width; y = y + 10){
    for(x = 0; x < height; x = x + 10){
      fill((x + y) * 0.5);
      rect(x, y, 10, 10);
    }
  }
}
