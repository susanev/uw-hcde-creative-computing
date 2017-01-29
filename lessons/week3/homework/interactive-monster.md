_HCDE 598 Winter 2017_
# Week 2 Homework

## Interactive Monster
_[Due Saturday, 02/04, at 9pm]()_

### Goals
This assignment will help you practice using if-statements, to allow your program to perform different operations without interference. You will be creating a custom monster, with a moving eye(s), and jumping interactions. 

### Specification
* Your canvas size should take up at least 3/4 of your screen size; work big .. not small!
* Your monster must be in its own function with parameters
* Your monster must be able to switch between jumping and eye movements when the user clicks the mouse

### Tasks
1. Create a own customized monster, it should have it's very own function with parameters to control its position. It should have at least 1 leg and at least 1 eye, but everything else is up to you. Some inspiration is shown below, but remember this monster should be your very own and not a copy of someone else's. As usual please sketch your ideas before you start to code and save those sketches as you will be submitting them with your portfolio link.

	![alt text][robot]
	![alt text][monster-1]
	![alt text][monster-2]

	Make sure to run your code, and ensure your monster looks as intended before moving on to the next step.

1. Setup the if statements to control whether your program will display a jumping monster, or a monster with moving eyes. First start by creating a variable named `page` at the top of your code, you should set its starting value to 0. Then add the code below to draw.

	```javascript
	if (page == 0) {
		// call your monster function
		// add two if statements here as described in step 4
	} else {
		// call your monster function
		// add if statement described in step 5 here
	}
	```

	Notice, that your `draw` function should have a total of 2 calls to your monster function, if you have a third call outside the if/else statements you should remove it before moving on to the next step.

1. Add a `mousePressed` function that will switch between your two pages. If your monster is jumping and you user clicks then it should switch to the moving eye monster, if they click again it should switch back to the jumping monster .. and so on.

	To do this you will add `page = 1 - page;` into your mousePressed function.

	Run your code, you won't see any changes yet because you haven't written code to tell your monster to jump or move its eye but you should still see your monster and have no errors before moving on to the next step.

1. Write code to move your eye(s). First add a variable at the top named `eyeDirection` and set its value to `0`. 

	Add `eyeDirection` to the x position of your monster's eye(s). Before proceeding, temporarily initialize `eyeDirection` to `10` and to `-10`, and notice that the eye should look right and then left; then set it back to `0`.

	Add two if statements to draw as shown in step 2. These if-statements should determine if the eye should move left or right based on the mouse's x-position. Notice that you will probably want to increment your eyeDirection variable by 0.5 instead of 1 so it moves slowly.

	You will also want to use min/max to prevent your monster's eye from leaving its face.

	Test your code. The eye should move when the mouse is on each side. You can decide whether the eyes should still move when the mouse is between them.

1. Write code so that your monster jumps up and down. To start define two variables at the top: `jumpValue`, and `jumpDir`, you decide on the values for your monster.

	In draw, add if statements along with calls to min/max to cause your monster to jump up and down repeatedly without running off of the screen. `jumpValue` is the value you are adding to the `y` position of your monster and `jumpDir` represents the speed and direction your monster is moving.

	To make the monster move, change the function for your monster to add jumpValue to the y position for all of the shapes that make up the monster. 

### [Submission](https://canvas.uw.edu/courses/1099807/assignments/3586665)
* Your code should have a top comment block with your name, last edited date, and a brief description of the entire program
* Each line in setup and draw should have a comment
* Each function that you created should have a top comment briefly explaining what that function does (note that setup and draw do not need top comments)
* Add your Interactive monster to your Github portfolio and submit a link to this project on canvas along with an image of your sketches
	* If you are comfortable with HTML and CSS also add your sketches to your portfolio

### Extra Challenge
* Add code to make it look like the monster is bending its knees as it jumps (hint: you can achieve this effect my varying the length of the monster's leg)
* We are changing monsters by clicking, as an improvement add some buttons that allows the user to switch by clicking a button instead of just any mouse click
* Add some more interactive elements by adding more buttons and more monster versions
* Add more custom details to your monster
* Add an interesting moving background

### Reference
*

[robot]: https://github.com/susanev/uw-hcde-creative-computing/blob/master/lessons/week3/homework/images/robot.png "Robot"

[monster-1]: https://github.com/susanev/uw-hcde-creative-computing/blob/master/lessons/week3/homework/images/monster_1.png "Monster Example 1"

[monster-2]: https://github.com/susanev/uw-hcde-creative-computing/blob/master/lessons/week3/homework/images/monster_2.png "Monster Example 2"
