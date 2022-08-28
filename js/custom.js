/*====================================
            ScrollTop Position
====================================== */
const navbar = document.getElementById('navbar');
    // OnScroll event handler
    const onScroll = () => {

      // Get scroll value
      const scroll = document.documentElement.scrollTop

      // If scroll value is more than 0 - add class
      if (scroll > 0) {
        navbar.classList.add("scrolled-navbar");
      } else {
        navbar.classList.remove("scrolled-navbar");
      }
    }

    // Use the function
    window.addEventListener('scroll', onScroll);

    // Image move to left on scroll
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			$('.moveleft').css('left', - (scroll / 8)-200);
			$('.moveleft2').css('left', - (scroll / 8)+100);
			$('.movedown').css('bottom', - (scroll / 8)+100);
			$('.moveright').css('right', - (scroll / 8)+100);
		});
/*====================================
        Home Slider
====================================== */
$(document).ready(function(e) {     
	var sliderfor = $('.slider-for').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  dots:false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	
	var slidernav = $('.slider-nav').slick({
    slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
	});
	
	$('.custom-slick-arrow-right').on('click', function () {
        $('.slider-for').slick('slickNext');
		$('.slider-nav').slick('slickNext');
	});
    $('.custom-slick-arrow-left').on('click', function () {
        $('.slider-for').slick('slickPrev');
        $('.slider-nav').slick('slickPrev');
    });
});
/*====================================
        Team Slider
====================================== */
$(document).ready(function(e) {     
	var sliderfor = $('.slider-team-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots:false,
	  fade: true,
	  asNavFor: '.slider-team-nav'
	});
	
	var slidernav = $('.slider-team-nav').slick({
    slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-team-for',
	  dots: true,
	  arrows: false
	});
	
	$('.custom-slick-arrow-right').on('click', function () {
        $('.slider-team-for').slick('slickNext');
		$('.slider-team-nav').slick('slickNext');
	});
    $('.custom-slick-arrow-left').on('click', function () {
        $('.slider-team-for').slick('slickPrev');
        $('.slider-team-nav').slick('slickPrev');
    });
});
/*====================================
        Why Choose Slider
====================================== */
$(document).ready(function(e) {     
	$('.slider-why-choose').slick({
    infinite: true,
    slidesToShow: 1,
    dots: false,
    arrows: false
  });
	
	$('.custom-slick-arrow-right').on('click', function () {
		$('.slider-why-choose').slick('slickNext');
	});
    $('.custom-slick-arrow-left').on('click', function () {
        $('.slider-why-choose').slick('slickPrev');
    });
});
