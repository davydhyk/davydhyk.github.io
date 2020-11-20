$(function () {
  $('.prod-list').slick({
    dots: true,
    fade: true,
    appendArrows: '.prod-controls',
    appendDots: '.prod-controls-dots',
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    customPaging: function(i)  {return '';}
  });
  $('.project-structure-images').slick({
    dots: true,
    fade: true,
    appendArrows: '.project-structure-controls',
    appendDots: '.project-structure-dots',
    prevArrow: '<div class="prev big"></div>',
    nextArrow: '<div class="next big"></div>',
    customPaging: function(i)  {return '';}
  });
  $('.other-list').slick({
    dots: true,
    fade: true,
    appendArrows: '.other-controls',
    appendDots: '.other-dots',
    prevArrow: '<div class="prev big"></div>',
    nextArrow: '<div class="next big"></div>',
    customPaging: function(i)  {return '';}
  });
  $('.qa-question').click(function () {
    $(this).toggleClass('active').next().slideToggle(300);
  });
  //menu
  $('.menu-control').click(function () {
    $(this).next().slideToggle(200);
    $('.header').toggleClass('opened');
    setTimeout(fixPageWithMenu, 200)
  });
  function fixPageWithMenu() {
    if ($('.header').hasClass('opened')) {
      if ($('.menu-mob').offset().top + $('.menu-mob').outerHeight() > window.innerHeight) {
        $('body').addClass('opened');
      } else {
        $('body, html').animate({scrollTop: 0}, 200);
        $('body').addClass('overhide');
      }
    } else {
      $('body').removeClass('overhide').removeClass('opened');
    }
  }
  //menu
})