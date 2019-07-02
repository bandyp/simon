$(document).ready(function() {

    let sequence = [];
    let userSequence = [];
    let success;
    let turn;
    let cpuTurn;
    let playerTurn;
    let bright;
    let playSequence;
    let win;
    let highScore = 0;

    function checkHighScore() {
        if (highScore < bright) {
            highScore = bright;
            $("#highScoreBox").html(highScore - 1);
        }
    }

    // Help Alert box

    $("#helpBox").hide();
    $("#helpButton").mouseover(function() {
        $("#helpBox").show();
        $("#helpButton").mouseleave(function() {
            $("#helpBox").hide();
        });
    });

    // power on/off

    document.getElementById("power").onclick = function() { powerButton() };

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

    function powerOn() {
        playerTurn = true;
        cpuTurn = true;
        success = false;
        playerTurn = false;
        /*       sequence = [];
               userSequence = [];*/
        $("#count").html('--');
        document.getElementById("start").disabled = false;
    }

    $("#start").on("click", function() {
        $("#count").html('1');
        if (playerTurn || cpuTurn || success) {
            play();
        }
    });


    function powerOff() {
        playerTurn = false;
        cpuTurn = false;
        sequence = [];
        userSequence = [];
        $('.colorButton').removeClass('bright'),
            $("#count").html('');
        clearInterval(playSequence);
        document.getElementById("start").disabled = true;
    }

    // start play function by creating sequence of 20 from start button (from memory game, code insitute, wwschools)

    function play() {
        playSequence = 0;
        sequence = [];
        userSequence = [];
        bright = 0;
        turn = 1;
        success = true;
        win = false;
        $("#count").html('1');
        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
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
            document.getElementById("start").disabled = true;
            $('.colorButton').removeClass('bright');
            setTimeout(function() {
                if (sequence[bright] == 1) {
                    $('#soundGreen')[0].play();
                    $('#green').addClass('bright'),
                        setTimeout(function() {
                            $('#green').removeClass('bright');
                        }, 1500);
                }
                if (sequence[bright] == 2) {
                    $('#soundBlue')[0].play();
                    $('#blue').addClass('bright'),
                        setTimeout(function() {
                            $('#blue').removeClass('bright');
                        }, 1500);
                }
                if (sequence[bright] == 3) {
                    $('#soundYellow')[0].play();
                    $('#yellow').addClass('bright'),
                        setTimeout(function() {
                            $('#yellow').removeClass('bright');
                        }, 1500);
                }
                if (sequence[bright] == 4) {
                    $('#soundRed')[0].play();
                    $('#red').addClass('bright'),
                        setTimeout(function() {
                            $('#red').removeClass('bright');
                        }, 1500);
                }
                bright++;
            }, 200);
        }
    }

    // user clicking lights (from code insitute module)

    $("#green").on("mousedown touchstart", function(e) {
        e.preventDefault();
        if (playerTurn) {
            $(this).addClass('bright'); // changes to light green
            $('#soundGreen')[0].play();
            userSequence.push(1);
            $("#green").on("mouseup touchend", function(e) {
                e.preventDefault();
                $(this).removeClass('bright'); //changes back
                compareArrays();

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

        if (userSequence[userSequence.length - 1] !== sequence[userSequence.length - 1]) success = false;
        if (userSequence.length == 20 && success == true) {
            checkHighScore();
            winner();
        }
        if (success == false) {
            checkHighScore();
            sequence = [];
            end();
        }

        if (turn == userSequence.length && success && !win) {
            turn++;
            userSequence = [];
            cpuTurn = true;
            bright = 0;
            $("#count").html(turn);
            playSequence = setInterval(makeBright, 1000);
        }

    }

    // wine, lose, high score and restart functiond

    function end() {

        $(".colorButton").addClass('bright');
        $("#count").html('LOSE');
        playerTurn = false;
        win = false;
        setTimeout(restart, 3000);
    }

    function restart() {
        powerOn();
        sequence = [];
        $("#count").html('--');
        playerTurn = false;
        $(".colorButton").removeClass('bright');
    }

    function winner() {
        $(".colorButton").addClass('bright');
        $("#count").html('WIN!');
        checkHighScore();
        win = true;
        setTimeout(restart, 3000);
    }




});
