jQuery(document).ready(function () {
    
    /*
    $('.navbar-collapse').on('shown.bs.collapse', function() { alert('shown'); });
    $('.navbar-collapse').on('hidden.bs.collapse', function() { alert('hidden'); });
    */
    
    // for hover dropdown menu
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });
    /* slick slider call */
    $('.slick_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
				dots: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
				dots: true
            }
        }]
    });
    
    $('.sponsors_slick').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]        
    });
    
    $('.columnist_slick').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]        
    });    
    
    
    $('.peoplespick_slick').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        },        
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    }); 
    
    
    //Check to see if the window is top if not then display button
    jQuery(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(".search_icon").click(function () {
        
		if ($('#nav_search_form').is(":visible")) {
			$('#nav_search_form').fadeOut();
		} else {
			$('#nav_search_form').fadeIn();
		}
        $("i", $(".search_icon")).toggleClass("fa-search fa-close");
		$(".search_icon").toggleClass("closing");        
        /*
		if ($('.search_bar').is(":visible")) {
			$('.search_bar').fadeOut();
		} else {
			$('.search_bar').fadeIn();
		}
        $("i", this).toggleClass("fa-search fa-close");
		$(this).toggleClass("closing");
        */
    });
	/*
    $(document).on('click', '.fa-close', function() {
        $('.search_bar').fadeOut();
    });
	*/
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: false
});
wow.init();

jQuery(window).load(function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(100).css({
        'overflow': 'visible'
    }); 
    

    $( "img" ).each(function() {
        if((typeof this.naturalWidth != "undefined" &&
            this.naturalWidth == 0 ) 
            || this.readyState == 'uninitialized' ) {
            $(this).attr('src', 'images/duwun-no-image-540x265.png');
        }  
        /*
        $(this).on( "error", function() {
            alert('found img err');        
            //$( this ).attr( "src", "images/duwun-no-image-540x265.png" );
        });
        */
    });    
});