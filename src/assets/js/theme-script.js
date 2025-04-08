jQuery(document).ready(function () {
    jQuery('.clients-slider').owlCarousel({
        margin: 50,
        lazyLoad: false,
        nav:false,
        mouseDrag:true,
        dots: false,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 4
            },
            991: {
                items: 4,
            },
            1200: {
                items: 6,
            }
        }
    });

    jQuery('.project-slider').owlCarousel({
        margin: 30,
        lazyLoad: true,
        nav:true,
        mouseDrag:true,
        dots: false,
        loop: true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',

        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1025: {
                items: 3,
            },
            1200: {
                items: 3.2,
            }
        }
    });




    
    jQuery('img').filter(function () {
        return this.src.match(/.*\.svg$/);
    }).each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });


    var equal_height = $(".equal-height");
    if (equal_height.length) {
        equal_height.matchHeight();
    }

});

jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 150) {
        jQuery("header").addClass("follow");
    } else {
        jQuery("header").removeClass("follow");
    }
});


jQuery(document).ready(function() {
    setInterval(function() {
        jQuery('#site-loader').addClass('loaded-overlay1');
    }, 4500);
    setInterval(function() {
        jQuery('body').addClass('loaded');
    }, 1300);

})

jQuery('.hamburger_menu').click(function() {
    jQuery('.nav_menu').toggleClass('open-nav');
});



jQuery('.close_btn a').click(function() {
    jQuery('.nav_menu').removeClass('open-nav');
});

jQuery('.lets_talk a, .close.enq-btn').click(function() {
    jQuery('body').toggleClass('enquiry-open');
});



const atrops = document.querySelectorAll(".my-atropos");
[].forEach.call(atrops, function (atrops) {
  const myAtropos = Atropos({
    el: atrops,
    // rest of parameters
    activeOffset: 0,
    shadowScale: 0,
    shadow:false,
    rotateYMax: 5,
    rotateXMax: 3,
    duration: 300,

    onEnter() {
      console.log("Enter");
    },
    onLeave() {
      console.log("Leave");
    },
    onRotate(x, y) {
      console.log("Rotate", x, y);
    },
  });
});

new WOW().init();

jQuery(document).ready(function() {
    jQuery('.text_scrolling').mousemove(function(e){
        const circle = document.getElementById("circle");
        //const halfCircleSize = circle.offsetHeight / 2;
    
        var offset = jQuery('.text_scrolling').offset();
        var relativeX = (e.pageX - offset.left);
        var relativeY = (e.pageY - offset.top);
        console.log(relativeX, relativeY);
        jQuery("#circle").css({"top": relativeY/2, "left": relativeX});
      });
    
});


  jQuery(document).ready(function() {
    jQuery('.bulb').click(function() {
        jQuery(this).toggleClass('lightup');
        jQuery('body').toggleClass('lightup');
    });
});

jQuery(document).ready(function () {
    if (jQuery(window).width() > 991) {
    jQuery(".image-animate").paroller();
    }
});


//mobile menu
var $menu = $('.Menu-list'),
    $item = $('.Menu-list-item'),
    w = $(window).width(), //window width
    h = $(window).height(); //window height

$(window).on('mousemove', function(e) {
  var offsetX = 0.5 - e.pageX / w, //cursor position X
      offsetY = 0.5 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of poster
      dx = e.pageX - w / 2, //@w/2 = center of poster
      theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetPoster = $menu.data('offset'),
      transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

  //get angle between 0-360
  if (angle < 0) {
    angle = angle + 360;
  }

  //poster transform
  $menu.css('transform', transformPoster);

  //parallax for each layer
  $item.each(function() {
    var $this = $(this),
        offsetLayer = $this.data('offset') || 0,
        transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

    $this.css('transform', transformLayer);
  });
});

const menuItems = document.querySelectorAll('.project-item');
const contentDivs = document.querySelectorAll('.single-projects');

menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const itemId = item.getAttribute('data-id');
    const contentDiv = document.getElementById(itemId);

    // Hide all content divs
    contentDivs.forEach((div) => {
      div.style.display = 'none';
    });

    // Show the clicked content div
    contentDiv.style.display = 'block';
  });
});

jQuery(".project-item").click(function(){
    jQuery(".project-details").addClass("show");
});
jQuery(".close-btn").click(function(){
    jQuery(".project-details").removeClass("show");
});



    


