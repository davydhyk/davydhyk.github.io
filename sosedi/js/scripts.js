(function () {
  var homeBgs = [];
  $('.home-names').on('init', function(event, slick){
    var slide = slick.currentSlide + 1;
    $('.home-counter span:first-child').text('0' + slide);
    $('.home-counter span:last-child').text('0' + slick.$slides.length);
    $('.home-link a').attr('href', $(slick.$slides[slide]).data('link'));
    $('.home-bgs :nth-child(' + slide + ')').addClass('active');
    $('.home-text :nth-child(' + slide + ')').addClass('active');
    for(var i=1;i<=slick.$slides.length;i++)
      homeBgs.push($('.home-bgs :nth-child(' + i + ')').attr('style'))
    setTimeout(() => {$('.home-bgs').addClass('trs');}, 0);
  }).slick({
    variableWidth: true,
    infinite: false,
    prevArrow: $('.home-ctrl :nth-child(1)'),
    nextArrow: $('.home-ctrl :nth-child(2)'),
    focusOnSelect: true,
    speed: 1000
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    if (currentSlide == nextSlide) return;
    currentSlide++; nextSlide++;
    var curSlide = $('.home-names-item:nth-child(' + currentSlide + ')');
    var nxtSlide = $('.home-names-item:nth-child(' + nextSlide + ')');
    var curBg = $('.home-bgs :nth-child(' + currentSlide + ')');
    var nxtBg = $('.home-bgs :nth-child(' + nextSlide + ')');
    $('.home-counter span:first-child').text('0' + nextSlide);
    $('.home-link a').attr('href', nxtSlide.data('link'));
    var trsDuration = 400,
        dir = nextSlide > currentSlide ? '-' : '',
        s1 = homeBgs[currentSlide-1],
        s2 = homeBgs[nextSlide-1];

    $('.home-text :nth-child(' + currentSlide + ')').css('transition', 'none').fadeOut(300);
    setTimeout(() => {$('.home-text :nth-child(' + currentSlide + ')').removeClass('active').removeAttr('style').fadeIn(100);}, 400);
    setTimeout(() => {$('.home-text :nth-child(' + nextSlide + ')').addClass('active');}, 700);

    $('.home-bgs .active').addClass('change');
    nxtBg.css('z-index', '-2')
    curBg.css('z-index', '-2')
    setTimeout(() => {
      nxtBg.css('transform', 'scale(0.5) translateX(0)').addClass('active');
      curBg.css('transform', 'scale(0.5) translateX(' + dir + '129.2%)').removeClass('active');
      setTimeout(() => {
        curBg.removeClass('change');
        nxtBg.attr('style', s2);
        setTimeout(() => {
          curBg.attr('style', s1);
        }, trsDuration);
      }, trsDuration);
    }, trsDuration);
  });

  $('.news-list').slick({
    variableWidth: true,
    infinite: false,
    prevArrow: $('.news-ctrl.left'),
    nextArrow: $('.news-ctrl.right'),
    focusOnSelect: true,
    slidesToShow: 2,
    speed: 800,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.menu > img').click(function () {
    $(this).parent().toggleClass('active');
    if ($(this).parent().hasClass('active')) {
      $('body, html').css({'height': $('.menu-wrap').height(), 'overflow': 'scroll'});
    } else {
      $('body, html').removeAttr('style');
    }
  });

  $('section.form form .left .input input').on('input', function () {
    if ($(this).val().length) $(this).parent().parent().addClass('fill');
    else $(this).parent().parent().removeClass('fill');
  });

})(jQuery);