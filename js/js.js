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
        var sLog = $("#txtLogin").val();
        var sPwd = $("#txtPwd").val();
         $.ajax({
			type: "POST",
			url: "motor/login.php",
			data: "txtLog="+ sLog +"&txtPwd="+ sPwd,
			success: function(data){
                var json = $.parseJSON(data);
				if(json.code>0){
					alert(json.msg);//alert("Erro no login! \n Cod.:"+json.code+" \n '"+sLog+"'");
				}else{
					window.location.href="ctrl.html";//alert("Login passou!");
                }
			}
		});		
        return true;
    });

});