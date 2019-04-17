$(document).ready(function(){

  Date {
    day: "",
    month: ""
  };

  var today = new Date();

  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  //January is "0"!

  var yyyy = today.getFullYear();

  displayToday = mm + '/' + dd + '/' + yyyy;
  $("#todaysdate").text(displayToday);

});
