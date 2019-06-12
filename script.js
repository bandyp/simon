$(document).ready(function() {

    //    var on = false;
    var sequence = [];
    var cpuSequence = [];
    var userSequence = [];
    var win = false;
    var turn = 0;


    //    const startButton = document.getElementById('#start')

    // power on

    $("#power").click(function() {
        $("#count").text("--");
    });


    // press start button to begin

    $("#start").on("click", function() {
        play();
    });

    // start play function 

    function play() {
        //   var count = 1;
        // count.innerHTML = 1;
        //        win = false;
        // userSequence = [];
        // cpuSequence = [];

        //        good = true;

        // sequence of 20 from start button (from memory game, code insitute, wwschools)

        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
        }

        console.log(sequence);

        makeBright();


        //count = turn;

        //console.log(count);
        //count.innerHTML = (turn);
    }

    function makeBright() {
        //   turn = 1;
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
    }


    // user clicking lights (from code insitute module)


    $("#green").mousedown(function() {
        $(this).addClass('bright'); // changes to light green
        userSequence.push(1);
        console.log(userSequence);
        $("#green").mouseup(function() {
            $(this).removeClass('bright'); //changes back
        });
        if (userSequence[0] == cpuSequence[0]) {
            console.log("correct");
            win == true;
            makeBright();
        }
        else {
            console.log("wrong");
            win == false;
        }
    });

    $("#blue").mousedown(function() {
        $(this).addClass('bright'); // changes to light blue
        userSequence.push(2);
        console.log(userSequence);
        $("#blue").mouseup(function() {
            $(this).removeClass('bright'); //changes back
        });
       if (userSequence[0] == cpuSequence[0]) {
            console.log("correct");
            win == true;
            makeBright();
        }
        else {
            console.log("wrong");
            win == false;
        }
    });

    $("#yellow").mousedown(function() {
        userSequence.push(3);
        console.log(userSequence);
        $(this).addClass('bright'); // changes to light yellow

        $("#yellow").mouseup(function() {
            $(this).removeClass('bright'); //changes back
        });
       if (userSequence[0] == cpuSequence[0]) {
            console.log("correct");
            win == true;
            makeBright();
        }
        else {
            console.log("wrong");
            win == false;
        }
    });

    $("#red").mousedown(function() {
        userSequence.push(4);
        console.log(userSequence);
        $(this).addClass('bright'); // changes to light red

        $("#red").mouseup(function() {
            $(this).removeClass('bright'); //changes back
        });
        if (userSequence[0] == cpuSequence[0]) {
            console.log("correct");
            win == true;
            makeBright();
        }
        else {
            console.log("wrong");
            win == false;
        }
    });

//if (win == true) {
//    makeBright();
//} else {
//    play();
//}


});
