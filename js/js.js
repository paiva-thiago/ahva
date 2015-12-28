$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".button").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });
    $("#btLogar").click(function(){
        var sLog = $("#txtLog").val();
        var sPwd = $("#txtPwd").val();
        $.post("http://thiagopaiva.com/ahva/motor/login.php",{"txtLog":sLog,"txtPwd":sPwd}).done(function(json){
            JSON.parse('json', function(k, v) {
              if (k === 'code') { 
                  if (v>0){
                      alert("Erro no login!");
                  }else{
                      alert("Login passou!");
                  }
              } 
            });                           
        });
        return true;
    });

});