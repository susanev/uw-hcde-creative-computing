_HCDE 598 Winter 2017_

# Plan
## Week 3

### Introduction (5 minutes)
* Re-introduce myself and the class
* Round of names from the class
* Office hours 2 – 5 instead?
* Review today's learning objectives
* Meet your partner

### Warmup (30 minutes)
* Share your Lego Family with your partner, talk about process and what you are struggling with
* Share a few class examples
	* [Danielle](https://dteska.github.io/hcde-portfolio/lego_family/)
	* [Kelly](https://kellyjeangraham.github.io/portfolio/lego-bojack-family/)
	* [Nichole](https://nicholekim.github.io/portfolio/LegoFamily/)
	* [Tess](https://tws123.github.io/portfolio598Class/DynamicLegoFamily/)
	* [Zack](https://zjrobinson90.github.io/portfolio/rickmorty/)
* Review Lego Family
* Suggestions for improvements
* Fix/clean your code; help each other!

### Exercises (25 minutes)
* Add restart button to Lego Family

	```javascript
	function button() {
	  if (mouseX > 300 && mouseX < 500 && mouseY > 775 && mouseY < 825  && mouseIsPressed) {
	    fill(0, 200, 0);
	  } else {
	    fill(0, 255, 0);
	  }
	  rect(300, 775, 200, 50, 10);
	  fill(0);
	  textSize(40);
	  text("Reset", 350, 815);
	}

	function mouseReleased() {
	  if (mouseX > 300 && mouseX < 500 && mouseY > 775 && mouseY < 825) {
	    resetVariables();
	  }
	}
	```

### Break (7pm—10 minutes)

### More Exercises (40 minutes)
* Dot Drawing
* Line Drawing
* Growing Ellipse
* Working with text

### Introduce Homework (10 minutes)

### Break (8pm—5 minutes)

### Start Homework (40 minutes)

### Debrief (10 minutes)