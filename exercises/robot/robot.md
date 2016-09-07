# Building a Robot
## Goal 
This assignment is designed to practice using the Processing language by coloring a robot. And to learn the difference between a static program and a dynamic program. 
## Part 1: Color The Robot
<img align="right" src="https://github.com/susanev/2016_Winter_UWHCDE_p5/blob/master/exercises/robot/images/robot.png" alt="Black, white, and gray robot">

![alt text][robot]
* Type up the robot code (see last page) into a Processing window and run it to make sure it works. 
* Make the robot more interesting by coloring it with a theme (think sports team, favorite food, or cartoon character).
* All parts of the robot should be colored
* Add a comment to every line of your code clearly describing what it does
* Your coloring theme should be unique, please do not copy another person's work, show us your own creativity and style!
### Need help?
These steps will help you color your robot
* Find the robot part you want to color in the code
* Find a color using the color selector [Tools > Color Selector]
* Transfer the three RGB color numbers to the fill( ) function, or the stroke( ) function before the the of code that draws the robot's part
* Run the program to make sure it still works and looks the way you want it to
* Add in a comment that describes the line of code you just wrote or changed

## Part 2: Make The Robot Program Dynamic
The program you have written so far is static. The Processing code runs, draws your beautiful robot, and then quits. 

We want it to be active (keep running) and make our robot move. Notice the two programs on the following page. The one on the left is the static robot, the one on the right is the dynamic version. The new code groups the instructions for the robot into two functions, the setup( ) function and the draw( ) function. Tip: In programming, functions are written with a pair of parentheses after the name. You should make the highlighted changes to your code. 




Original Code
Updated, dynamic code


What is happening?
The setup( ) function runs once, when the program is first run. After the setup( ) runs, then the draw( ) function runs over and over again. This redraws the image. The diagram shows what is happening when the Processing engine runs a dynamic program.


The way to read this diagram is that the Processing engine starts running setup( ), finishes it, starts running draw( ), finishes that, and then “goes around, and runs draw( ) again, again and again … .”
Part 3: Move the Robot
Add two more instructions to your dynamic program at the top of your draw function



The instructions go inside of draw( ) – right after the draw( ) function and before the //Neck comment. Caution: Notice that “mouse” is written in lowercase letters, and the X and Y are capitals; this is required. Run your program and move your mouse.
Part 4: Lots of Robots!
Remove background(205); from your program, and run it again. Add a comment at the top of your program that clearly explains what is happening when you remove the background line of code and what happens when you put it back in. Need help understanding this? Reach out to us!
Submission
Make sure your code has the background call added back in before turning in. Then turn in your .pde file on canvas. You should also add this program to your website portfolio. This will be demoed in lab, or you can watch this reference video.

[robot]: https://github.com/susanev/2016_Winter_UWHCDE_p5/blob/master/exercises/robot/images/robot.png "Black, white, and gray robot"

