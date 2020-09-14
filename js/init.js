/*
 * Copyright (c) 2020 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	shane_tm_progress();
	shane_tm_vcard_menu();
	shane_tm_cursor();
	shane_tm_partners();
	shane_tm_kenburn_slider();
	shane_tm_imgtosvg();
	shane_tm_popup();
	shane_tm_data_images();
	shane_tm_portfolio();
	shane_tm_isotope();
	shane_tm_contact_form();
	shane_tm_ripple();
	shane_tm_videoplayer();
	
	jQuery(window).on('resize',function(){
		shane_tm_isotope();
		shane_tm_portfolio();
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.shane_tm_preloader').addClass('loaded');
    }, 1000);
		setTimeout(function(){
        shane_tm_isotope();
    }, 5000);
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------   PROGRESS BAR    -------------------
// -----------------------------------------------------

function shane_tm_progress(){
	
	"use strict";
	
	var list	= jQuery('.shane_tm_skills ul li');
	
	list.each(function(){
		var element		= jQuery(this);
		var progressVal	= element.find('.progress').data('value');
		var progressBar	= element.find('.bar');
		progressBar.css({width:progressVal+'%'});
	});
}

// -----------------------------------------------------
// ---------------   VCARD MENU    ---------------------
// -----------------------------------------------------

function shane_tm_vcard_menu(){
	
	"use strict";
	
	var list	 = jQuery('.shane_tm_menu ul li');
	var vContent = jQuery('.shane_tm_all_wrap');
	var vSection = jQuery('.shane_tm_section');
	
	list.on('click',function(){
		var element = jQuery(this);
		var myHref	= element.find('a').attr('href');
		if(!element.hasClass('active')){
			list.removeClass('active');
			element.addClass('active');
			vSection.removeClass('active');
			vContent.find(myHref).addClass('active');
		}
	});
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function shane_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function shane_tm_partners(){
	
	"use strict";
	
		var carouse1	= jQuery('.shane_tm_partners .owl-carousel');
		
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
		
		carouse1.owlCarousel({
			loop: true,
			items: 5,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:2},
				768:{items:3},
				1040:{items:3},
				1200:{items:4},
				1600:{items:4},
				1920:{items:5}
			}
		});
	
		var carouse2			= jQuery('.shane_tm_testimonials .owl-carousel');
	
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
	
		carouse2.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:1},
				1040:{items:2},
				1200:{items:2},
				1600:{items:2},
				1920:{items:2}
			}
		});
		shane_tm_imgtosvg();
	
		var carouse3			= jQuery('.shane_tm_sertificate .owl-carousel');
	
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
	
		carouse3.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:1},
				1040:{items:2},
				1200:{items:2},
				1600:{items:2},
				1920:{items:2}
			}
		});
	}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function shane_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.shane_tm_fixed_image .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/portfolio/7.jpg' },
				{ src: 'img/portfolio/8.jpg' },
				{ src: 'img/portfolio/5.jpg' },
			]

		});
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function shane_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function shane_tm_popup(){
		"use strict";
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		});
	}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

wow = new WOW({
    animateClass: 'animated',
    offset: 10
});
wow.init();

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function shane_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function shane_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.shane_tm_works .portfolio_list ul');
		var filter		 = jQuery('.shane_tm_works .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function shane_tm_isotope(){
	
	"use strict";
	
	var masonry = $('.masonry');
	if($().isotope){
		masonry.each(function(){
			$(this).isotope({
			  itemSelector: '.masonry_item',
			  masonry: {

			  }
			});
		});
	}
	
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function shane_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function shane_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function shane_tm_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}
