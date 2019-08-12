$(function () {
  $('.menu-opener').click(function () {
    $('nav, .menu-opener').toggleClass('active');
  });

  $('.header-body-products svg:first-child').click(() => {
    $('.header-body-products').removeClass('active');
  });
  $('.header-body-products svg:last-child').click(() => {
    $('.header-body-products').addClass('active');
  });

  $('.equip-list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.equip-arrow.prev'),
    nextArrow: $('.equip-arrow.next'),
    responsive: [
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.project-list-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.project-arrow.prev'),
    nextArrow: $('.project-arrow.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.cert-list-wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.cert-arrow.prev'),
    nextArrow: $('.cert-arrow.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.777104, lng: -122.421395},
    zoom: 17,
    disableDefaultUI: true
  });
});