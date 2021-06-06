let wpc_toggle_button = document.querySelector('.wpc-toggle-button');
let wpc_header = document.querySelector('.wpc-header-area');

wpc_toggle_button.onclick = function(e){
  wpc_header.classList.toggle('wpc-collapse');
}

// Smooth Scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 3000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


$(document).ready(function(){
    $(".wpc-scroll-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 3000);
        return false;
    });
});
