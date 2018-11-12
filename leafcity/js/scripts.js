$(function () {
  $(window).on('resize', function () {
    $('body').css('height', window.innerHeight);
    $('.slider').height(calcheight($('.slider')));
  });
  $(window).trigger('resize');
  
  $('.slider-nav').slick({
    slidesToShow: 3,
    arrows: false,
    focusOnSelect: true,
    asNavFor: $('.slider')
  });
  
  $('.slider').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: $('.slider-nav')
  });

  $('.slider').height(calcheight($('.slider')));
})

function calcheight() {
  return window.innerHeight - $('.slider-nav').height() - $('.user-tab').height();
  console.log(window.innerHeight, $('.slider-nav').height(), $('.user-tab').height());
}