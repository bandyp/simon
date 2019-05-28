$(document).ready(function() {


    // power on

    $("#power").click(function() {
        $("#count").text("--");
    });


    // sequence of 20 from start button (from memory game, code insitute, wwschools)

    var sequence = [];

    $("#start").on("click", function() {
        sequence = [];
        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
        }
        console.log(sequence);
        $('#count').text(sequence);
        computerColor();
    });

    // computer sequence and color


    var userSequence = [];
    var lightID = [];
    var light;
    var x;

    function computerColor() {

        x = setInterval(function() {
            if (sequence == 1) {
                light = 'lightGreen';
                $('#green').addClass(light);
                lightID.push(1);
                setTimeout(function() {
                    $('#green').removeClass(light);
                }, 200);
            }
            
            else if (sequence == 2) {
                light = 'lightBlue';
                $('#blue').addclass(light);
                lightID.push(2);
                setTimeout(function() {
                    $('#green').removeClass(light);
                }, 200);
            }
            
            else if (sequence == 3) {
                light = 'lightYellow';
                $('#yellow').addClass(light);
                lightID.push(3);
                setTimeout(function() {
                    $('#green').removeClass(light);
                }, 200);
            }
            
            else {
                light = 'lightRed';
                $('#red').addClass(light);
                lightID.push(4);
                setTimeout(function() {
                    $('#green').removeClass(light);
                }, 200);
            }
            
        }, 800);
        console.log(lightID);
    }


    // user clicking lights (from code insitute module)

    $("#green").mousedown(function() {
        userSequence = [1];
        $(this).removeClass('greenButton').addClass('lightGreen'); // changes to light green
        console.log(userSequence);
        $("#green").mouseup(function() {
            $(this).removeClass('lightGreen').addClass('greenButton') //changes back
        });
    });

    $("#blue").mousedown(function() {
        userSequence = [2];
        $(this).removeClass('blueButton').addClass('lightBlue'); // changes to light blue
        console.log(userSequence);
        $("#blue").mouseup(function() {
            $(this).removeClass('lightBlue').addClass('blueButton') //changes back
        });
    });

    $("#yellow").mousedown(function() {
        userSequence = [3];
        $(this).removeClass('yellowButton').addClass('lightYellow'); // changes to light yellow
        console.log(userSequence);
        $("#yellow").mouseup(function() {
            $(this).removeClass('lightYellow').addClass('yellowButton') //changes back
        });
    });

    $("#red").mousedown(function() {
        userSequence = [4];
        $(this).removeClass('redButton').addClass('lightRed'); // changes to light red
        console.log(userSequence);
        $("#red").mouseup(function() {
            $(this).removeClass('lightRed').addClass('redButton') //changes back
        });
    });
});
