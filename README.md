Simon Says
*****
I really wanted to test myself with the javascript and jquery for this project. 
I planned to keep the design close to the original look, but then started to have more fun with it. 
Soon it took on a life of its own.

UX
*****
I wanted to make it visually enticing and fun. You could nearly imagine that this game is being played in a childrens game room. 
The game itself looks like a person. The High score and help buttons blend in with this image.

The idea is the user is playoing htis game for fun. There is a short story in the instructions and the game then makes it easy to try to break their record.

It's fully responsive on all screen sizes.

This project started its journey in a balsamiq wireframe attached.

This then evolved over time. Instead of the control panel in the center it is moved to the top. 
It would have been easy to center it with margin-top, howver I liked the look of this way better. It was quite natural to draw arms and legs onto the game.

Features
****
Intructions: I wanted to keep this fun. Playng the game is quite simple and requires little guidance. But I like the idea of adding the element of helping Simon reach his goal.

High Score: The user can keep track of their best effort.

Background: Adds fun to the viewport.

Audio/Visual: The buttons light up and sound plays when the user clicks the colored buttons.


Technology Used
****
Balsamiq
Jquery
Bootstrap
Google fonts


Testing
****
I found the JS/Jquery part quite challenging. I stated with writing out the logic in simple steps. 
But even this needed to be sinmplified at each function. I would write a slightly complicated function and it would fail. 
I ended up making it simpler and testing it (usually with a console log) to see if it worked. 

There was alot of manual testing to ensure that the random sequence was generated, that the buttons corespoded to colors and sounds when clicked, that the functions worked to check the arrays etc.


Deployment
****
I used Github for the deployment. I tried to keep to commiting after each bit of functionality was added. Through the different versions its possible to see how the game evolved over time.

Credits
****
I started by looking at other games tutorials and following along. Until I reached a popint where I could write my own code. At certain points I sought the help of the code institute tutors, stack overflow and youtube.


Media
****

Sounds I copied from free code camp tutorial.

Background image was from ....

Acknowledgments
******

When power switch is toggle on:
•	Change counter to “--“

When power switch is toggle off:
•	Reset all functions
•	No functions start, click button does not go
•	Colors to dark
•	Counter to blank ""

When start button is clicked, play function:
•	Function "sequence" - Series of random 4 (1,2,3,4) 
function "simonArray" to link numbers:
    o	Colors (green, blue, yellow, red)
    o	Noise (E, C#, A, E (octave higher)
•	function "intervals" to play sequence in increments of 1 at 0.8 sec intervals, with 0.2 sec in between
•	Function to allow user to repeat and sequence
•	Computer first then player repeats
•	If player does not === computer then do fail function,  else continue 
•	If player reaches 20 then do success function

Fail function
•	All lights flash twice
•	2 beeps
•	Counter goes to “–“
•	Reset all functions

Success function
•	All lights stay on for 5 secs
•	Counter reads “win” for 5 sec, then goes to “-“
•	Reset all functions

Test function used to test logic

Functions needed:
1.	Power function
2.	Start function
3.	Computer play function
4.	Player play function
5.	4 for when button is pressed by computer and player:
    •	Blue
    •	Yellow
    •	Red
    •	Green
6.	Fail function
7.	Success function

Variables needed:
Var/let:
•	turn

Const:
•	turnCounter
