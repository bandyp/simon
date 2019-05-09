When power switch is toggle on:
•	Turn on power light to yellow
•	Change counter to “-“

When power switch is toggle off:
•	Reset all functions
•	No functions start, click button does not go
•	Turn power light to gray
•	Colors to dark
•	Counter to blank

When start button is clicked, play function:
•	Series of random 4 (1,2,3,4) numbers start, linked to :
    o	Colors (blue, yellow, red, green)
    o	Quadrants (1,2,3,4)
    o	Noise (E, C#, A, E (octave higher)
•	1 sec intervals
•	0.2 sec space between 
•	1 through to 20 repeated in increments
•	Computer first then player repeats
•	If player does not = computer or takes too long, then do fail function 
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
