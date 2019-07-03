{"changed":true,"filter":false,"title":"script.js","tooltip":"/assets/js/script.js","value":"$(document).ready(function() {\n    \n    // My shopping list of variables\n\n    let sequence = [];\n    let userSequence = [];\n    let success;\n    let turn;\n    let cpuTurn;\n    let playerTurn;\n    let bright;\n    let playSequence;\n    let win;\n    let highScore = 0;\n\n// high score = code borrowed from Mentor\n\n    function checkHighScore() {\n        if (highScore < bright) {\n            highScore = bright;\n            $(\"#highScoreBox\").html(highScore - 1);\n        }\n    }\n\n    // Help Alert box\n\n    $(\"#helpBox\").hide();\n    $(\"#helpButton\").mouseover(function() {\n        $(\"#helpBox\").show();\n        $(\"#helpButton\").mouseleave(function() {\n            $(\"#helpBox\").hide();\n        });\n    });\n\n    // power on/off\n\n    document.getElementById(\"power\").onclick = function() { powerButton() };\n\n    function powerButton() {\n        var x = document.getElementById(\"power\").classList.contains(\"change\");\n        if (x == false) {\n            $('#power').addClass(\"change\");\n            powerOn();\n        }\n        else {\n            $('#power').removeClass(\"change\");\n            powerOff();\n        }\n    }\n\n    function powerOn() {\n        playerTurn = true;\n        cpuTurn = true;\n        success = false;\n        playerTurn = false;\n        /*       sequence = [];\n               userSequence = [];*/\n        $(\"#count\").html('--');\n        document.getElementById(\"start\").disabled = false;\n    }\n\n    $(\"#start\").on(\"click\", function() {\n        $(\"#count\").html('1');\n        if (playerTurn || cpuTurn || success) {\n            play();\n        }\n    });\n\n\n    function powerOff() {\n        playerTurn = false;\n        cpuTurn = false;\n        sequence = [];\n        userSequence = [];\n        $('.colorButton').removeClass('bright'),\n            $(\"#count\").html('');\n        clearInterval(playSequence);\n        document.getElementById(\"start\").disabled = true;\n    }\n\n    // start play function by creating sequence of 20 from start button (from memory game, code insitute, wwschools)\n\n    function play() {\n        playSequence = 0;\n        sequence = [];\n        userSequence = [];\n        bright = 0;\n        turn = 1;\n        success = true;\n        win = false;\n        $(\"#count\").html('1');\n        for (var i = 0; i < 20; i++) {\n            sequence.push(Math.floor(Math.random() * 4) + 1);\n        }\n\n        cpuTurn = true;\n        playSequence = setInterval(makeBright, 1000);\n    }\n\n    // function which allows cpu to select color and sound\n\n    function makeBright() {\n        playerTurn = false;\n        if (bright == turn) {\n            clearInterval(playSequence);\n            cpuTurn = false;\n            playerTurn = true;\n        }\n\n        if (cpuTurn) {\n            document.getElementById(\"start\").disabled = true;\n            $('.colorButton').removeClass('bright');\n            setTimeout(function() {\n                if (sequence[bright] == 1) {\n                    $('#soundGreen')[0].play();\n                    $('#green').addClass('bright'),\n                        setTimeout(function() {\n                            $('#green').removeClass('bright');\n                        }, 1500);\n                }\n                if (sequence[bright] == 2) {\n                    $('#soundBlue')[0].play();\n                    $('#blue').addClass('bright'),\n                        setTimeout(function() {\n                            $('#blue').removeClass('bright');\n                        }, 1500);\n                }\n                if (sequence[bright] == 3) {\n                    $('#soundYellow')[0].play();\n                    $('#yellow').addClass('bright'),\n                        setTimeout(function() {\n                            $('#yellow').removeClass('bright');\n                        }, 1500);\n                }\n                if (sequence[bright] == 4) {\n                    $('#soundRed')[0].play();\n                    $('#red').addClass('bright'),\n                        setTimeout(function() {\n                            $('#red').removeClass('bright');\n                        }, 1500);\n                }\n                bright++;\n            }, 200);\n        }\n    }\n\n    // user clicking lights (from code insitute module)\n\n    $(\"#green\").on(\"mousedown touchstart\", function(e) {\n        e.preventDefault();\n        if (playerTurn) {\n            $(this).addClass('bright'); // changes to light green\n            $('#soundGreen')[0].play();\n            userSequence.push(1);\n            $(\"#green\").on(\"mouseup touchend\", function(e) {\n                e.preventDefault();\n                $(this).removeClass('bright'); //changes back\n                compareArrays();\n\n            });\n        }\n    });\n\n    $(\"#blue\").on(\"mousedown touchstart\", function(e) {\n        e.preventDefault();\n        if (playerTurn) {\n            userSequence.push(2);\n            $('#soundBlue')[0].play();\n            $(this).addClass('bright'); // changes to light blue\n            $(\"#blue\").on(\"mouseup touchend\", function(e) {\n                e.preventDefault();\n                $(this).removeClass('bright'); //changes \n                compareArrays();\n            });\n        }\n    });\n\n    $(\"#yellow\").on(\"mousedown touchstart\", function(e) {\n        e.preventDefault();\n        if (playerTurn) {\n            userSequence.push(3);\n            $('#soundYellow')[0].play();\n\n            $(this).addClass('bright'); // changes to light yellow\n            $(\"#yellow\").on(\"mouseup touchend\", function(e) {\n                e.preventDefault();\n                $(this).removeClass('bright'); //changes back\n                compareArrays();\n            });\n        }\n    });\n\n    $(\"#red\").on(\"mousedown touchstart\", function(e) {\n        e.preventDefault();\n        if (playerTurn) {\n            userSequence.push(4);\n            $('#soundRed')[0].play();\n\n            $(this).addClass('bright'); // changes to light red\n            $(\"#red\").on(\"mouseup touchend\", function(e) {\n                e.preventDefault();\n                $(this).removeClass('bright'); //changes back\n                compareArrays();\n            });\n        }\n    });\n\n    // checks that user has clicked the correct color in the sequence \n\n\n    function compareArrays() {\n\n        if (userSequence[userSequence.length - 1] !== sequence[userSequence.length - 1]) success = false;\n        if (userSequence.length == 20 && success == true) {\n            checkHighScore();\n            winner();\n        }\n        if (success == false) {\n            checkHighScore();\n            sequence = [];\n            end();\n        }\n\n        if (turn == userSequence.length && success && !win) {\n            turn++;\n            userSequence = [];\n            cpuTurn = true;\n            bright = 0;\n            $(\"#count\").html(turn);\n            playSequence = setInterval(makeBright, 1000);\n        }\n\n    }\n\n    // wine, lose, high score and restart functiond\n\n    function end() {\n\n        $(\".colorButton\").addClass('bright');\n        $(\"#count\").html('LOSE');\n        playerTurn = false;\n        win = false;\n        setTimeout(restart, 3000);\n    }\n\n    function restart() {\n        powerOn();\n        sequence = [];\n        $(\"#count\").html('--');\n        playerTurn = false;\n        $(\".colorButton\").removeClass('bright');\n    }\n\n    function winner() {\n        $(\".colorButton\").addClass('bright');\n        $(\"#count\").html('WIN!');\n        checkHighScore();\n        win = true;\n        setTimeout(restart, 3000);\n    }\n\n\n\n\n});\n","undoManager":{"mark":4,"position":28,"stack":[[{"start":{"row":258,"column":0},"end":{"row":259,"column":0},"action":"remove","lines":["",""],"id":8}],[{"start":{"row":257,"column":0},"end":{"row":258,"column":0},"action":"remove","lines":["",""],"id":9},{"start":{"row":256,"column":0},"end":{"row":257,"column":0},"action":"remove","lines":["",""]},{"start":{"row":255,"column":5},"end":{"row":256,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":230,"column":10},"end":{"row":230,"column":11},"action":"remove","lines":["e"],"id":10}],[{"start":{"row":230,"column":49},"end":{"row":230,"column":50},"action":"remove","lines":["d"],"id":11}],[{"start":{"row":230,"column":49},"end":{"row":230,"column":50},"action":"insert","lines":["s"],"id":12}],[{"start":{"row":0,"column":30},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"insert","lines":["    "]},{"start":{"row":1,"column":4},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["/"],"id":14},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":[" "],"id":15},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["M"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["y"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":[" "],"id":16},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["s"]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["h"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["o"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["p"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["p"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["i"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["n"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["g"]}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":[" "],"id":17},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["l"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["i"]},{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["s"]},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":[" "],"id":18},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["o"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["f"]}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":[" "],"id":19},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["v"]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["a"]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["i"],"id":20},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["a"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["b"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["k"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["l"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["e"]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"remove","lines":["s"],"id":21},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"remove","lines":["e"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"remove","lines":["l"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"remove","lines":["k"]}],[{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["l"],"id":22},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["e"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["/"],"id":24},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":[" "],"id":25}],[{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["h"],"id":26},{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"insert","lines":["i"]},{"start":{"row":15,"column":5},"end":{"row":15,"column":6},"action":"insert","lines":["g"]},{"start":{"row":15,"column":6},"end":{"row":15,"column":7},"action":"insert","lines":["h"]}],[{"start":{"row":15,"column":7},"end":{"row":15,"column":8},"action":"insert","lines":[" "],"id":27},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"insert","lines":["s"]},{"start":{"row":15,"column":9},"end":{"row":15,"column":10},"action":"insert","lines":["c"]},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["o"]},{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["r"]},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":[" "],"id":28},{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["="]}],[{"start":{"row":15,"column":15},"end":{"row":15,"column":16},"action":"insert","lines":[" "],"id":29}],[{"start":{"row":15,"column":16},"end":{"row":15,"column":17},"action":"insert","lines":["c"],"id":30},{"start":{"row":15,"column":17},"end":{"row":15,"column":18},"action":"insert","lines":["o"]},{"start":{"row":15,"column":18},"end":{"row":15,"column":19},"action":"insert","lines":["d"]},{"start":{"row":15,"column":19},"end":{"row":15,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":15,"column":20},"end":{"row":15,"column":21},"action":"insert","lines":[" "],"id":31}],[{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["b"],"id":32},{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":["o"]},{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"insert","lines":["r"]},{"start":{"row":15,"column":24},"end":{"row":15,"column":25},"action":"insert","lines":["r"]},{"start":{"row":15,"column":25},"end":{"row":15,"column":26},"action":"insert","lines":["o"]},{"start":{"row":15,"column":26},"end":{"row":15,"column":27},"action":"insert","lines":["w"]}],[{"start":{"row":15,"column":27},"end":{"row":15,"column":28},"action":"insert","lines":["e"],"id":33},{"start":{"row":15,"column":28},"end":{"row":15,"column":29},"action":"insert","lines":["d"]}],[{"start":{"row":15,"column":29},"end":{"row":15,"column":30},"action":"insert","lines":[" "],"id":34},{"start":{"row":15,"column":30},"end":{"row":15,"column":31},"action":"insert","lines":["f"]},{"start":{"row":15,"column":31},"end":{"row":15,"column":32},"action":"insert","lines":["r"]},{"start":{"row":15,"column":32},"end":{"row":15,"column":33},"action":"insert","lines":["o"]},{"start":{"row":15,"column":33},"end":{"row":15,"column":34},"action":"insert","lines":["m"]}],[{"start":{"row":15,"column":34},"end":{"row":15,"column":35},"action":"insert","lines":[" "],"id":35},{"start":{"row":15,"column":35},"end":{"row":15,"column":36},"action":"insert","lines":["M"]},{"start":{"row":15,"column":36},"end":{"row":15,"column":37},"action":"insert","lines":["e"]},{"start":{"row":15,"column":37},"end":{"row":15,"column":38},"action":"insert","lines":["n"]},{"start":{"row":15,"column":38},"end":{"row":15,"column":39},"action":"insert","lines":["t"]},{"start":{"row":15,"column":39},"end":{"row":15,"column":40},"action":"insert","lines":["o"]}],[{"start":{"row":15,"column":40},"end":{"row":15,"column":41},"action":"insert","lines":["r"],"id":36}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":4},"end":{"row":21,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1562101518996}