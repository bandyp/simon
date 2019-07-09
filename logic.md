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
•	All lights flash
•	beeps
•	Counter goes to “–“
•	Reset all functions

Success function
•	All lights stay on for 3 secs
•	Counter reads “win” for 3 sec, then goes to “-“
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
