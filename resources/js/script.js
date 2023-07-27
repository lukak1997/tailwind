$(document).ready(function(){
    var waypoint = new Waypoint({
        element: document.querySelector('.section-features'),
        handler: function(direction) {
          if(direction == "down"){
              $('nav').addClass('stick');
          }else{
              $('nav').removeClass('stick');
          }
        },
        offset: 60
      });
  /* scrol on buttons */
$('.js--scroll-to-plan').click(function(){
  $('html, body').animate({scrollTop: $('.section-plans').offset().top - 50}, 1000);
});

$('.js--scroll-to-start').click(function(){
  $('html, body').animate({scrollTop: $('.section-features').offset().top - 50}, 1000);
});  

 /* Mobile nav */
 $('.js--nav--icon').click(function(){
  var nav = $('.main-nav');
  var icon = document.querySelector('.mobile-nav-icon-btn');

  nav.slideToggle(200);

  if (icon.name == 'menu-outline') {
    icon.name = 'close-outline';
  }else{
    icon.name = 'menu-outline';
  }

});  
});

