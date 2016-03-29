$(document).ready(function () {
    $(window).scrollTop(0);

    var green ="#1abc9c";
    var black ="#2f3238"; 

    var navbar = $('.navbar-default');
    var banner = $('.banner');

    $('.chart').waypoint(function() {
          $(this).easyPieChart({
             animate: 2000,
             barColor: green,
             lineWidth: 6,
             lineCap: "round",
             scaleColor: black,
             trackColor: black
          });
        }, {
          triggerOnce: true,
          offset: 'bottom-in-view'
    });
    
    $('#grid').mixItUp({
        load: {
            sort: 'random'
        },
        animation: {
            effects: 'fade rotateY(-10deg)',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }
    });

    $('.parallax').scrolly({bgParallax: true});

    if (navbar.length > 0) {
        $(window).scroll(function() {
            var topScroll = $(window).scrollTop();
            if (topScroll >= 5) {
                navbar.removeClass('navbar-transparent');
            } else {
                navbar.addClass('navbar-transparent');
            }
        }).scroll();
    } else {
        navbar.removeClass('navbar-transparent');
    }

    $(window).resize(function() {
        if (banner.length > 0 ) {
            banner.height($( window ).height());
        } else if (banner.length > 0) {
            banner.height($( window ).height() * 0.7);
        }
    }).resize();

    /*--------- typed text ------------*/
    $(".site-sub-title").typed({
        strings: ["Front End Developer", "UI / UX Designer", "Beer lover"],
        typeSpeed: 100,
        loop: true
    });

    /*--------- add active class on menu ------------*/
    $('.navbar-nav li a').click(function()
    {
      $('.navbar-nav li').removeClass('active');
      $(this).parent().addClass('active');
    });

    
    /*------------ for menu to section -----------*/
    var $root = $('html, body');

    $('.navbar-nav li a').click(function () {
        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 900);

        return false;
    });

    // hide #back-top first
    $(".back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});