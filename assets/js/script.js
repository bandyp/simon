$(document).ready(function() {

    // My shopping list of variables

    let sequence = [];
    let userSequence = [];
    let success;
    let turn;
    let cpuTurn;
    var playerTurn;
    let bright;
    let playSequence;
    let win;
    let highScore = 0;

    // high score = code borrowed from Mentor

    function checkHighScore() {
        if (highScore < bright) {
            highScore = bright;
            $("#highScoreBox").html(highScore - 1);
        }
    }

    // easy help box alert to guide uses on instructions

    $("#helpBox").hide(); // starts hidden
    $("#helpButton").mousedown(function() { // will activate when mouse button is clicked down
        $("#helpBox").show(); // shows the dialogue
        $("#helpButton").mouseup(function() { // will go back hidden when mouse button is unclicked
            $("#helpBox").hide();
        });
    });

// toggle power button on and off

//    document.getElementById("power").onclick = function() { powerButton() };
$("#power").click(powerButton) 
// adds and removes class of 'change' to tell if power is on or off 
    function powerButton() {
        var x = document.getElementById("power").classList.contains("change");
        if (x == false) {
            $('#power').addClass("change");
            powerOn();
        }
        else {
            $('#power').removeClass("change");
            powerOff();
        }
    }
    
// enables start button so users can press it and a lights up score counter, it also allows the cpu function to start when called.
    function powerOn() {
        cpuTurn = true;
        success = false;
        playerTurn = false;
        $("#count").html('--');
        document.getElementById("start").disabled = false;
    }
// starts the game when the button is pressed, turn counter goes to 1 as its the first turn
    $("#start").on("click", function() {
        $("#count").html('1');
        if (playerTurn || cpuTurn || success) { //start button will only call the play function if player/cpu turn and success are all true
            play();
        }
    });

// what happens when power is turned off
    function powerOff() {
        playerTurn = false; // player cant press buttons
        cpuTurn = false; // cpu cant run function
        sequence = []; // the random list of 20 numbers goes back to 0
        userSequence = []; // the sequence of the players clicks is brought to 0
        $('.colorButton').removeClass('bright'), // lights are all off
            $("#count").html(''); // turn counter is turn off
        clearInterval(playSequence); // the series of cpu button presses is cleared
        document.getElementById("start").disabled = true; //start button will not click
    }

    // start play function by creating sequence of 20 from start button, it will then call the cpu to start the lighting buttons function, in 1 sec intervals

    function play() {
        playSequence = 0;
        sequence = [];
        userSequence = [];
        bright = 0;
        turn = 1;
        success = true;
        win = false;
        $("#count").html('1');
        for (var i = 0; i < 20; i++) { // variable 'i' will keep going in a loop while it is less than 20
            sequence.push(Math.floor(Math.random() * 4) + 1); // the loop will add a random number 0 to 4, 
            // (rounded down to nearest whole number then add 1 so options will be 1,2,3 or 4)
        }

        cpuTurn = true;
        playSequence = setInterval(makeBright, 1000);
    }

    // function which allows cpu to select color and sound

    function makeBright() {
        playerTurn = false;
        if (bright == turn) {
            clearInterval(playSequence);
            cpuTurn = false;
            playerTurn = true;
        }

        if (cpuTurn) {
            document.getElementById("start").disabled = true; // means start button can not be pressed to ensure the function is not called mulitple times at once
            $('.colorButton').removeClass('bright'); //ensure all colors are off before starting
            setTimeout(function() { // runs function every 1500ms
                if (sequence[bright] == 1) { // pulls the number from the position in the array as it progesses through the random numbers and matches it to the correct color
                    $('#soundGreen')[0].play(); // plays the matching sound to the number
                    $('#green').addClass('bright'), // brightens the matching color to the number
                        setTimeout(function() { // turns off the brightness after 1.5s
                            $('#green').removeClass('bright');
                        }, 1500);
                }
                if (sequence[bright] == 2) { // blue = 2
                    $('#soundBlue')[0].play();
                    $('#blue').addClass('bright'),
                        setTimeout(function() {
                            $('#blue').removeClass('bright');
                        }, 1500);
                }
                if (sequence[bright] == 3) { //  yellow = 3
                    $('#soundYellow')[0].play();
                    $('#yellow').addClass('bright'),
                        setTimeout(function() {
                            $('#yellow').removeClass('bright');
                        }, 1500);
                }
                if (sequence[bright] == 4) { // red = 4
                    $('#soundRed')[0].play();
                    $('#red').addClass('bright'),
                        setTimeout(function() {
                            $('#red').removeClass('bright');
                        }, 1500);
                }
                bright++; // adds 1 to the number of cpu turns
            }, 200);
        }
    }

    // user clicking lights, both clicks and touches

    $("#green").on("mousedown touchstart", function(e) { // what happpens when the green button is clicked on computer or touched on mobile devices
        e.preventDefault(); // prevents function calling twice on mobile
        if (playerTurn) { // only runs if players turn,otherwise the user could interupt cpus turn
            $(this).addClass('bright'); // changes to light green
            $('#soundGreen')[0].play(); //plays greens sound
            userSequence.push(1); // adds the matching number of the color to the users array
            $("#green").on("mouseup touchend", function(e) { // when user unclicks or removes touch this is function called
                e.preventDefault();
                $(this).removeClass('bright'); //removes brightness
                compareArrays(); //this will call a function to see if user is correct
            });
        }
    });

    $("#blue").on("mousedown touchstart", function(e) {
        e.preventDefault();
        if (playerTurn) {
            userSequence.push(2);
            $('#soundBlue')[0].play();
            $(this).addClass('bright'); // changes to light blue
            $("#blue").on("mouseup touchend", function(e) {
                e.preventDefault();
                $(this).removeClass('bright'); //changes 
                compareArrays();
            });
        }
    });

    $("#yellow").on("mousedown touchstart", function(e) {
        e.preventDefault();
        if (playerTurn) {
            userSequence.push(3);
            $('#soundYellow')[0].play();

            $(this).addClass('bright'); // changes to light yellow
            $("#yellow").on("mouseup touchend", function(e) {
                e.preventDefault();
                $(this).removeClass('bright'); //changes back
                compareArrays();
            });
        }
    });

    $("#red").on("mousedown touchstart", function(e) {
        e.preventDefault();
        if (playerTurn) {
            userSequence.push(4);
            $('#soundRed')[0].play();

            $(this).addClass('bright'); // changes to light red
            $("#red").on("mouseup touchend", function(e) {
                e.preventDefault();
                $(this).removeClass('bright'); //changes back
                compareArrays();
            });
        }
    });

    // checks that user has clicked the correct color in the sequence 

    function compareArrays() {

        if (userSequence[userSequence.length - 1] !== sequence[userSequence.length - 1]) success = false; // if the users clicked color does not match the cpu, then they are not successful
        if (userSequence.length == 20 && success == true) { // if the user gets to 20 successful clicks of colors they win
            checkHighScore(); // high score function called to check if winner beats high score
            winner(); // winner function called
        }
        if (success == false) { // what happens if player loses
            checkHighScore(); // high score checked to see if it is beaten
            sequence = []; // the random number array reverts to 0
            end(); // the end function is called
        }

        if (turn == userSequence.length && success && !win) { // if player is correct but does not get 20 yet
            turn++; // add one to the number of turns
            userSequence = []; // players array reverts to 0 to start over agin after cpu
            cpuTurn = true; // cpu can play
            bright = 0; // cpu needs to play the complete array again, not just the new number
            $("#count").html(turn); // adds 1 to the turn counter
            playSequence = setInterval(makeBright, 1000); // calls the cpu to play the function every 1000ms
        }

    }

// what happens if the game ends and player loses
    function end() {

        $(".colorButton").addClass('bright'); // all colors brighten at once
        $("#count").html('LOSE'); // turn counter says LOSE
        playerTurn = false; // player cant press any buttons
        win = false; // tells us player lost
        setTimeout(restart, 3000); // plays the restart function after 3 sec
    }

// to call simon to a position where it can start again
    function restart() {
        powerOn(); // start from original on stage
        sequence = []; // random number array goes to 0
        $("#count").html('--'); // turn counter redets
        playerTurn = false; // player cant press buttons
        $(".colorButton").removeClass('bright'); // brightness is removed
    }

// what happen is player wins
    function winner() {
        $(".colorButton").addClass('bright'); // all colours brighten
        $("#count").html('WIN!'); // tuern counter says WIN!
        checkHighScore(); // high score is checked
        win = true; // tells us player wins
        setTimeout(restart, 3000); // goes to reset after 3 sec
    }
});
