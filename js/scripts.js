$(document).ready(function() {
  $(".info").submit(function(event) {
    var customer = $("input#name1").val();
    var location = $("input#address1").val();
    console.log(customer);
    console.log(location);
    $(".name1").text(customer);
    $(".address1").text(location);
    $("#receipt").show();

    event.preventDefault();
  });
});
