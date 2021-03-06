// Show and Hide Menu
$(document).ready(function(){
  'use strict';
  $(window).scroll(function(){
    if($(window).scrollTop() < 80){
      $('.navbar').css({
        'margin-top': '-100px',
        'opacity': '0'
      });
      $('navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0)'
      });
    } else {
      $('.navbar').css({
        'margin-top': '0px',
        'opacity': '1'
      });
      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0.7)',
        'border-color': '#444'
      });
      $('.navbar-brand img').css({
        'height': '35px',
        'padding-top': '0px'
      });
      $('.navbar-nav > li > a').css({
        'padding-top': '15px'
      });
    }
  });
});

// Smooth Scrolling
$(document).ready(function(){
  'use strict';
  $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Active Menu Item on click
$(document).ready(function() {
  'use strict';
  $('.navbar-nav li a').click(function(){
    'use strict';
    $('.navbar li a').parent().removeClass("active");
    $(this).parent().addClass("active");
  });
});

// Highlight Nav Item on Scroll
$(document).ready(function(){
  'use strict';
  $(window).scroll(function(){
    'use strict';
    $("section").each(function(){
      'use strict';
      var IdAttrib = $(this).attr("id"); //About, contact, download
      var OuterHeightCurrentElement = $(this).outerHeight();
      var GreaterTop= $(this).offset().top - 70; //Retrieves top position minus 70px

      if ($(window).scrollTop() > GreaterTop && $(window).scrollTop() < GreaterTop + OuterHeightCurrentElement) {
        $(".navbar-nav li a[href='#" + IdAttrib + "']").parent().addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + IdAttrib + "']").parent().removeClass("active");
      }
    });
  });
});

// Add autopadding to Header
$(document).ready(function(){
  'use strict';
  setInterval(function(){
    'use strict';
    var windowHeight = $(window).height();
    var containerHeight = $(".header-container").height();
    var padTop = windowHeight - containerHeight;
    $(".header-container").css({
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    });
  }, 10)
});

// Add bx slider to screens
$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50
  });
});
