
# Simon Says
I really wanted to test myself with the javascript and jquery for this project. 
I planned to keep the design close to the original look, but then realised a 
cleaner layout looked much better. 
While still resembling the original game, it looks and functions much better. 
Why not try to beat your high score here: https://bandyp.github.io/simon/

## UX
I wanted to make it visually clean and tidy. White background to contrast with 
the bright colours.

The idea is the user is playing this game for fun. There is a short story in 
the instructions and the game then makes it easy to try to break their own record.

It's fully responsive on all screen sizes.

This project started its journey in a balsamiq wireframe 
[here.](https://github.com/bandyp/simon/blob/master/assets/images/SimonMockUp.pdf)

This then evolved over time. Instead of the control panel in the centre it 
was moved to the top, then removed altogether. It ended up taking too much room 
on the page and didn't add to the look and feel of the game. 

## Features
Instructions: I wanted to keep this fun. Playing the game is quite simple and 
requires little guidance. But I like the idea of adding the element of helping 
Simon reach his goal.

High Score: The user can keep track of their best effort in a session.

Audio/Visual: The buttons light up and sound plays when the user clicks the 
coloured buttons. There is a slight gradient on the coloured buttons to give a 3D effect.
Buttons respond visually to clicks. 


## Technology Used
Balsamiq for the wireframe.

Jquery for a lot of the script.

Bootstrap, originally, I really didn't make much use of the it. But once the script 
was complete, I went back and fixed the HTML to be a lot more
responsive with bootstrap. Changing the round circle into 2 rows worked much better.

Google fonts - I tried to keep the buttons font a little retro and the score boxes
a digital feel. 


## Testing
I found the JS/Jquery part quite challenging. I started with writing out the 
logic in simple steps [here.](https://github.com/bandyp/simon/blob/master/logic.md)
But even this needed to be simplified at each function. I would write a slightly 
complicated function and it would fail. 
I ended up making it simpler and testing it (usually with a console log) to see 
if it worked. 

There was a lot of manual testing to ensure that the random sequence was 
generated, that the buttons corresponded to colours and sounds when clicked, 
that the functions worked to check the arrays etc.

Finally, I had friends and relatives use the app on their own devices and 
updates were made to fix the issue of timings.


## Deployment
I used Github for the deployment. I tried to keep to committing after each bit 
of functionality was added. Through the different versions it's possible to see 
how the game evolved over time. Follow the link to the github depository to see 
the version updates. https://github.com/bandyp/simon

## Credits

### Acknowledgments
I started by looking at other games tutorials and following along. Until I 
reached a point where I could write my own code. At certain points I sought the 
help of the code institute tutors, stack overflow and youtube.
* Mentor - thank you to Seun for helping with the code for the high score function.
* Tutors - always a great help to point you in the right direction. Particularly on binding clicks and touches to the same function
* Stack overflow - to get the power button to toggle on and off I borrowed a particularly useful bit of code from here. It adds (or removes) a class when clicked then combines an if statement. Also, adding in [0] after the sound is called to make it play.
* Memory game - my first bit of research before I started was from this [site.](https://marina-ferreira.github.io/memory-game/) It was here I took a bit of code to generate random numbers as well as being good practise for my own game.
* Other versions of simon - I also looked to this [sight](https://github.com/beaucarnes/simon-game) to help adjust my own code a little where I needed to compare the arrays.
* W3Schools - I got some of my own help for the help button.
* Simon icon in title is from a website called iconfinder.


### Media
Sounds I copied from free code camp tutorial from link above.
