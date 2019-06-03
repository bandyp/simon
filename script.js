$(document).ready(function() {

var on = false;

    // power on

    $("#power").click(function() {
        $("#count").text("--");
    });


// press start button to begin

    $("#start").on("click", function() {
        play();
    });

// start play function 
     
     sequence = [];
        
    function play() {    
        
        count.innerHTML = 1;
        win = false;
        userSequence = [];
        good = true;
        
   // sequence of 20 from start button (from memory game, code insitute, wwschools)
   
        for (var i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 4) + 1);
        }
        console.log(sequence);
        computerColor();
    }

    // computer sequence and color


    var userSequence = [];
    var lightID = [];
    var light;
    var x = 0;

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
        userSequence.push[1];
        $(this).addClass('bright'); // changes to light green
        
        $("#green").mouseup(function() {
            $(this).removeClass('bright') //changes back
        });
    });

    $("#blue").mousedown(function() {
        userSequence.push[2];
        $(this).addClass('bright'); // changes to light blue
        
        $("#blue").mouseup(function() {
            $(this).removeClass('bright')//changes back
        });
    });

    $("#yellow").mousedown(function() {
        userSequence.push[3];
        $(this).addClass('bright'); // changes to light yellow
        
        $("#yellow").mouseup(function() {
            $(this).removeClass('bright') //changes back
        });
    });

    $("#red").mousedown(function() {
        userSequence.push[4];
        $(this).addClass('bright'); // changes to light red
        
        $("#red").mouseup(function() {
            $(this).removeClass('bright') //changes back
        });
    });
    console.log(userSequence);
});
