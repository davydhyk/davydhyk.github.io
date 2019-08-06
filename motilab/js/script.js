$(function () {
  $('[data-modal]').click(function () {
    $('.modal-wrap').toggleClass('active');
    if ($(window).width() > 1024) $('body').css('padding-right', '17px').css('overflow', 'hidden');
  });

  $('.modal-overlay').click(function () {
    $('.modal-wrap').toggleClass('active');
    $('body').css('padding-right', '0').css('overflow', 'auto');
  });

  $('<span class="close">x</span>').prependTo('nav');

  $('.menu-mob, nav .close').click(function () {
    $('nav').toggleClass('active');
  });
});