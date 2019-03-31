$(document).ready(function() {

    // $('#js--features-section').waypoint(function(direction) {
    //     if (direction == "down") {
    //         $().addClass('sticky');
    //     } else {
    //         $("nav").removeClass('sticky');
    //     }
    // });



// scroll on buttons

$('.js--scroll-to-plans').click(function(){
  $('html, body').animate({scrollTop: $('.js--plans-section').offset().top}, 1000);


});

$('.js--scroll-to-start').click(function(){
  $('html, body').animate({scrollTop: $('.js--features-section').offset().top}, 1000);


});


// smooth scrolling


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        target.focus(); // Setting focus
        if (target.is(":focus")){ // Checking if the target was focused
          return false;
        } else {
          target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        }
        return false;
      }
    }
  });
});

// Fade in animation

$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '50%'
});


$('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '50%'
});


$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeInLeft slow');
}, {
    offset: '70%'

});


$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
}, {
    offset: '50%'
});

// mob nav

$('.js--nav-icon').click(function() {

  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');

  nav.slideToggle(200);


  // logo change (not working)

//   if (icon.hasClass('.fa-align-justify')) {
//         icon.addClass('.fa-times');
//         icon.removeClass('.fa-align-justify');
//   } else {
//     icon.addClass('.fa-align-justify');
//     icon.removeClass('.fa-times');
//   }
//   $(".mobile-nav-icon i").click(function(){
//     $("js--nav-icon i").removeClass("fa-align-justify").addClass('fa-times');
//   });
//   $(".js--main-nav").click(function(){
//     $(".js--nav-icon i").removeClass(".fa-align-justify");
//   });
//
//
// });

});

// $("button").click(function(){
//    $("p:last").removeClass("intro").addClass("main");
 });
