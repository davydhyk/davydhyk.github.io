$(function () {
  $('.htl-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="htl-arrow left"><span class="fa fa-chevron-left"></span></div>',
    nextArrow: '<div class="htl-arrow right"><span class="fa fa-chevron-right"></span></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      },
    ]
  });

  $(window).scroll(() => {
    if (!$('.filter-block').hasClass('active') && $(window).scrollTop() >= $('.filter-block').offset().top && window.innerWidth >= 768) {
      $('.filter-block').addClass('active');
      $('.filter-block').height($('.filter-block .container').height());
    } else if ($('.filter-block').hasClass('active') && $(window).scrollTop() < $('.filter-block').offset().top || window.innerWidth < 768) {
      $('.filter-block').removeClass('active');
      $('.filter-block').height('auto');
    }
  });

  $('.htl-rev-tabs').tabulous();

  $('.htl-map-line span').click(function() {
    $(this).toggleClass('active');
    $('.htl-map-wrap').slideToggle();
  });

  $('.htl-slider-item img').click(function () {
    $('.htl-img img').attr('src', $(this).attr('src'));
  });

  $('.htl-price a').click(function(e) {
    e.preventDefault();
    $('.cld-price').slideDown();
    $('body, html').animate({
      scrollTop: $('.cld-price').offset().top - $('.filter-block.sticky').height() - 40
    }, 500);
    if ($('.cld-chart > div').width() < $('.container').width()) $(window).trigger('resize');
  })
})