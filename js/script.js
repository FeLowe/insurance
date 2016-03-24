$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();



    if (age){
      var quote = (100 - age) * 3;
      if (gender === 'male' || age < 26) {
     quote += 50;
     else (gender === 'female' || age < 26) {
    quote += 20;

    }

    $("#rate").empty().append(quote);
    $("#quote").show();
  } else if{
    alert('Please enter your age.');
  }
    event.preventDefault();
  });
});
