$(document).ready(function() {

    //    var on = false;
    var sequence = [];
    var cpuSequence = [];
    var userSequence = [];
    var success = false;
    var turn = 0;

    //    var buttonClicked = true;

    // power on/off




    document.getElementById("power").onclick = function() { powerButton() };
    //   $("#power").on('click', powerButton() {
    function powerButton() {
        var x = document.getElementById("power").classList.contains("change");
        console.log(x);
        if (x == true) {
            console.log('on');
            $('#power').removeClass("change");
            powerOff();
        }
        else {
            console.log('off');
            $('#power').addClass("change");
            powerOn();
        }

        //    function powerButton() {
        //        if (('power').classList.contains("change")){ 
        //            powerOff();
        //            'powerButton'.classList.remove("change");
        //        }
        //        else {
        //            powerOn();
        //            'powerButton'.classList.add("change");
        //        }
    }






    //    $("#power").on('click', function() {
    //        if ($('#power').hasClass('protected')) {
    //            powerOn();
    //        }
    //        else {
    //            powerOff();
    //        }
    //    });
    //    buttonClicked = false;
    //        $("#power").on('click', powerOn);

    //      $("#power").off('click', powerOff());
    //  });

    function powerOn() {
        on = true;
        alert("on");
        $("#count").html('0');
        sequence = [];
        turn = 0;
        userSequence = [];
        cpuSequence = [];
        startSimon();
        //      x = false;
    }

    function powerOff() {
        on = false;
        alert("off");
        $('.colorButton').removeClass('bright'),
            $("#count").html('');
    }

    // press start button to begin
    function startSimon() {
        $("#start").on("click", function() {
            $("#count").html('1');
            //        if (on || success) {
            play();
        });
    }

    // start play function by creating sequence of 20 from start button (from memory game, code insitute, wwschools)

    function play() {
        sequence = [];
        //   var count = 1;
        success = true;
        userSequence = [];
        cpuSequence = [];
        $("#count").html(turn);
        turn = 0;

        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
        }

        console.log(sequence);

        setTimeout(makeBright, 200);

    }

    function makeBright() {
        if (success == true) {
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
            turn++;
            console.log(turn);
            $("#count").html(turn);
            userTurn();

        }
    }

    function userTurn() {

        if (success == true) {

            // user clicking lights (from code insitute module)


            $("#green").mousedown(function() {
                $(this).addClass('bright'); // changes to light green
                userSequence.push(1);
                console.log(userSequence);
                $("#green").mouseup(function() {
                    $(this).removeClass('bright'); //changes back
                    if (userSequence[userSequence.length - 1] == cpuSequence[cpuSequence.length - 1]) {
                        console.log("correct");
                        $("#count").html(turn + 1);
                        success = true;
                        setTimeout(makeBright(), 500);
                    }
                    else {
                        console.log("wrong");
                        success == false;
                        setTimeout(end(), 500);
                    }

                });

            });

            $("#blue").mousedown(function() {
                $(this).addClass('bright'); // changes to light blue
                userSequence.push(2);
                console.log(userSequence);
                $("#blue").mouseup(function() {
                    $(this).removeClass('bright'); //changes 
                    if (userSequence[userSequence.length - 1] == cpuSequence[cpuSequence.length - 1]) {
                        console.log("correct");
                        $("#count").html(turn + 1);
                        success = true;
                        setTimeout(makeBright(), 500);
                    }
                    else {
                        console.log("wrong");
                        success = false;
                        setTimeout(end(), 500);
                    }
                });

            });

            $("#yellow").mousedown(function() {
                userSequence.push(3);
                console.log(userSequence);
                $(this).addClass('bright'); // changes to light yellow

                $("#yellow").mouseup(function() {
                    $(this).removeClass('bright'); //changes back
                    if (userSequence[userSequence.length - 1] == cpuSequence[cpuSequence.length - 1]) {
                        console.log("correct");
                        $("#count").html(turn + 1);
                        success = true;
                        setTimeout(makeBright(), 500);
                    }
                    else {
                        console.log("wrong");
                        success == false;
                        setTimeout(end(), 500);
                    }
                });

            });

            $("#red").mousedown(function() {
                userSequence.push(4);
                console.log(userSequence);
                $(this).addClass('bright'); // changes to light red

                $("#red").mouseup(function() {
                    $(this).removeClass('bright'); //changes back
                    if (userSequence[userSequence.length - 1] == cpuSequence[cpuSequence.length - 1]) {
                        console.log("correct");
                        $("#count").html(turn + 1);
                        success = true;
                        setTimeout(makeBright(), 500);
                    }
                    else {
                        console.log("wrong");
                        success == false;
                        setTimeout(end(), 500);
                    }
                });

            });
        }
        else {
            restart();
        }
    }

    function end() {
        userSequence = [];
        cpuSequence = [];
        sequence = [];
        turn = 0;
        $(".colorButton").addClass('bright');
        $("#count").html('LOST');
        success = false;
        restart();

    }

    function restart() {
        if (success == false) {
            //        setTimeout(
            $("#count").html('0'); //, 3000);
            //      setTimeout(
            $(".colorButton").removeClass('bright'); //, 3000);
        }
    }

});
