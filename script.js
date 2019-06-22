$(document).ready(function() {

    let sequence = [];
    let cpuSequence = [];
    let userSequence = [];
    let success;
    let turn;
    let cpuTurn;
    let playerTurn;
    let bright;
    let playSequence;
    let win;

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
        $("#count").html('--');
        document.getElementById("start").disabled = false;
        document.getElementById("inner").disabled = false;
        $("#start").on("click", function() {
            $("#count").html('1');
            if (playerTurn || success) {
                play();
            }
        });
    }

    function powerOff() {
        playerTurn = false;
        $('.colorButton').removeClass('bright'),
            $("#count").html('');
        clearInterval(playSequence);


        document.getElementById("start").disabled = true;
        document.getElementById("inner").disabled = true;
        window.location.reload();
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
        console.log(sequence);
        cpuTurn = true;
        playSequence = setInterval(makeBright, 800);
    }

    function makeBright() {
        playerTurn = false;
        if (bright == turn) {
            clearInterval(playSequence);
            cpuTurn = false;
            playerTurn = true;
        }

        if (cpuTurn) {
            $('.colorButton').removeClass('bright');
            setTimeout(function() {
                if (sequence[bright] == 1) {
                    $('#soundGreen')[0].play();
                    $('#green').addClass('bright'),
                        setTimeout(function() {
                            $('#green').removeClass('bright');
                        }, 800);
                }
                if (sequence[bright] == 2) {
                    $('#soundBlue')[0].play();
                    $('#blue').addClass('bright'),
                        setTimeout(function() {
                            $('#blue').removeClass('bright');
                        }, 800);
                }
                if (sequence[bright] == 3) {
                    $('#soundYellow')[0].play();
                    $('#yellow').addClass('bright'),
                        setTimeout(function() {
                            $('#yellow').removeClass('bright');
                        }, 800);
                }
                if (sequence[bright] == 4) {
                    $('#soundRed')[0].play();
                    $('#red').addClass('bright'),
                        setTimeout(function() {
                            $('#red').removeClass('bright');
                        }, 800);
                }
                bright++;
            }, 200);
        }
    }

    // user clicking lights (from code insitute module)
    //    function userTurn() {
    //        bright = 0;
    //        console.log(turn);
    //        userSequence = [];


    $("#green").mousedown(function() {
        if (playerTurn) {
            $(this).addClass('bright'); // changes to light green
            $('#soundGreen')[0].play();
            userSequence.push(1);
            console.log(userSequence);
            $("#green").mouseup(function() {
                $(this).removeClass('bright'); //changes back
                compareArrays();

            });
        }
    });

    $("#blue").mousedown(function() {
        if (playerTurn) {
            userSequence.push(2);
            $('#soundBlue')[0].play();
            console.log(userSequence);
            $(this).addClass('bright'); // changes to light blue
            $("#blue").mouseup(function() {
                $(this).removeClass('bright'); //changes 
                compareArrays();
            });
        }
    });

    $("#yellow").mousedown(function() {
        if (playerTurn) {
            userSequence.push(3);
            $('#soundYellow')[0].play();
            console.log(userSequence);
            $(this).addClass('bright'); // changes to light yellow
            $("#yellow").mouseup(function() {
                $(this).removeClass('bright'); //changes back
                compareArrays();
            });
        }
    });

    $("#red").mousedown(function() {
        if (playerTurn) {
            userSequence.push(4);
            $('#soundRed')[0].play();
            console.log(userSequence);
            $(this).addClass('bright'); // changes to light red
            $("#red").mouseup(function() {
                $(this).removeClass('bright'); //changes back
                compareArrays();
            });
        }
    });

    function compareArrays() {

        if (userSequence[userSequence.length - 1] !== sequence[userSequence.length - 1]) success = false;
        if (userSequence.length == 6 && success == true) {
            winner();
        }
        if (success == false) {
            end();
        }

        if (turn == userSequence.length && success && !win) {
            turn++;
            userSequence = [];
            cpuTurn = true;
            bright = 0;
            $("#count").html(turn);
            playSequence = setInterval(makeBright, 500);
        }


        //        else {

        //          bright = 0;
        //        success = true;
        //      userSequence = [];
        //    cpuSequence = [];
        //  console.log(turn);
        //            $("#count").html(turn);
        //            setTimeout(makeBright(), 500);
    }


    function end() {
        //        userSequence = [];
        //        cpuSequence = [];
        //        sequence = [];
        //        turn = 0;
        $(".colorButton").addClass('bright');
        $("#count").html('LOSE');
        setTimeout(restart, 3000);
    }

    function restart() {
        window.location.reload();
        powerOn();
        $("#count").html('0');
        $(".colorButton").removeClass('bright');
        //        console.log(cpuSequence);
        //        console.log(userSequence);
        //        cpuTurn = true;
    }

    function winner() {
        $(".colorButton").addClass('bright');
        $("#count").html('WIN!');
        playerTurn = false;
        win = true;
        setTimeout(restart, 3000);
    }

});
