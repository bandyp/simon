// sequence of 20

$(".start").click(function() {
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) * 1);
    }
    console.log(order);
});


// user clicking lights 

$(document).ready(function() {
$("#green").mousedown(function(){
  $(this).removeClass('greenButton');
  $(this).addClass('lightGreen'); // changes to light green
  console.log('1');
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
  console.log('2');
  $("#blue").mouseup(function(){
      $(this).removeClass('lightBlue'); 
      $(this).addClass('blueButton')//changes back
  });
});
});

$(document).ready(function() {
$("#yellow").mousedown(function(){
  $(this).removeClass('yellowButton');
  $(this).addClass('lightYellow'); // changes to light yellow
  console.log('3');
  $("#yellow").mouseup(function(){
      $(this).removeClass('lightYellow'); 
      $(this).addClass('yellowButton')//changes back
  });
});
});

$(document).ready(function() {
$("#red").mousedown(function(){
  $(this).removeClass('redButton');
  $(this).addClass('lightRed'); // changes to light red
  console.log('4');
  $("#red").mouseup(function(){
      $(this).removeClass('lightRed'); 
      $(this).addClass('redButton')//changes back
  });
});
});



