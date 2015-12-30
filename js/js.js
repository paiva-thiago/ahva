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
         $.ajax({
			type: "POST",
			url: "motor/login.php",
			data: "txtLog="+ sLog +"&txtPwd="+ sPwd,
			success: function(data){
				var json = $.parseJSON(data);
				if(json.code>0){
					alert("Erro no login!");
				}else{
					alert("Login passou!");
                }
			}
		});		
        return true;
    });

});