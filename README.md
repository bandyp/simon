
# Simon Says
Here is a digital replica of the famous 80's game of the same name. The idea is 
to repeat the games sequence of colors which adds up by one for every successful turn.
It was important that the games graphics remained responsive to different screen sizes
and that the turns moved seemlessly between the game and the user. 
 
While still resembling the original game, it looks and functions much better. 
Why not try to beat your high score here: https://bandyp.github.io/simon/

![](https://github.com/bandyp/simon/blob/master/assets/images/image.png)

## UX
I wanted to make it visually clean and tidy. White background to contrast with 
the bright colours.

There is a short story in 
the instructions and the game then makes it easy to try to break their own record.

It's fully responsive on all screen sizes.

This project started its journey in a balsamiq wireframe 
[here.](https://github.com/bandyp/simon/blob/master/assets/images/SimonMockUp.pdf)

This then evolved over time. Instead of the control panel in the centre it 
was moved to the top, then removed altogether. It ended up taking too much room 
on the page and didn't add to the look and feel of the game. 

### Users
Expected users could be anyone who wants to challenge their memory and play a game to pass the time.

### User Stories
* A commuter travelling to and from work looking to pass some time.
* Children playing to challenge each other against the computer.
* A student on a study break, training their brain.

## Features
* Instructions: Playing the game is quite simple and 
requires little guidance. But I like the idea of adding the element of helping 
Simon reach his goal.

* High Score: The user can keep track of their best effort in a session.

* Audio/Visual: The buttons light up and sound plays when the user clicks the 
coloured buttons. There is a slight gradient on the coloured buttons to give a 3D effect.
Buttons respond visually to clicks. 

* In future, I might plan to have more difficult settings with 6 or 8 coloured buttons. Also, I feel the sounds could be improved open to sound more musical.

* BUG - The help button has an issue on firefox, which could not be fixed from searches online.

## Technology Used
* HTML - for the sytructure of the content of the page
* CSS3 - for designing the style of the the simon game
* Javascript - for the game logic
* Jquery - for moving around the DOM, simplifying the script
* Jasmine - for testing that the player could not interupt the sequence accidently
* Balsamiq - for the wireframe
* Bootstrap - framework for responsiveness
* Google fonts - I tried to keep the buttons font a little retro and the score boxes
a digital feel. 
* Git - for version control
* GitHub - to host the repository
* GitHup Pages - Website hosting.


## Testing

### Manual Tests
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

### Automated Tests
* Jasmine - used to test that the JS was working correctly when the player shouldn't be able to play
* Chrome Developer Tools - to ensure all screen sizes responded correctly
* W3C HTML & CSS Validation - used to test HTML and CSS
* JSHint - used to test Javascript


## Deployment
I used Github for the deployment. I tried to keep to committing after each bit 
of functionality was added. Through the different versions it's possible to see 
how the game evolved over time. Follow the link to the github depository to see 
the version updates. https://github.com/bandyp/simon

The process involved:
* Hosting a git repository on GitHub.
* On the Github repository go to the settings page and GitHub Pages section.
* Change source to master branch.
* Link is provided to page.

To deploy your own version:
* Visit the repository [here](https://github.com/bandyp/simon)
* Click 'clone' to copy
* Open your IDE
* Type 'git clone https://github.com/bandyp/simon.git' in the terminal window of the root directory

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
* Simon the original game was developed by Ralph H. Baer and Howard J. Morrison with the coding by Lenny Cope.


### Media
Sounds I copied from free code camp tutorial from the same [link]((https://github.com/beaucarnes/simon-game) above.
