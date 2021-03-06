$(function () {
  $('.partners-list').slick({
    slidesToShow: 4,
    prevArrow: '<div class="partners-arrow prev"><img src="img/prev-arrow.png" alt=""></div>',
    nextArrow: '<div class="partners-arrow next"><img src="img/next-arrow.png" alt=""></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.reviews-slider-items').slick({
    slidesToShow: 1,
    prevArrow: '<div class="reviews-arrow prev"><img src="img/prev-green.png" alt=""></div>',
    nextArrow: '<div class="reviews-arrow next"><img src="img/next-green.png" alt=""></div>'
  });

  $('.other-slider').slick({
    slidesToShow: 4,
    prevArrow: '<div class="other-arrow prev"><img src="img/prev-arrow.png" alt=""></div>',
    nextArrow: '<div class="other-arrow next"><img src="img/next-arrow.png" alt=""></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.cmp-partners-list').slick({
    slidesToShow: 4,
    prevArrow: '<div class="cmp-partners-arrow prev"><img src="img/prev-arrow.png" alt=""></div>',
    nextArrow: '<div class="cmp-partners-arrow next"><img src="img/next-arrow.png" alt=""></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
})