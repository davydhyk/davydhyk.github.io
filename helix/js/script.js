(function() {
  function scrollTo(a) {
    $('html, body').animate({
      scrollTop: a.offset().top
    });
  }

  $('.menu-mob').click(function () {
    $(this).toggleClass('active');
  });

  $('.scroll a, .scroll .link').click(function (e) {
    e.preventDefault();
    var target = $(this).parent().parent().next();
    scrollTo(target);
  });

  $('a[href*="#anchor-"], [data-anchor]').click(function (e) {
    e.preventDefault();
    var id = ($(this).data('anchor')) ? $(this).data('anchor') : $(this).attr('href');
    if (!$(id).length) return false;
    scrollTo($(id));
  });

  $('aside .link').click(function (e) {
    e.preventDefault();
    var target = $('section:first'),
        offset = $(this).offset().top + $(this).height() / 2;
    $('section').each(function () {
      if (Math.abs(target.offset().top - offset) > Math.abs($(this).offset().top - offset)) target = $(this);
    })
    scrollTo(target);
  });

  $('footer .link').click(function (e) {scrollTo($('body'));});

  $('.contact .left label').find('select, input').on('input', function (e) {
    label = $(e.target).parent().parent();
    if ($(e.target).val() == '') label.removeClass('fill');
    else label.addClass('fill');
  });
})(jQuery)