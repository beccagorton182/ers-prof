  function myFunction() {
    var x = document.getElementById("service-details-four");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction() {
    var x = document.getElementById("service-details-five");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  $('.service-details-link').click(function() {
    var target = $(this).attr('data-target');
 
    if($('#' + target).css('display') == "none")
    {
        $('#' + target).css('display', 'block');
    } else {
        $('#' + target).css('display', 'none');
    }
});