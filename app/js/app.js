//NProgress.start();

$(window).on('load', function () {
  // START preloader
//  $preloader = $('.js-loader'),
//  $loader = $preloader.find('.loader__img');
//  $loader.fadeOut();
//  NProgress.done();
//  $preloader.delay(0).fadeOut('slow');
  // END preloader

//$('body').show();
// $('.version').text(NProgress.version);
// NProgress.start();
// setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);


  // START header height
  function header() {
    var headerMinHeight = parseInt($(".js-header").css("padding-top")) + parseInt($(".js-header").css("padding-bottom")) + $('.header__row').outerHeight(true) + $('.js-header-content').outerHeight(true);
    $('.js-header').css('min-height', headerMinHeight + 'px');
//    var headerHeight = ($('.js-header').height() - $('.js-header-row').height() - $('.js-header-content').outerHeight(true)) / 2;
//
//    if (headerHeight > 5) {
//      $('.js-header-row').css('margin-bottom', headerHeight + 'px');
//    }
  };
  header();
  $(window).resize(function() {
    header();
  });
  // END header height


  // START header height
  function menuPos() {
    var menuML = ($('.js-menu-content').width() / 2) - ($('.js-menu-ul').width() / 2);
    var menuMT = ($('.js-menu-content').height() / 2) - ($('.js-menu-ul').height() / 2);

    if (menuMT < 122) {
      menuMT = 122;
      $('.js-menu-ul').css('margin-bottom', '122px');
    }

    $('.js-menu-ul').css('margin-left', menuML + 'px');
    $('.js-menu-ul').css('margin-top', menuMT + 'px');
  };

  $(window).resize(function() {
    if ($(window).width() < 910) {
      menuPos();
    } else {
      $('.js-menu-ul').css('margin-bottom', '0');
      $('.js-menu-ul').css('margin-left', '0');
      $('.js-menu-ul').css('margin-top', '0');
    }
  });
  // END header height


(function($) {
  $(function() {
    $('.blog__tabs').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active').closest('.blog').find('.blog__content').hide().eq($(this).index()).fadeIn(300);
    });
  });
})(jQuery);


(function($) {
  $(function() {
    $('.services__tabs').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active').closest('.services').find('.services__text').hide().removeClass('active').eq($(this).index()).fadeIn(300).addClass('active');
    });
  });
})(jQuery);


(function($) {
  $(function() {
    $('.services-full__tabs').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active').closest('.services-full').find('.services-full__item').hide().eq($(this).index()).fadeIn(300);
    });
  });
})(jQuery);


(function($) {
  $(function() {
    $('.services-full__subtabs').on('click', 'li:not(.active)', function() {
      $(this).addClass('active').siblings().removeClass('active').closest('.services-full__item').find('.services-full__text').hide().eq($(this).index()).fadeIn(300);
    });
  });
})(jQuery);

  var menu = new menu();
  var form = new form();

  function menu() {
    this.content = $('.js-menu-content');
    this.btn = $('.js-menu-btn');
    this.logo = $('.js-logo');
    this.phone = $('.js-phone');

    var menu = this;

    this.open = function() {
      menu.content.fadeToggle(300);
      $('body,html').animate({scrollTop: 0}, 400);
      menu.btn.toggleClass('menu__btn_open');
      menu.logo.toggleClass('logo_open');
      menu.phone.toggleClass('header__phone_open');
      $('body').toggleClass('noscroll');
      menuPos();
    }

    this.close = function() {
      menu.content.fadeOut(300);
      menu.btn.removeClass('menu__btn_open');
      menu.logo.removeClass('logo_open');
      menu.phone.removeClass('header__phone_open');
      $('body').removeClass('noscroll');
    }

    menu.btn.click(function() {
      menu.open();
    });

    $(window).resize(function() {
      if ($(window).width() >= 910) {
        menu.close();
      }
    });
  }

  function form() {
    this.content = $('.js-contact-form');
    this.btn = $('.js-form-btn');

    var form = this;

    this.open = function() {
      form.content.fadeToggle(300);
      $('body,html').animate({scrollTop: 0}, 400);
      $('body').toggleClass('noscroll');
      $('.js-input-phone').focus();
    }

    this.close = function() {
      form.content.fadeOut(300);
      $('body').removeClass('noscroll');
    }

    form.btn.click(function() {
      form.open();
    });

//    $(window).resize(function() {
//      if ($(window).width() >= 910) {
//        menu.close();
//      }
//    });
  }


  function slider(array) {
    if(!$('*').is(array.slides)) {
      return;
    }

    this.slides = document.querySelectorAll(array.slides);
//    this.titles = document.querySelectorAll(array.titles);
    this.nextBtn = array.nextBtn;
    this.prevBtn = array.prevBtn;
    var i = 0;
//    var count = 0;
//    var nextTitle;

    var slider = this;

    this.prev = function() {
      $(slider.slides[i]).fadeOut(300);
//      nextTitle = $(slider.slides[i]).find('h3').text();
      i--;

      if (i < 0) {
        i = slider.slides.length-1;
      }

//      $(slider.slides[i]).find('span').text(nextTitle);
      $(slider.slides[i]).fadeIn(300);
    }

    this.next = function() {
      $(slider.slides[i]).fadeOut(300);
      i++;

      if (i >= slider.slides.length) {
          i = 0;
      }

//      count = i + 1;
//
//      if (count > slider.slides.length-1) {
//        count = 0;
//      }
//
//      nextTitle = $(slider.slides[count]).find('h3').text();
//
//      $(slider.slides[i]).find('span').text(nextTitle);
      $(slider.slides[i]).fadeIn(300);
    }

    $(slider.nextBtn).click(function() {
      slider.next();
    });

    document.querySelector(slider.prevBtn).onclick = slider.prev;
  }



  $('.js-search').click(function() {
    $('.js-search').addClass('blog__search_open');
    $('.js-search input').attr('placeholder', 'Введите текст для поиска');
    $('.js-search input').focus();
    $('.js-search-close').fadeIn(500);
  });

  $('.js-search-close').click(function() {
    $('.js-search').removeClass('blog__search_open');
    $('.js-search input').attr('placeholder', 'Поиск');
    $('.js-search input').val('');
    $('.js-search-close').fadeOut(500);
    event.stopPropagation();
  });

  jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".js-search");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      $('.js-search').removeClass('blog__search_open');
            $('.js-search input').attr('placeholder', 'Поиск');
            $('.js-search input').val('');
            $('.js-search-close').fadeOut(500);
            event.stopPropagation();
    }
  });
});


  jQuery(function($){
    $(".js-input-phone").mask("+7 (999) 999 99 99", {placeholder: " " });
  });

  $('.js-partners span').click(function() {
    $('.js-partners .partners__logo img').hide();
    $('.js-partners .partners__logo img').attr('src', $(this).attr('data-src'));
    $('.js-partners .partners__logo img').fadeIn(200);
  });

  // START smooth scrolling
//  $(".js-menu").on("click",".js-menu-scroll", function (event) {
//    event.preventDefault();
//
//    var id  = $(this).attr('href'),
//        top = $(id).offset().top;
//
//    $('body,html').animate({scrollTop: top}, 500);
//  });
//
//  $(".js-footer-menu").on("click",".js-menu-scroll", function (event) {
//    event.preventDefault();
//
//    var id  = $(this).attr('href'),
//        top = $(id).offset().top;
//
//    $('body,html').animate({scrollTop: top}, 500);
//  });
//
//  $(".js-header-content").on("click",".js-consultation-btn", function (event) {
//    event.preventDefault();
//
//    var id  = $(this).attr('href'),
//        top = $(id).offset().top;
//
//    $('body,html').animate({scrollTop: top}, 500);
//  });
  // END smooth scrolling


  $(".header__language").on("click", function () {
    $(".header__language ul").slideToggle(300);
    $(".header__language").toggleClass('header__language_open');
  });

   // START slick
  $('.js-project-slider').slick({
    dots: false,
    infinite: true,
    fade: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="arrows__prev"></button>',
    nextArrow: '<button type="button" class="arrows__next"></button>'
  });

  $('.js-reviews-slider').slick({
    dots: false,
    infinite: true,
    fade: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="arrows__prev"></button>',
    nextArrow: '<button type="button" class="arrows__next"></button>'
  });

  $('.js-advantages-slider').slick({
    dots: false,
    infinite: true,
    fade: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="arrows__prev"></button>',
    nextArrow: '<button type="button" class="arrows__next"></button>'
  });

  $('.js-teams-slider').slick({
    dots: false,
    infinite: true,
    fade: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="arrows__prev arrows__prev_w"></button>',
    nextArrow: '<button type="button" class="arrows__next arrows__next_w"></button>'
  });

  $('.js-blog-slider').slick({
    dots: false,
    infinite: false,
    initialSlide: 1,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  $('.js-services-tabs').slick({
    dots: false,
    infinite: false,
    initialSlide: 1,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
   // END slick


  // START mCustomScrollbar
//  $(".js-team-text").mCustomScrollbar({
//    documentTouchScroll: true,
//    theme: 'dark'
//  });
  // END mCustomScrollbar



  // START dotdotdot
  $('.blog__tabs').on('click', function() {
    $(".js-blog-text").dotdotdot({});

    $(window).resize(function() {
      $(".js-blog-text").dotdotdot({});
    });
  });

  $(".js-blog-text").dotdotdot({});

  $(window).resize(function() {
    $(".js-blog-text").dotdotdot({});
  });
//   END dotdotdot
});

$(document).ready( function(){
  setTimeout(function () {
    $('.header__row').addClass('header__row_show');
  }, 600);
  setTimeout(function () {
    $('.header__title').addClass('header__title_show');
  }, 1000);
  setTimeout(function () {
    $('.header__subtitle').addClass('header__subtitle_show');
  }, 1300);
  setTimeout(function () {
    $('.header__btn').addClass('header__btn_show');
  }, 1600);
} );
