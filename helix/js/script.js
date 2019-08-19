(function() {
  $('.menu-opener').click(function () {
    $('.menu-opener, .header-top nav').toggleClass('active');
  });

  $('a[href*="#anchor-"], .controller-arr-top, .controller-arr-bottom').click(function (e) {
    e.preventDefault();
    $('nav').removeClass('active');
    var id = $(this).attr('href');
    if (!$(id).length) return false;
    $('html, body').animate({
      scrollTop: $(id).offset().top - 50
    });
  });
})(jQuery)