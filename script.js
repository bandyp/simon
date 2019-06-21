$(document).ready(function() {

    var sequence = [];
    var cpuSequence = [];
    var userSequence = [];
    var success;
    var turn;
    var cpuTurn;
    var playerTurn;
    var bright;
    var playSequence;
    var win;

    // power on/off

    document.getElementById("power").onclick = function() { powerButton() };

    function powerButton() {
        var x = document.getElementById("power").classList.contains("change");
        if (x == false) {
            playerTurn = true;
            $('#power').addClass("change");
            powerOn();
        }
        else {
            playerTurn = false;
            clearInterval(playSequence);
            $('#power').removeClass("change");
            powerOff();
        }
    }

    function powerOn() {
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
        $('.colorButton').removeClass('bright'),
            $("#count").html('');

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
        $("#count").html(turn);
        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
        }
        console.log(sequence);
        cpuTurn = true;
        playSequence = setInterval(makeBright, 1000);
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
                if (sequence[turn] == 1) {
                    cpuSequence.push(1);
                    turn++;
                    console.log(cpuSequence);
                    $('#green').addClass('bright'),
                        setTimeout(function() {
                            $('#green').removeClass('bright');
                        }, 800);
                }
                else if (sequence[turn] == 2) {
                    cpuSequence.push(2);
                    console.log(cpuSequence);
                    turn++;
                    $('#blue').addClass('bright'),
                        setTimeout(function() {
                            $('#blue').removeClass('bright');
                        }, 800);
                }
                else if (sequence[turn] == 3) {
                    cpuSequence.push(3);
                    console.log(cpuSequence);
                    turn++;
                    $('#yellow').addClass('bright'),
                        setTimeout(function() {
                            $('#yellow').removeClass('bright');
                        }, 800);
                }
                else if (sequence[turn] == 4) {
                    cpuSequence.push(4);
                    console.log(cpuSequence);
                    turn++;
                    $('#red').addClass('bright'),
                        setTimeout(function() {
                            $('#red').removeClass('bright');
                        }, 800);
                }
            }, 200);
        }
    }

    // user clicking lights (from code insitute module)
//    function userTurn() {
//        bright = 0;
//        console.log(turn);
//        userSequence = [];
        if (playerTurn == true && success == true) {

            $("#green").mousedown(function() {
                $(this).addClass('bright'); // changes to light green
                userSequence.push(1);
                //       bright++;
                console.log(userSequence);
                $("#green").mouseup(function() {
                    $(this).removeClass('bright'); //changes back
                    compareArrays();
                });
            });

            $("#blue").mousedown(function() {
                userSequence.push(2);
                //       bright++;
                console.log(userSequence);
                $(this).addClass('bright'); // changes to light blue
                $("#blue").mouseup(function() {
                    $(this).removeClass('bright'); //changes 
                    compareArrays();
                });
            });

            $("#yellow").mousedown(function() {
                userSequence.push(3);
                //     bright++;
                console.log(userSequence);
                $(this).addClass('bright'); // changes to light yellow
                $("#yellow").mouseup(function() {
                    $(this).removeClass('bright'); //changes back
                    compareArrays();
                });
            });

            $("#red").mousedown(function() {
                userSequence.push(4);
                //        bright++;
                console.log(userSequence);
                $(this).addClass('bright'); // changes to light red
                $("#red").mouseup(function() {
                    $(this).removeClass('bright'); //changes back
                    compareArrays();
                });
            });
            bright++;
        }
        playerTurn = false;

    }

    function compareArrays() {
        console.log(userSequence.length);
        console.log(cpuSequence.length);
        console.log(bright);
        console.log(turn);
        if (userSequence.length == cpuSequence.length && bright == turn) {
            if (userSequence.join() == cpuSequence.join()) {
                if (turn == 20) {
                    win();
                    console.log("correct");
                }
                else {

                    bright = 0;
                    success = true;
                    userSequence = [];
                    cpuSequence = [];
                    console.log(turn);
                    $("#count").html(turn);
                    setTimeout(makeBright(), 500);
                }
            }
        }
        else {
            console.log("wrong");
            success = false;
            end();
        }
    }

    function end() {
        userSequence = [];
        cpuSequence = [];
        sequence = [];
        turn = 0;
        $(".colorButton").addClass('bright');
        $("#count").html('LOST');
        //      setTimeout(restart, 3000);
    }

    function restart() {
        //        window.location.reload();
        powerOn();
        //       $("#count").html('0');
        //       $(".colorButton").removeClass('bright');
        //        console.log(cpuSequence);
        //        console.log(userSequence);
        //        cpuTurn = true;
    }

    function win() {
        $(".colorButton").addClass('bright');
        $("#count").html('WIN!');
        setTimeout(restart, 3000);
    }

});
