/*
 Project Name :   Ladis Salon
 Author Company : Accesstheme
 Author Website : http://acesstheme.com/

1.Slider:
	*.Header-Slider1
	*.Client Say Slide
	*.Style Slide
	*.Offer Area Slider
	*.Brand logo Slider
	*.Brand logo Slider2
	*.Client Say Qutue Slider
	*.Related Protfolio Slides

2. CounterUp
3. Google Map
4. MagnificPopup
5. MagnificPopup Iframe
6. Sectionize-Control
7. Unitegallery
8. Protfolio-gallary
9.  Price Filer
10. Topbar Info
11. Animation WOW JS 
12. Scroll To Top & sticky Header
13. Team slider
14. Animation
15. Map
 */

jQuery(document).ready(function($){
    "use strict"
     // Header-Slider1
	if ($('.header-slider').length > 0) {
	     $('.header-slider').owlCarousel({
	       items: 1,
	       dots: false, 
	       nav: true,
	       loop: true,
	       // autoplay:true,	              
	       navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
	     });

	 }

	// CounterUp
	if (('.counter').length > 0) {
	  $('.counter').counterUp({
	        delay: 10,
	        time: 5000
	    });
	}


    // Client Say Slide
	if ($('.client-say-item-list').length > 0) {
	     $('.client-say-item-list').owlCarousel({
	       items: 1,
	       dots: false, 
	       nav: true,
	       loop: true,
	       navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
	       responsive:{
	       	     	360: {
					  nav: false,
					  dots: true,
					},
		       	768: {
					  nav: false,
					   dots: true,
					  
					},
				800: {
					  nav: true,
					   dots: false,
					},
				1000: {
					  nav: true,
					},
				}

	     });

 	}


    // Style Slide
	if ($('.style-slide').length > 0) {
	     $('.style-slide').owlCarousel({
	       items: 3,
	       margin: 10,
	       dots: false, 
	       nav: true,
	       loop: true,
	       navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
	     });

 	}

 	// Offer Area Slider
	if ($('.offer-slide').length > 0) {
		$('.offer-slide').owlCarousel({
			loop: true,
			dots: false,
			responsive: {
				300: {
					items: 1,
					dots: true,
				},
				480: {
					items: 2,
					dots: true,				
				},
				768: {
					items: 3,
					dots: true,
				},
				800: {
					items: 3,
					dots: true,
				},
				1000: {
					items: 5,
				}
			}
		});
	}

	// Brand logo Slider
	if ($('.logo-brand-list').length > 0) {
		$('.logo-brand-list').owlCarousel({
			loop: true,
			dots: false,
			responsive: {
				300: {
					items: 1,
					dots: true,
				},
				480: {
					items: 2,
					dots: true,
				},
				768: {
					items: 3,
					dots: true,
					
				},
				800: {
					items: 3,
					dots: false,
				},
				1000: {
					items: 5,
				}
			}
		});
	}

	// Brand logo Slider2
	if ($('.logo-brand-list2').length > 0) {
		$('.logo-brand-list2').owlCarousel({
			loop: true,
			dots: true,
		});
	}
	
	
	// Client Say Qutue Slider
	if ($('.client-say-qutue-list').length > 0) {
	     $('.client-say-qutue-list').owlCarousel({
	       items: 1,
	       dots: false, 
	       nav: true,
	       loop: true,
	       navText: ['<i class="fa fa-angle-right"></i>' , '<i class="fa fa-angle-left"></i>'],
	       responsive: {
				300: {
					nav: false
				},		
				480: {
					nav: true
				},
			}
	     });

	 }


	// Google Map
	if ($('#google-map').length > 0) {
		// This example adds a marker to indicate the position of Bondi Beach in Sydney,
		var pos = {
			lat: 40.735657,
			lng: -74.172367
		};
		var map = new google.maps.Map(document.getElementById('google-map'), {
			zoom: 12,
			center: pos,
			scrollwheel: false
		});
		var image = 'images/map-marker.png';
		var beachMarker = new google.maps.Marker({
			position: pos,
			map: map,
			icon: image
		});
		map.set('styles', [
			{
				featureType: 'Greyscale',
				stylers: [
					{
						saturation: -90
			},
					{
						gamma: 1.5
			}]
		}]);
	}

	// MagnificPopup
	$('.related-protfolio, .work-icon, .full-view, .blog-post-single-item').magnificPopup({
		delegate: '.full-size',
		type: 'image',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			easing: 'ease-in-out',
			duration: 300,
			opener: function(element) {
				return element.closest('.related-protfolio-single-slide, .single-work-item, .hair-dryer-image, .blog-post-single-item').find('img');
			}
		}
	});

	// MagnificPopup Iframe
	$('.full-size-film').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});


   // Related Protfolio Slides
	if ($('.related-protfolio-slides').length > 0) {
	     $('.related-protfolio-slides').owlCarousel({
	       items: 4,
	       dots: false, 
	       nav: true,
	       loop: true,
	       navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
		   responsive: {
				300: {
					items: 1,
					nav: false
				},
				768: {
					items: 3,
					nav: false
				},
				1000: {
					items: 4,
					nav: true
				}
			}
	     });

	 }

	 // Sectionize-Control
	if ($('select').length > 0) {
		$('select').selectize({
			create: true,
			sortField: {
				field: 'text',
				direction: 'asc'
			},
			dropdownParent: 'body'
		});
	}

	// Unitegallery
	if ($('#gallery').length > 0) {
		$('#gallery').unitegallery({
			gallery_theme: "compact",
			gallery_height: 620,
			thumb_width:168,
			thumb_height:111,
			thumb_color_overlay_effect: false,			
			strip_thumbs_align: "center",
			strippanel_padding_top: 30,
			strip_space_between_thumbs:30,
			slider_enable_arrows: true,
			slider_arrow_left_align_hor:"left",	
			slider_arrow_right_align_hor:"left",	

		});
	}


	// Protfolio-gallary
	if ($('#protfolio-gallary').length > 0) {
			$("#protfolio-gallary").unitegallery({				
				gallery_theme: "tiles",		
				tiles_col_width: 360,
				gallery_width:"100%",
				tiles_space_between_cols: 0,
				tile_enable_textpanel: true,			
		});

	}

	// Price Filer
	$('#price-filer').slider({
			range: true,
			values: [0, 70],

	});

	// Topbar Info
     $(".topbar-info").click(function(){
      $(".topbar-toggle").css('margin-right' , '210px');
      $(this).hide();
	 });
	 
	 $(".topbar-close").click(function(){
		$(".topbar-toggle").css('margin-right' , '-100px');
		$(".topbar-info").show();
	});

	// Animation WOW JS 
	 var e = new WOW({
	      boxClass: "wow",
	      animateClass: "animated",
	      offset: 100,
	      mobile: false,
	      live: !0,
	      callback: function(e) {}
	  });
	  e.init();

    
}); 
// End Ready function

// Scroll To Top & sticky Header
 $(window).scroll(function() {
	$('.animate').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + 400) {
			$(this).addClass($(this).data('animation')).addClass('animated');
		}
	});

	var shHeight = $('.topbar').height()+$('.sticky-header').height();
	var topOfWindow = $(window).scrollTop();
	if (shHeight < topOfWindow) {
		$('.sticky-header').addClass('sticky-navbar fadeInDown animated');
		$('header').css({
			paddingTop: $('.sticky-header').height()
		});
	}
	else {
		$('.sticky-header').removeClass('sticky-navbar fadeInDown animated');
		$('header').css({
			paddingTop: 0
		});
	}



});