$(function() {

	$('.menu-btn').click(function (e) {
    e.preventDefault();
    $('.header-menu').toggleClass('active');
    $(this).toggleClass('active');
  });

});
