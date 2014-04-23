
$(document).ready(function () {
	$(this).scrollTop(0);
	var green ="#1abc9c";
	var black ="#2f3238"; 
	$('.chart').easyPieChart({
        //your configuration goes here
         barColor: green,
         lineWidth: 4,
         lineCap: "round",
         scaleColor: black,
         trackColor: black,
         animate: false
    });

    $('#Grid').mixitup();
    $('.parallax').scrolly({bgParallax: true});

		// for reveal
    	var config = { init:false};
 
    	window.scrollReveal = new scrollReveal(config);
   
        scrollReveal.init();
    
	/*----------- change class when scroll ----------*/
	// $('.chart').data('easyPieChart').disableAnimation();
	$('#about-content').waypoint(function() {

			
	});

	// $('#about-content').waypoint(function(direction) {
	//   $('.navbar-nav li').removeClass('active');
	//   $('.about').addClass('active');
	// });

	// $('#portfolio-content').waypoint(function(direction) {
	//  $('.navbar-nav li').removeClass('active');
	//  $('.portfolio').addClass('active');
	// });

	// $('#contact-content').waypoint(function(direction) {
	//   $('.navbar-nav li').removeClass('active');
	//   $('.contact').addClass('active');
	// });

	// $('section').waypoint(function() {
	//   $('ul li').removeClass('active');
	//   var currentIndex = $('div').index($(this));
	//   $('ul li:eq(' + currentIndex + ')').addClass('active');
	// },
	// {
	//   offset: 'bottom-in-view'
	// });

	// $(window).scroll(function() {
	//     var windscroll = $(window).scrollTop();
	//     if (windscroll >= 100) {
	//         $('section').each(function(i) {
	//             if ($(this).position().top <= windscroll - 20) {
	//                 $('nav li.active').removeClass('active');
	//                 $('nav li').eq(i).addClass('active');
	//             }
	//         });

	//     } else {

	//         $('nav').removeClass('fixed');
	//         $('nav li.active').removeClass('active');
	//         $('nav li:first').addClass('active');
	//     }

	// }).scroll();

	var topMenu = $(".navbar-nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find(".navbar-nav li"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
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

	/*--------- for contact button to contact section ------------*/
	var $root = $('html, body');

	$('.banner a').click(function () {

	    $root.animate({

	        scrollTop: $($.attr(this, 'href')).offset().top

	    }, 900);

	    return false;
	});

	/*----------- home menu --------------- */
	$(function () {
		// scroll body to 0px on click
		$('.home-content').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
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