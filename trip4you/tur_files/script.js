jQuery(document).ready(function () {

  $('.select-block, .select-values + img').click(function () {
    $(this).parent().find('.select-values').slideToggle(200);
  });

  /* scroll */

  var sticky = UIkit.sticky(".header", {
    top: -200,
    animation: 'uk-animation-slide-top',
    media: 768
  });

  /* slider */

  var slideshow = UIkit.slideshow(".sl", {
   
    autoplayInterval: 5000,
    pauseOnHover: false,
	kenburns:'30s',
    autoplay: true,
    height: 773
  });

  var travel = UIkit.slideset(".sl-travel", {
    large: 3,
    medium: 2,
    small: 1,
    animation: 'slide-horizontal',
    duration: 300,
    autoplayInterval: 3000,
    pauseOnHover: false,
    autoplay: false
  });

  var stock = UIkit.slideset(".sl-stock", {
    default: 5,
    large: 5,
    medium: 5,
    small: 5,
    animation: 'slide-horizontal',
    duration: 300,
    autoplayInterval: 3000,
    pauseOnHover: false,
    autoplay: false
  });

  /* count */

  var SlideCount = function (node) {
    var self = this;
    self.node = node;

    var count = 0;
    var attr = self.node.getAttribute("data-slide-count");
    var allSliders = self.node.querySelectorAll(".uk-slideset > li");
    var slideAll = self.node.querySelector(".count__item_all");
    var slideCurrent = self.node.querySelector(".count__item_current");
    var prev = self.node.querySelector(".sl-prev");
    var next = self.node.querySelector(".sl-next");

    self.init = function () {
      self.slideCount();
    };

    next.addEventListener("click", function () {
      if (slideCurrent.innerHTML < slideAll.innerHTML) {
        slideCurrent.innerHTML = +slideCurrent.innerHTML + 1;
      } else {
        slideCurrent.innerHTML = 1;
      }
    });

    prev.addEventListener("click", function () {
      if (slideCurrent.innerHTML >= 2) {
        slideCurrent.innerHTML = slideCurrent.innerHTML - 1;
      } else {
        slideCurrent.innerHTML = slideAll.innerHTML;
      }
    });

    self.slideCount = function () {
      for (var i = 0; i < allSliders.length; i++) {
        count++;
      }
      slideAll.innerHTML = Math.ceil(count / attr);
    }

  };

  var sliders = document.querySelectorAll("[data-slide-show]");
  for (var i = 0; i < sliders.length; i++) {
    var slide = new SlideCount(sliders[i]);
    slide.init();
  }

});