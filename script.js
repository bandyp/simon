const segments = document.querySelectorAll('.colorButton');

// user clicking lights 

$(document).ready(function() {
$("#green").mousedown(function(){
  $(this).removeClass('greenButton');
  $(this).addClass('lightGreen'); // changes to light green
  $("#green").mouseup(function(){
      $(this).removeClass('lightGreen'); 
      $(this).addClass('greenButton')//changes back
  });
});
});

$(document).ready(function() {
$("#blue").mousedown(function(){
  $(this).removeClass('blueButton');
  $(this).addClass('lightBlue'); // changes to light blue
  $("#blue").mouseup(function(){
      $(this).removeClass('lightBlue'); 
      $(this).addClass('blueButton')//changes back
  });
});
});

$(document).ready(function() {
$("#yellow").mousedown(function(){
  $(this).removeClass('yellowButton');
  $(this).addClass('lightYellow'); // changes to light green
  $("#yellow").mouseup(function(){
      $(this).removeClass('lightYellow'); 
      $(this).addClass('yellowButton')//changes back
  });
});
});

$(document).ready(function() {
$("#red").mousedown(function(){
  $(this).removeClass('redButton');
  $(this).addClass('lightRed'); // changes to light green
  $("#red").mouseup(function(){
      $(this).removeClass('lightRed'); 
      $(this).addClass('redButton')//changes back
  });
});
});


// sequence of 20

function flashSequence() {
    for (var i = 0; i < 20; i++) {

    }
}
