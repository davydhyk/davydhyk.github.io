$(function() {

	// Custom JS
  $('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-resp ul').toggleClass('open');
    if ($('.menu-resp ul').hasClass('open')) {
      if (screen.width <= '577') {
        $('.menu-resp ul').width(screen.width - 40);
        $('.menu-resp ul').css('right', -15);
      }
      $('.menu-resp ul').slideDown();
    } else {
      $('.menu-resp ul').slideUp();
    }
  });
  
  $('.tabs').tabulous();
  
  $('.input select').niceSelect();
  
  /*$('.arrow').click(function () {
    $(this).parent('.quest').toggleClass('active');
    if ($(this).parent('.quest').hasClass('active')) {
      $(this).children('span').removeClass('fa-angle-down').addClass('fa-angle-up');
      $(this).parent('.quest').next().slideDown('fast');
    } else {
      $(this).children('span').removeClass('fa-angle-up').addClass('fa-angle-down');
      $(this).parent('.quest').next().slideUp('fast');
    }
  });
  */
  
  $('.slider').slick({
    prevArrow: $('.control-left span'),
    nextArrow: $('.control-right span'),
    slidesToShow: 2,
    responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
  
});
