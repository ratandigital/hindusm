(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Preloader
    -------------------------------------------------------------------------------*/
  $(window).on('load', function() {
    $('.sigma_preloader').addClass('hidden');
  });

  /*-------------------------------------------------------------------------------
  Subheader Trigger
  -------------------------------------------------------------------------------*/
  $(".subheader-toggler").on('click', function(e) {
    e.preventDefault();
    $(".sigma_subheader-extras").toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  volunteers Socials Trigger
  -------------------------------------------------------------------------------*/


  /*-------------------------------------------------------------------------------
  Cart Trigger
  -------------------------------------------------------------------------------*/
  $(".sigma_cart-trigger").on('click', function(e) {
    e.preventDefault();
    $("body").toggleClass('cart-open');
  });

  /*-------------------------------------------------------------------------------
  Search Trigger
  -------------------------------------------------------------------------------*/
  $(".sigma_search-trigger").on('click', function(e) {
    e.preventDefault();
    $(".sigma_search-form-wrapper").toggleClass('open');
  });

  /*-------------------------------------------------------------------------------
  Aside Menu
  -------------------------------------------------------------------------------*/
  $(".aside-trigger-right").on('click', function() {
    var $el = $(".sigma_aside-right-panel");
    $el.toggleClass('open');
    if ($el.hasClass('open')) {
      setTimeout(function() {
        $el.find('.sidebar').fadeIn();
      }, 300);
    } else {
      $el.find('.sidebar').fadeOut();
    }
  });

  $(".aside-trigger-left").on('click', function() {
    $(".sigma_aside-left").toggleClass('open');
  });

  $(".sigma_aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".sub-menu");
    e.preventDefault();

    submenu.slideToggle(200);
  });

  /*-------------------------------------------------------------------------------
  Sticky Header
    -------------------------------------------------------------------------------*/
  var header = $(".can-sticky");
  var headerHeight = header.innerHeight();

  function doSticky() {
    if (window.pageYOffset > headerHeight) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();

  /*-------------------------------------------------------------------------------
  Tooltips
  -------------------------------------------------------------------------------*/
  $(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  });

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  $('.popup-youtube').magnificPopup({type: 'iframe'});
  $('.popup-vimeo').magnificPopup({type: 'iframe'});
  $('.popup-video').magnificPopup({type: 'iframe'});
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /*-------------------------------------------------------------------------------
  ion Range Sliders (Price filter)
  -------------------------------------------------------------------------------*/
  $(".js-range-slider").ionRangeSlider();

  /*-------------------------------------------------------------------------------
  Countdown
  -------------------------------------------------------------------------------*/
  function makeTimer() {
    var endTime = new Date("01 January 2022 00:00:00 GMT+05:30");
    endTime = (Date.parse(endTime) / 1000);
    var now = new Date();
    now = (Date.parse(now) / 1000);
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $(".days").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);
  }
  setInterval(function() {
    makeTimer();
  }, 1000);

  /*-------------------------------------------------------------------------------
  Counter
  -------------------------------------------------------------------------------*/


  /*-------------------------------------------------------------------------------
  Checkout Notices
  -------------------------------------------------------------------------------*/
  $(".sigma_notice a").on('click', function(e) {
    e.preventDefault();

    $(this).closest('.sigma_notice').next().slideToggle();
  });

  /*-------------------------------------------------------------------------------
  Progress bar on view
  -------------------------------------------------------------------------------*/
 

  /*-------------------------------------------------------------------------------
  Testimonials slider
  -------------------------------------------------------------------------------*/


  /*-------------------------------------------------------------------------------
  Dots Slider
  -------------------------------------------------------------------------------*/

  /*-------------------------------------------------------------------------------
  Banner slider (Home v3)
  -------------------------------------------------------------------------------*/
  $(".banner-3 .sigma_banner-slider, .banner-1 .sigma_banner-slider, .banner-2 .sigma_banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Product details slider
  -------------------------------------------------------------------------------*/
  $('.sigma_product-single-thumb .slider').slick({slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.sigma_product-single-thumb .slider-nav'});

  $('.sigma_product-single-thumb .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.sigma_product-single-thumb .slider',
    dots: false,
    centerMode: false,
    arrows: false,
    focusOnSelect: false
  });

  /*-------------------------------------------------------------------------------
  portfolio slider
  -------------------------------------------------------------------------------*/
  $(".portfolio-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    prevArrow: $('.portfolio-section .slider-prev'),
    nextArrow: $('.portfolio-section .slider-next'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.masonry').imagesLoaded(function() {
    var isotopeContainer = $('.masonry');
    isotopeContainer.isotope({itemSelector: '.masonry-item'});
  });

  /*------------------------------------------------------------------------------
  Isotope
  ------------------------------------------------------------------------------*/

  function doIsotope() {
    var $portfolioGrid = '';

    $('.masonry').imagesLoaded(function() {
      $portfolioGrid = $('.portfolio-filter').isotope({
        itemSelector: '.col-lg-4',
        percentPosition: true,
        masonry: {
          columnWidth: '.col-lg-4'
        }
      });
    });

    $('.filter-items').on('click', '.portfolio-trigger', function() {
      var filterValue = $(this).attr('data-filter');
      $portfolioGrid.isotope({filter: filterValue});
    });

    $('.portfolio-trigger').on('click', function(e) {
      $(this).closest('.filter-items').find('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

  }
  doIsotope();

  /*-------------------------------------------------------------------------------
  Add / Subtract Quantity
  -------------------------------------------------------------------------------*/
  $(".qty span").on('click', function() {
    var qty = $(this).closest('.qty').find('input');
    var qtyVal = parseInt(qty.val());
    if ($(this).hasClass('qty-add')) {
      qty.val(qtyVal + 1);
    } else {
      return qtyVal > 1
        ? qty.val(qtyVal - 1)
        : 0;
    }
  })

  /*-----------------------------------
    Back to Top
    -----------------------------------*/


  //On resize events
  $(window).on('resize', function() {});

})(jQuery);
