window.globals = {
  gallery: "",
};
window.globalsParam = {
  galleryParams: {
    gallery:true,
    item:1,
    thumbItem:6,
    slideMargin: 0,
    vertical:true,
    verticalHeight:500,
    speed:500,
    loop:true,
    thumbMargin:5,
    onSliderLoad: function() {
      $('#image-gallery').removeClass('cS-hidden');
    }
  },
  galleryParamsMobile: {
    gallery:false,
    item:1,
    thumb:false,
    slideMargin: 0,
    vertical:false,
    controls: true,
    speed:500,
    loop:true,
    thumbMargin:0,
    onSliderLoad: function() {
      $('#image-gallery').removeClass('cS-hidden');
    }
  }
};

$(function () {
  new WOW().init();

  $('.owl-carousel-new').owlCarousel({
    nav:true,
    dots:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1500,
    navText:["<div class='prev-slide'></div>","<div class='next-slide'></div>"],
    responsive:{
      0:{
        items:4,
        margin:0
      },
      700:{
        items:4,
        margin:10
      },
      1000:{
        items:4,
        margin:10
      }
    }
  })
  $('[data-toggle="tooltip"]').tooltip();

  $('header .fa-search').click(function(e){
    e.stopPropagation();
    $('header .input_search').addClass('db');
    $('header .input_search').removeClass('animated fadeOutUp').addClass('animated fadeInDown');
    $('.modal').addClass('animated fadeIn').addClass('modal_mobile');
  });

  $('.input_search').click(function(e){
    e.stopPropagation();
  })


  $(document,'body').on('click',function(e){
    $('header .input_search').removeClass('animated fadeInDown').addClass('animated fadeOutUp');
  })

  $('header .fa-search').click(function(e){
    $("header .input_search").focus();
  });

  $('header .cart-icon').click(function(){
    $('.shopping-cart-product-list').removeClass('animated fadeOutRight').addClass('animated fadeInRight').css('right', '5px');
    $('.modal').addClass('modal_mobile').addClass('z-index');
  });
  $('.user-icon').click(function(){
    $('.account-block').removeClass('animated fadeOutRight').addClass('animated fadeInRight').css('right', '5px');
    $('.modal').addClass('modal_mobile').addClass('z-index');
  });



  $('.login-in').click(function(){
    $('.login-form-container').addClass('animated fadeIn').css('display', 'block');
    $('.links-form-block').css('display', 'flex');
    $('.login-form').css('display', 'block');
    $('.registration-form').css('display', 'none');
    $('.recover-password-form').css('display', 'none')
    $('.registration-link').removeClass('active');
    $('.login-in-link').addClass('active');
    return false;
  });
  $('.create-an-account').click(function(){
    $('.login-form-container').addClass('animated fadeIn').css('display', 'block');
    $('.registration-form').css('display', 'block');
    $('.links-form-block').css('display', 'flex');
    $('.login-form').css('display', 'none');
    $('.recover-password-form').css('display', 'none')
    $('.login-in-link').removeClass('active');
    $('.registration-link').addClass('active');
    return false;
  });
  $('#registration-link').click(function(){
    $('.registration-form').css('display', 'block');
    $('.links-form-block').css('display', 'flex');
    $('.login-form').css('display', 'none');
    $('.recover-password-form').css('display', 'none');
    $('.login-in-link').removeClass('active');
    $('.registration-link').addClass('active');
    return false;
  });
  $('#login-in-link').click(function(){
    $('.login-form').css('display', 'block');
    $('.links-form-block').css('display', 'flex');
    $('.registration-form').css('display', 'none');
    $('.recover-password-form').css('display', 'none');
    $('.login-in-link').addClass('active');
    $('.registration-link').removeClass('active');
    return false;
  });
  $('#forgot-password-link').click(function(){
    $('.recover-password-form').css('display', 'block');
    $('.login-form').css('display', 'none');
    $('.registration-form').css('display', 'none');
    $('.links-form-block').css('display', 'none');
    return false;
  });
  $('.form-close').click(function() {
    $('.login-form-container').removeClass('animated fadeOut').css('display', 'none');
  });

  // $('.buy-btn').click(function(){
  //    $('.buy-window').removeClass('animated fadeOut');
  //   $('.buy-window').addClass('animated fadeInUpBig').css('right', '0');
  //   $('body').addClass('hidden');
  //   return false;
  // });

  $('.buy-window-close').click(function() {
    $('.buy-window').removeClass('animated fadeInUpBig').addClass('animated fadeOut');
    $('.buy-window').css('right', '-100vw');
    $('body').removeClass('hidden');
    return false;
  });
  $('.continue-shopping').click(function() {
    $('.buy-window').removeClass('animated fadeInUpBig').addClass('animated fadeOut');
    $('.buy-window').css('right', '-100vw');
    $('body').removeClass('hidden');
    return false;
  });



  $(".line-order").on('click', function() {
    $(this).next().find('.table_my-order:first').toggleClass("d-block").toggleClass('animated fadeIn');
    $(this).find('.order-box__icon:first').toggleClass('order-box__icon_top');
  });




  $("input.phone").mask("+7 (999) 999-99-99");

  $('#customCheckMailing').on('change', function(){
    if($('#customCheckMailing').prop('checked')){
      $('.dop-notices').css('display', 'block');
    }else{
      $('.dop-notices').css('display', 'none');
    }
  });
});


$(document).mousedown(function (e) {
  var container = $(".login-form-container");
  if (container.has(e.target).length === 0){
    $('.login-form-container').removeClass('fadeIn').css('display','none');
  }
  var container = $(".account-block");
  if (container.has(e.target).length === 0){
    $('.modal').removeClass('modal_mobile').removeClass('z-index');
  }
  var container = $(".shopping-cart-product-list");
  if (container.has(e.target).length === 0){
    $('.modal').removeClass('modal_mobile').removeClass('z-index');
  }
});

$(function () {

  new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 9.7,
    draggable: true,
    duration: 10.25,
    dragVelocity: 10.25,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

  //    $('.owl-carousel-slider').owlCarousel({
  //     margin:10,
  //     nav:true,
  //     animateOut: 'fadeOut',
  //     animateIn: 'fadeIn',
  //     smartSpeed: 1500,
  //     navText:["<div class='prev-slide'></div>","<div class='next-slide'></div>"],
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:1
  //         },
  //         1000:{
  //             items:1
  //         }
  //     }
  // })

  $('.owl-carousel-blog').owlCarousel({
    margin:10,
    nav:true,
    center: true,
    loop:true,
    navText:["<div class='prev-slide'></div>","<div class='next-slide'></div>"],
    responsive:{
      0:{
        items:1
      },
      1025:{
        items:3
      }
    }
  })
});


$(document).ready(function() {
  $(document).mousedown(function (e){ 
    var shoppingcart = $(".shopping-cart-product-list");
    if (!shoppingcart.is(e.target) 
        && shoppingcart.has(e.target).length === 0) {
      $('.shopping-cart-product-list').removeClass('animated fadeInRight').addClass('animated fadeOutRight');
    }
    var accountblock = $(".account-block"); 
    if (!accountblock.is(e.target) 
        && accountblock.has(e.target).length === 0) {
      $('.account-block').removeClass('animated fadeInRight').addClass('animated fadeOutRight');
    }
  });
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  $('#promokod').keyup(function () {
    var pswd = $('#promokod').val();
    if ( pswd.length < 8 ) {
      $('.gray_bg_btn').removeClass('active').addClass('invalid');
    } else {
      $('.gray_bg_btn').removeClass('invalid').addClass('active');
    }
  })

  $(function() {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
  });

  $(function() {
    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');
    });
  });

});

$(function() {
  function init() {
    $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
    $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
  };

  function toggleMenuIcon() {
    $(this).toggleClass('menu-icon--open');
    $('[data-element="toggle-nav"]').toggleClass('nav--active');
    $('body').toggleClass('hidden');
  };

  function toggleSubMenu() {
    $(this).toggleClass('nav__link--plus nav__link--minus');
    $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
  };

  init()
});


console.clear();

var el = {};

$('.placeholder').on('click', function (ev) {
  $('.list__ul').toggle();
});

$('.list__ul li').on('click', function (ev) {
  ev.preventDefault();
  $('.placeholder').text( $(this).text() ).css('opacity', '1');
  $('.list__ul').toggle();

});


$('select').on('change', function (e) {
  $('.placeholder').text(this.value);
});



$(function() {
  $('.list__ul li').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('.container-tabs-inside').offset().top }, 1000);
    e.preventDefault();
  });
});


// $(function() {
//   const elem = document.getElementById('TurboBot_buy_header');
//   document.addEventListener('scroll', function() {
//     const posTop = elem.getBoundingClientRect().top;
//     elem.classList.toggle('sticky', posTop + elem.clientHeight <= window.innerHeight && posTop >= 0);
//   });
// });

$(function() {
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 3000);
  });
  });


$(function() {
isMobile = {
Android: function() {
return navigator.userAgent.match(/Android/i);
},
BlackBerry: function() {
return navigator.userAgent.match(/BlackBerry/i);
},
iOS: function() {
return navigator.userAgent.match(/iPhone|iPad|iPod/i);
},
Opera: function() {
return navigator.userAgent.match(/Opera Mini/i);
},
Windows: function() {
return navigator.userAgent.match(/IEMobile/i);
},
any: function() {
return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
}
};
if (isMobile.any()) {
itismobile();
}
function itismobile(){
$('#video').get(0).play();
}
  });

 (function () {
  $('.gallery-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.find('figcaption').text() || item.el.attr('title');
      } },

    zoom: {
      enabled: false },

    // duration: 300
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      tCounter: '' },
 });


}).call(this);

(function() {
  /* Define a variável que dá swipe no lightbox */
  var magnificPopup = $.magnificPopup.instance;

  /* Carrega a função quando clica no lightbox (senão não pega a classe utilizada) */
  $(".gallery-link").click(function(e) {

    /* Espera carregar o lightbox */
    setTimeout(function() {
        /* Swipe para a esquerda - Próximo */
        $(".mfp-container").swipe( {
          swipeLeft:function(event, direction, distance, duration, fingerCount) {
            console.log("swipe right");
            magnificPopup.next();
          },

        /* Swipe para a direita - Anterior */
        swipeRight:function(event, direction, distance, duration, fingerCount) {
          console.log("swipe left");
          magnificPopup.prev();
        },
        });
    }, 500);
  });

}).call(this);


$(function() {
  $('.youtube-link').magnificPopup({
    type: 'iframe',
    iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 
          patterns: {
              youtube: {
                  index: 'youtube.com/', 
                  id: 'v=', 
                  src: '//www.youtube.com/embed/%id%?autoplay=1' 
              }
           },
           srcAction: 'iframe_src', 
       }
  });
});




$(window).scroll(function() {
   var one_fast_hT = $('#EarDrops_play-pause, #EarDrops_start-stop_call').offset().top,
       one_fast_hH = $('#EarDrops_play-pause, #EarDrops_start-stop_call').outerHeight(),
       one_fast_wH = $(window).height(),
       one_fast_wS = $(this).scrollTop();
   if (one_fast_wS > (one_fast_hT+one_fast_hH-one_fast_wH)){
       $('.EarDrops_seventh_right_big').text("1"); 
       $('.EarDrops_seventh_right_small').text("быстрое нажатие"); 
   }

  var two_fast_hT = $('#EarDrops_reconnection').offset().top,
       two_fast_hH = $('#EarDrops_reconnection').outerHeight(),
       two_fast_wH = $(window).height(),
       two_fast_wS = $(this).scrollTop();
   if (two_fast_wS > (two_fast_hT+two_fast_hH-two_fast_wH)){
       $('.EarDrops_seventh_right_big').text("2"); 
       $('.EarDrops_seventh_right_small').text("быстрых нажатия"); 
   }

   var one_long_hT = $('#EarDrops_switch, #EarDrops_ask').offset().top,
       one_long_hH = $('#EarDrops_switch, #EarDrops_ask').outerHeight(),
       one_long_wH = $(window).height(),
       one_long_wS = $(this).scrollTop();
   if (one_long_wS > (one_long_hT+one_long_hH-one_long_wH)){
       $('.EarDrops_seventh_right_big').text("1"); 
       $('.EarDrops_seventh_right_small').text("долгое нажатие"); 
   }

});





// $(window).scroll(function() {
//   if ($('.EarDrops_seventh_main').scrollTop()>=100) {
//     // длительность анимации - 'slow'
//     // тип анимации -  'linear'
//     $('#EarDrops_play-pause').fadeIn('slow','linear');
//   }
//   else {
//     // длительность анимации - 'fast'
//     // тип анимации -  'swing'
//     $('#EarDrops_play-pause').fadeOut('fast','swing');
//   }
// });

$(document).ready(function(){   
    var $element = $('.EarDrops_seventh_main');
    let counter = 0;
    $(window).scroll(function() {
      var scroll = $(window).scrollTop() + $(window).height();
      //Если скролл до конца елемента
      //var offset = $element.offset().top + $element.height();
      //Если скролл до начала елемента
      var offset = $element.offset().top
     
      if (scroll > offset && counter == 0) {
        $('#EarDrops_play-pause').fadeIn(1000);
        counter = 1;
      }
    });
    var $elementt = $('#EarDrops_play-pause');
    let counterr = 0;
    $(window).scroll(function() {
      var scrolll = $(window).scrollTop() + $(window).height();
      //Если скролл до конца елемента
      //var offset = $element.offset().top + $element.height();
      //Если скролл до начала елемента
      var offsett = $elementt.offsett().top
     
      if (scrolll > offsett && counterr == 0) {
        $('#EarDrops_start-stop_call').fadeIn(1000);
        counterr = 1;
      }
    });
 
   });