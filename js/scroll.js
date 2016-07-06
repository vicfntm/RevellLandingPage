$(document).ready(function() {
     $(window).scroll(function() {
         if($(this).scrollTop() != 0) {
             $('#goToUp').fadeIn();
         } else {
             $('#goToUp').fadeOut();
         }
     });
     $('#goToUp').click(function () {
         $('body,html').animate({scrollTop:0},800);
     });
 });
 