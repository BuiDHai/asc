$(function() {
  var replaceWidth = 767;
  function resize_mCustomScrollbar() {
    var windowWidth = parseInt($(window).width());

    if(windowWidth > replaceWidth) {
      $(".mCustomScrollPrimary").mCustomScrollbar();
    }
  }
  resize_mCustomScrollbar();

  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      resize_mCustomScrollbar();
    }, 200);
  });
});

function toggleClass(elem, className) {
  $(elem).click(function() {
    $(this).toggleClass(className);
  });
}

function scrollToTop() {
	$(document).on('click touchstart', '.page-to-top', function() {
    setTimeout(function() {
      $('html, body').stop(true, false).animate({scrollTop:0}, 500);
    },100)
  });
}

scrollToTop();

$( document ).ready(function() {
  $('.navbar .navbar-toggle').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('open');
    $('body').toggleClass('body-hidden');
  });
  $('.navbar .navbar-nav li.close-nav .btn-close-nav').click(function(e) {
    e.preventDefault();
    $('header .navbar .navbar-nav').slideToggle();
    $('.navbar .navbar-toggle').removeClass('open');
    $('body').removeClass('body-hidden');
  })

  $('.news-content .show-more .btn-show-more').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parents('.news-content').find('.list-news').toggleClass('news-show-more');
  });

  // wow
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    mobile: true,
    live: true, 
  });
  wow.init();
});