$(document).ready(function(){

  var today = new Date();

  var day = String(today.getDate()).padStart(2, '0');
  var month = String(today.getMonth() + 1).padStart(2, '0');

  var year = today.getFullYear();

  displayToday = month + '/' + day + '/' + year;
  $("#todaysdate").text(displayToday);

});

$(document).ready(function(){
  $(".card").flip({
    axis: 'y',
    trigger: 'hover',
    speed: 	"10"

  });
});
