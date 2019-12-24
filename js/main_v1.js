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


$(function() {
const appleSequenceImages = [];

for (let i = 0; i <= 131; i ++) {
  appleSequenceImages.push(`${`000${i}`.slice(-4)}.jpg`);
}
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

class EventEmitter {
  listeners = {}
  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }
  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }
  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    }
    this.listeners[eventName].push(onceWrapper);
    return this;
  }
  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }
  removeListener (eventName, fn) {
    let lis = this.listeners[eventName];
    if (!lis) return this;
    for(let i = lis.length; i > 0; i--) {
      if (lis[i] === fn) {
        lis.splice(i,1);
        break;
      }
    }
    return this;
  }
  emit(eventName, ...args) {
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
  }
  listenerCount(eventName) {
    let fns = this.listeners[eventName] || [];
    return fns.length;
  }
  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}
class Canvas {
  constructor(e) {
    this.images = e.images;
    this.container = e.container;
    this.cover = e.cover;
    this.displayIndex = 0;
  }
  
  setup() {
    this.canvas = document.createElement("canvas");
    this.container.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d')
    
    window.addEventListener('resize', () => this.resize());
    this.resize();
  }
  
  renderIndex(e) {
    if (this.images[e]) {
        return this.drawImage(e);
    }
    // Find closest loaded image
    for (var t = Number.MAX_SAFE_INTEGER, r = e; r >= 0; r--)
        if (this.images[r]) {
            t = r;
            break
        }
    for (var n = Number.MAX_SAFE_INTEGER, i = e, o = this.images.length; i < o; i++)
        if (this.images[i]) {
            n = i;
            break
        }
    this.images[t] ? this.drawImage(t) : this.images[n] && this.drawImage(n)
  }
  
  drawImage(e) {
    this.displayIndex = e,
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const x = Math.floor((this.canvas.width - this.images[this.displayIndex].naturalWidth) / 2);
    const y = Math.floor((this.canvas.height - this.images[this.displayIndex].naturalHeight) / 2);
    if (this.cover) {
      
      this.drawImageCover(this.ctx, this.images[this.displayIndex]);
    } else {
      this.ctx.drawImage(this.images[this.displayIndex], x, y);
    }
  }
  
  resize() {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.canvas.style.height = `${h}px`;
    this.canvas.style.width = `${w}px`;
    this.canvas.height = h;
    this.canvas.width = w;
    
    this.renderIndex(this.displayIndex);
  }
  
  /**
 * By Ken Fyrstenberg Nilsen
 *
 * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
 *
 * If image and context are only arguments rectangle will equal canvas
*/
  drawImageCover(ctx, img, x, y, w, h, offsetX, offsetY) {

      if (arguments.length === 2) {
          x = y = 0;
          w = ctx.canvas.width;
          h = ctx.canvas.height;
      }

      // default offset is center
      offsetX = typeof offsetX === "number" ? offsetX : 0.5;
      offsetY = typeof offsetY === "number" ? offsetY : 0.5;

      // keep bounds [0.0, 1.0]
      if (offsetX < 0) offsetX = 0;
      if (offsetY < 0) offsetY = 0;
      if (offsetX > 1) offsetX = 1;
      if (offsetY > 1) offsetY = 1;

      var iw = img.width,
          ih = img.height,
          r = Math.min(w / iw, h / ih),
          nw = iw * r,   // new prop. width
          nh = ih * r,   // new prop. height
          cx, cy, cw, ch, ar = 1;

      // decide which gap to fill    
      if (nw < w) ar = w / nw;                             
      if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
      nw *= ar;
      nh *= ar;

      // calc source rectangle
      cw = iw / (nw / w);
      ch = ih / (nh / h);

      cx = (iw - cw) * offsetX;
      cy = (ih - ch) * offsetY;

      // make sure source rectangle is valid
      if (cx < 0) cx = 0;
      if (cy < 0) cy = 0;
      if (cw > iw) cw = iw;
      if (ch > ih) ch = ih;

      // fill image in dest. rectangle
      ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
  }
}
class ImgLoader extends EventEmitter {
  constructor(opts) {
    super();
    this.images = opts.imgsRef;
    this.imageNames = opts.images;
    this.imagesRoot = opts.imagesRoot;
    this.sequenceLength = opts.images.length;
    this.priorityFranes = opts.priorityFrames;
    this.complete = false;
    this.loadIndex = 0;
    
    this.priorityQueue = this.createPriorityQueue();
    this.loadingQueue = this.createLoadingQueue();
    
    this.loadNextImage();
  }
  
  loadImage(e) {
    if (this.images[e]) {
      return this.loadNextImage();
    }
    const onLoad = () => {
      img.removeEventListener('load', onLoad);
      this.images[e] = img;
      
      if (e === 0) {
        this.emit('FIRST_IMAGE_LOADED');
      }
      this.loadNextImage();
    }
    const img = new Image;
    img.addEventListener('load', onLoad);
    img.src = (this.imagesRoot ? this.imagesRoot : '') + this.imageNames[e];
  }
  
  loadNextImage() {
    if (this.priorityQueue.length) {
      this.loadImage(this.priorityQueue.shift());
      if (!this.priorityQueue.length) {
        this.emit('PRIORITY_IMAGES_LOADED');
      }
    } else if (this.loadingQueue.length) {
        this.loadImage(this.loadingQueue.shift())
    } else {
      this.complete = true;
      this.emit('IMAGES_LOADED');
    }
  }
  
  createPriorityQueue() {
    const p = this.priorityFrames || [];
    if (!p.length) {
      p.push(0);
      p.push(Math.round(this.sequenceLength / 2));
      p.push(this.sequenceLength - 1);
    }
    return p;
  }
  
  createLoadingQueue() {
    return this.imageNames.map((s, i) => i).sort((e, n) => {
       return Math.abs(e - this.sequenceLength / 2) - Math.abs(n - this.sequenceLength / 2)
    });
  }
}
class ScrollSequence {
  constructor(opts) {
    this.opts = {
      container: 'body',
      starts: 'out',
      ends: 'out',
      imagesRoot: '',
      cover: false,
      ...opts
    }
    this.container = typeof opts.container === 'object' ? 
      opts.container : 
      document.querySelector(opts.container);
    
    this.scrollWith = !opts.scrollWith ? 
      this.container : 
      typeof opts.scrollWith === 'object' ? 
        opts.scrollWith : 
        document.querySelector(opts.scrollWith);
    
    this.images = Array(opts.images.length);
    this.imagesToLoad = opts.images;
    this.priorityFrames = opts.priorityFrames;
    
    this.loader = new ImgLoader({
      imgsRef: this.images,
      images: this.imagesToLoad,
      imagesRoot: this.opts.imagesRoot,
      priorityFrames: this.priorityFrames
    });
    
    this.canvas = new Canvas({
      container: this.container,
      images: this.images,
      cover: this.opts.cover
    });
    
    this.init();
  }
  
  init() {
    this.canvas.setup();
    this.loader.once('FIRST_IMAGE_LOADED', () => {
      this.canvas.renderIndex(0);
    })
    this.loader.once('PRIORITY_IMAGES_LOADED', () => {
      window.addEventListener('scroll', () => this.changeOnWindowScroll());
    })
    this.loader.once('IMAGES_LOADED', () => {
      console.log('Sequence Loaded');
    })
  }
  
  changeOnWindowScroll() {
    const step = 100 / (this.images.length - 1);
    const mapToIndex = Math.floor(this.percentScrolled / step);
    requestAnimationFrame(() => this.canvas.renderIndex(mapToIndex));
  }
  
  get percentScrolled() {
    const {starts, ends} = this.opts;
    const el = this.scrollWith;
    const doc = document.documentElement;
    const clientOffsety = doc.scrollTop || window.pageYOffset;
    const elementHeight = el.clientHeight || el.offsetHeight;
    const clientHeight = doc.clientHeight;
    let target = el;
    let offsetY = 0;
    do {
        offsetY += target.offsetTop;
        target = target.offsetParent;
    } while (target && target !== window);
    
    let u = (clientOffsety - offsetY);
    let d = (elementHeight + clientHeight)
    
    if (starts === 'out') u += clientHeight;
    if (ends === 'in') d -= clientHeight;
    if (starts == 'in') d -= clientHeight;
    // start: out, ends: out
    // const value = ((clientOffsety + clientHeight) - offsetY) / (clientHeight + elementHeight) * 100;
    
    //start: in, ends: out
    // const value = (clientOffsety - offsetY) / (elementHeight) * 100;
    
    //start: out, ends: in
    // const value = ((clientOffsety + clientHeight) - offsetY) / (elementHeight) * 100;
    
    // Start: in, ends: in
    // (clientOffsety - offsetY) / (elementHeight - clientHeight)
    
    const value = u / d * 100;
    return value > 100 ? 100 : value < 0 ? 0 : value;
  }
}

const appleSequence = new ScrollSequence({
  container: '.apple-sequence',
  scrollWith: '.apple-container',
  images: appleSequenceImages,
  // imagesRoot: 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/',
  priorityFrames: [0, 20, 40, 60, 90],
  cover: true,
  playUntil: 'scroll-out',
  starts: 'in'
});


// END SCROLL_SEQUENCE CODE

ScrollOut({
  targets: '.speak',
  cssProps: {
    viewportY: true,
    visibleY: true
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

