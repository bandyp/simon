$(document).ready(function() {


// power on

    $("#power").click(function() {
        $("#count").text("--");
    });


// sequence of 20 from start button (from memory game, code insitute, wwschools)

    let sequence = [];

    document.getElementById("start").addEventListener("click", computerSequence);

    function computerSequence() {
        sequence = [];
        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
        }
        console.log(sequence);
    }
    

// computer sequence and color


var userSequence = [];
var lightID = [];
var y = 0;
var count = 1;
var light;
var x;

function computerColor() {
    
x = setInterval(function() {
    if (sequence == 1) {
        light = 'lightGreen';
        $('#green').addClass(light);
        
    } else if (sequence == 2) {
        light = 'lightBlue';
        $('#blue').addclass(light);
        
    } else if (sequence == 3) {
        light = "lightYellow";
        $('#yellow').addClass(light);
   
    } else {
        light = "lightRed"; 
        $('#red').addClass(light);
    }
    }, 1000);
}

// user clicking lights from code insitute module

    $("#green").mousedown(function() {
        $(this).removeClass('greenButton').addClass('lightGreen'); // changes to light green
        console.log('0');
        $("#green").mouseup(function() {
            $(this).removeClass('lightGreen').addClass('greenButton') //changes back
        });
    });

    $("#blue").mousedown(function() {
        $(this).removeClass('blueButton').addClass('lightBlue'); // changes to light blue
        console.log('1');
        $("#blue").mouseup(function() {
            $(this).removeClass('lightBlue').addClass('blueButton') //changes back
        });
    });

    $("#yellow").mousedown(function() {
        $(this).removeClass('yellowButton').addClass('lightYellow'); // changes to light yellow
        console.log('2');
        $("#yellow").mouseup(function() {
            $(this).removeClass('lightYellow').addClass('yellowButton') //changes back
        });
    });

    $("#red").mousedown(function() {
        $(this).removeClass('redButton').addClass('lightRed'); // changes to light red
        console.log('3');
        $("#red").mouseup(function() {
            $(this).removeClass('lightRed').addClass('redButton') //changes back
        });
    });
});