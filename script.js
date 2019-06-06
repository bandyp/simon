$(document).ready(function() {

//    var on = false;
    var sequence = [];
    var cpuSequence = [];
    var userSequence = [];
//    var win;
    var turn = 0;
    var count = 0;

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

        count.innerHTML = 1;
//        win = false;
        userSequence = [];
//        good = true;

        // sequence of 20 from start button (from memory game, code insitute, wwschools)

        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
        }
        console.log(sequence);
        cpuSequence == sequence[0];
        turn = 1;
        makeBright();
        turn++;
        count = turn;
        console.log(turn);
        console.log(count);
        count.innerHTML = (turn);
    }

    function makeBright() {
        if (sequence[turn] == 1)
            $('#green').addClass('bright'),
            setTimeout(function() {
                $('#green').removeClass('bright');
                }, 800);
        else if (sequence[turn] == 2)
            $('#blue').addClass('bright'),
            setTimeout(function() {
                $('#blue').removeClass('bright');
                }, 800);
        else if (sequence[turn] == 3)
            $('#yellow').addClass('bright'),
            setTimeout(function() {
                $('#yellow').removeClass('bright');
                }, 800);
        else if (sequence[turn] == 4)
            $('#red').addClass('bright'),
            setTimeout(function() {
                $('#red').removeClass('bright');
                }, 800);
    
        
    }



//    function makeDark() {
//        if (sequence[turn] == 1)
//            $('#green').removeClass('colorButton');
//            cpuSequence.push.sequence[turn];
//        else if (sequence[turn] == 2)
//            $('#blue').removeClass('colorButton');
//        else if (sequence[turn] == 3)
//            $('#yellow').removeClass('colorButton');
//        else if (sequence[turn] == 4)
//            $('#red').removeClass('colorButton');
//    }
//        $(this).removeClass('colorButton');
//    }

// user clicking lights (from code insitute module)


    $("#green").mousedown(function() {
        $(this).addClass('bright'); // changes to light green
        userSequence.push(1);
        $("#green").mouseup(function() {
            $(this).removeClass('bright'); //changes back
        });
    });

    $("#blue").mousedown(function() {
        $(this).addClass('bright'); // changes to light blue
        userSequence.push(2);
        $("#blue").mouseup(function() {
            $(this).removeClass('bright'); //changes back
        });
    });

    $("#yellow").mousedown(function() {
        userSequence.push(3);
        $(this).addClass('bright'); // changes to light yellow

        $("#yellow").mouseup(function() {
            $(this).removeClass('bright'); //changes back
        });
    });

    $("#red").mousedown(function() {
        userSequence.push(4);
        $(this).addClass('bright'); // changes to light red

        $("#red").mouseup(function() {
            $(this).removeClass('bright'); //changes back
        });
    });
    console.log(userSequence);

});
