$(document).ready(function() {

  $("form#blanks").submit(function(event) {
    $("form").hide();

    var items = ["first", "second", "third"];

    items.forEach(function(item) {
      var userInput = $("#" + item).val().toUpperCase();
      $("." + item).text(userInput);

    });

    event.preventDefault();
  });



});






// var firstInput = $("input#first").val().toUpperCase();
//
// $("#First").text(firstInput)
