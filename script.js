$(document).ready(function() {

    var on = false;
    var sequence = [];
    var cpuSequence = [];
    var userSequence = [];
    var success = false;
    var turn = 0;
 //   var cpuTurn;
    //   var count = 1;

    //    var buttonClicked = true;

    // power on/off

    document.getElementById("power").onclick = function() { powerButton() };

    function powerButton() {
        var x = document.getElementById("power").classList.contains("change");
        console.log(x);
        if (x == false) {
            console.log('on');
            on = true;
            $('#power').addClass("change");
            powerOn();
        }
        else {
            console.log('off');
            on = false;
            $('#power').removeClass("change");
            powerOff();
        }
    }

    function powerOn() {
        if (on == true) {
            $("#count").html('0');
            sequence = [];
            turn = 0;
            userSequence = [];
            cpuSequence = [];
            startSimon();
            document.getElementById("start").disabled = false;
            document.getElementById("inner").disabled = false;
            //         $("#start").disabled = false;
            //      x = false;
        }
        else {
            restart();
        }
    }

    function powerOff() {
        $('.colorButton').removeClass('bright'),
            $("#count").html('');
        document.getElementById("start").disabled = true;
        document.getElementById("inner").disabled = true;
        //           $("#start").disabled = true;
    }

    // press start button to begin
    function startSimon() {
        if (on == true) {
            $("#start").on("click", function() {
                $("#count").html('1');
                //        if (on || success) {
                play();
            });
        }
    }



    // start play function by creating sequence of 20 from start button (from memory game, code insitute, wwschools)

    function play() {
        //      sequence = [];
        //       var count = 1;
        //       success = false;
        //        userSequence = [];
        //        cpuSequence = [];
        //        $("#count").html(turn);
        //        turn = 0;

        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
        }

        console.log(sequence);

        setTimeout(makeBright, 200);

    }

    function makeBright() {
        //       if (success == true) {
        if (sequence[turn] == 1) {
            cpuSequence.push(1);
            console.log(cpuSequence);
            $('#green').addClass('bright'),
                setTimeout(function() {
                    $('#green').removeClass('bright');
                }, 800);
        }
        else if (sequence[turn] == 2) {
            cpuSequence.push(2);
            console.log(cpuSequence);
            $('#blue').addClass('bright'),
                setTimeout(function() {
                    $('#blue').removeClass('bright');
                }, 800);
        }
        else if (sequence[turn] == 3) {
            cpuSequence.push(3);
            console.log(cpuSequence);
            $('#yellow').addClass('bright'),
                setTimeout(function() {
                    $('#yellow').removeClass('bright');
                }, 800);
        }
        else if (sequence[turn] == 4) {
            cpuSequence.push(4);
            console.log(cpuSequence);
            $('#red').addClass('bright'),
                setTimeout(function() {
                    $('#red').removeClass('bright');
                }, 800);
        }

        userTurn();

        //        }
    };

    function userTurn() {
        //        if (count == turn) {
        //         if (success == true) {

        // user clicking lights (from code insitute module)


        $("#green").mousedown(function() {
            $(this).addClass('bright'); // changes to light green
            userSequence.push(1);
            console.log(userSequence);
            $("#green").mouseup(function() {
                $(this).removeClass('bright'); //changes back
                compareArrays();
            });

        });

        $("#blue").mousedown(function() {
            $(this).addClass('bright'); // changes to light blue
            userSequence.push(2);
            console.log(userSequence);
            $("#blue").mouseup(function() {
                $(this).removeClass('bright'); //changes 
                compareArrays();
            });

        });

        $("#yellow").mousedown(function() {
            userSequence.push(3);
            console.log(userSequence);
            $(this).addClass('bright'); // changes to light yellow

            $("#yellow").mouseup(function() {
                $(this).removeClass('bright'); //changes back
                compareArrays();
            });

        });

        $("#red").mousedown(function() {
            userSequence.push(4);
            console.log(userSequence);
            $(this).addClass('bright'); // changes to light red

            $("#red").mouseup(function() {
                    $(this).removeClass('bright'); //changes back
                    compareArrays();
                
            });
        });
    }

    function compareArrays() {
        if (userSequence[userSequence.length - 1] == cpuSequence[cpuSequence.length - 1]) {
            console.log("correct");
            $("#count").html(turn + 1);
            success = true;
            setTimeout(makeBright(), 500);
            turn++;
            console.log(turn);
            $("#count").html(turn);
        }
        else if (userSequence.length == 3 && success == true) {
            win();
        }
        else {
            console.log("wrong");
            success = false;
            setTimeout(end(), 500);
        }
    }

    function end() {
        userSequence = [];
        cpuSequence = [];
        sequence = [];
        turn = 0;
        $(".colorButton").addClass('bright');
        $("#count").html('LOST');
        setTimeout(restart, 3000);
    }

    function restart() {
        $("#count").html('0');
        $(".colorButton").removeClass('bright');
        console.log(cpuSequence);
        console.log(userSequence);
    }

    function win() {
        $(".colorButton").addClass('bright');
        $("#count").html('WIN!');
        setTimeout(restart, 3000);
    }

});
