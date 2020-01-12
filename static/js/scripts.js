var DEOTHEMES = DEOTHEMES || {};

(function($){
	"use strict";

	// Detect Browser Width
	(function () {
		if (Modernizr.mq('(min-width: 0px)')) {
			// Browsers that support media queries
			minWidth = function (width) {
				return Modernizr.mq('(min-width: ' + width + 'px)');
			};
		}
		else {
			// Fallback for browsers that does not support media queries
			minWidth = function (width) {
				return $window.width() >= width;
			};
		}
	})();

	DEOTHEMES.initialize = {

		init: function() {
			DEOTHEMES.initialize.scrollTo();
			DEOTHEMES.initialize.onepageNav();
			DEOTHEMES.initialize.scrollToTop();
			DEOTHEMES.initialize.flickitySlider();
			DEOTHEMES.initialize.counters();
			DEOTHEMES.initialize.isotopeFilter();
			DEOTHEMES.initialize.isotope();
			DEOTHEMES.initialize.mobileNavigation();
			DEOTHEMES.initialize.lightbox();
			DEOTHEMES.initialize.accordions();
			DEOTHEMES.initialize.stickySocials();
			DEOTHEMES.initialize.stickyFooter();
			DEOTHEMES.initialize.animate();			
			DEOTHEMES.initialize.contactForm();
			DEOTHEMES.initialize.detectMobile();
			DEOTHEMES.initialize.detectIE();
		},
		
		preloader: function() {
			$('.loader').fadeOut();
			$('.loader-mask').delay(350).animate({
				height: 0
			}).fadeOut('slow').addClass('preloader--loaded');
		},

		triggerResize: function() {
			$window.trigger("resize");
		},

		onepageNav: function() {
			$('#onepage-nav').on('click', 'li > a', function() {
				$("#navbar-collapse").collapse('hide');
			});
		},

		scrollTo: function() {
			$('.local-scroll').localScroll({
				offset: { top: -59 },
				duration: 700,
				easing: 'swing'
			});
		},

		scrollToTopScroll: function() {
			var scroll = $window.scrollTop();
			if (scroll >= 50) {
				$backToTop.addClass("show");
			} else {
				$backToTop.removeClass("show");
			}
		},

		scrollToTop: function() {
			$backToTop.on('click',function(){
				$('html, body').animate({scrollTop: 0}, 750 );
				return false;
			});
		},		

		flickitySlider: function() {
			var $gallery = $('.projects-slider')
			$gallery.imagesLoaded( function() {
				$gallery.flickity({
					cellAlign: 'center',
					contain: true,
					wrapAround: true,
					autoPlay: false,
					prevNextButtons: true,
					percentPosition: true,
					imagesLoaded: true,
					lazyLoad: 1,
					pageDots: false,
					selectedAttraction : 0.1,
					friction: 0.6,
					rightToLeft: false,
					arrowShape: 'M 30,50 L 55,75 L 60,70 L 40,50  L 60,30 L 55,25 Z',
				});
			});	
	
		},

		cookies: function() {
			window.cookieconsent.initialise({
				content: {
					header: 'Cookies used on the website!',
					message: 'We are using cookies to personalize content and ads to make our site easier for you to use.',
					dismiss: 'Confirm',
					allow: 'Allow cookies',
					deny: 'Decline',
					link: 'Learn more',
					href: 'http://cookiesandyou.com',
					close: '&#x274c;',
				},
				cookie: {
					expiryDays: 365
				},
				position: 'bottom'
			});
			$(".cc-banner").wrapInner("<div class='cc-container container'></div>");
		},

		counters: function() {
			$('.results__number').appear(function() {
				$(this).countTo({
					speed: 3000,
					refreshInterval: 60,
					formatter: function (value, options) {
						return value.toFixed(options.decimals);
					}
				});
			});
		},		

		stickyNavbar: function() {
			var $navSticky = $('.nav--sticky');

			if ($window.scrollTop() > 190) {
				$navSticky.addClass('sticky');
			} else {
				$navSticky.removeClass('sticky');
			}

			if ($window.scrollTop() > 200) {
				$navSticky.addClass('offset');
			} else {
				$navSticky.removeClass('offset');
			}

			if ($window.scrollTop() > 500) {
				$navSticky.addClass('scrolling');
			} else {
				$navSticky.removeClass('scrolling');
			}
		},

		mobileNavigation: function() {
			var $navDropdown = $('.nav__dropdown');
			var $navDropdownMenu = $('.nav__dropdown-menu');

			$('.nav__dropdown-trigger').on('click', function() {
				var $this = $(this);
				$this.toggleClass('nav__dropdown-trigger--is-open');
				$this.next($navDropdownMenu).slideToggle();
				$this.attr('aria-expanded', function(index, attr){
					return attr == 'true' ? 'false' : 'true';
				});
			});

			if ( $html.hasClass('mobile') ) {
				$body.on('click',function() {
					$navDropdownMenu.addClass('hide-dropdown');
				});

				$navDropdown.on('click', '> a', function(e) {
					e.preventDefault();
				});

				$navDropdown.on('click',function(e) {
					e.stopPropagation();
					$navDropdownMenu.removeClass('hide-dropdown');
				});
			}
		},

		isotopeFilter: function () {
			let $grid = $('#project-grid, #masonry-grid');
			$('.project-filter').on( 'click', 'a', function(e) {
				e.preventDefault();
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
				$('.project-filter a').removeClass('active');
				$(this).closest('a').addClass('active');
			});
		},

		isotope: function () {
			let $grid = $('#project-grid');
			$grid.imagesLoaded( function() {
				$grid.isotope({
					itemSelector: '.grid-item',
					layoutMode: 'fitRows',
					percentPosition: true,
					filter: '.featured'
				});
			});
		},

		lightbox: function() {
			$('.lightbox-img, .lightbox-video').magnificPopup({
				callbacks: {
					elementParse: function(item) {
					if(item.el.context.className == 'lightbox-video') {
							item.type = 'iframe';
						} else {
							item.type = 'image';
						}
					}
				},
				type: 'image',
				closeBtnInside:false,
				fixedContentPos: false,
				gallery: {
					enabled:true
				},
				image: {
					titleSrc: 'title',
					verticalFit: true
				}
			});

			// Single video lightbox
			$('.single-video-lightbox').magnificPopup({
				type: 'iframe',
				closeBtnInside:false,
				removalDelay: 500,
				callbacks: {
					beforeOpen: function() {
						// just a hack that adds mfp-anim class to markup 
						this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
						this.st.mainClass = this.st.el.attr('data-effect');
					},
				},
				fixedContentPos: false,
			});
		},

		accordions: function() {
			var $accordion = $('.accordion');
			function toggleChevron(e) {
				$(e.target)
					.prev('.accordion__heading')
					.find("a")
					.toggleClass('accordion--is-open accordion--is-closed');
			}
			$accordion.on('hide.bs.collapse', toggleChevron);
			$accordion.on('show.bs.collapse', toggleChevron);
		},

		stickySocials: function() {
			var $stickyCol = $('.sticky-col');
			if($stickyCol) {
				$stickyCol.stick_in_parent({
					offset_top: 100
				});
			}
		},

		stickyFooter: function() {
			var $footer = $('.footer'),
					$footerPlaceholder = $('.footer-placeholder'),
					footerHeight = $footer.height();

			if ( ! minWidth(992) ) {
				$footerPlaceholder.height(0);
				return;
			}		
			
			$footerPlaceholder.height(footerHeight);			
		},

		animate: function() {
			$('.animate').appear(function () {
				$(this).addClass('animate--animated');
			}, { accY: -100 });
		},

		

		detectMobile: function() {
			if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
				$html.addClass("mobile");
			}
			else {
				$html.removeClass("mobile");
			}
		},

		detectIE: function() {
			if (Function('/*@cc_on return document.documentMode===10@*/')()) { $html.addClass("ie"); }
		}
	};

	DEOTHEMES.documentOnReady = {

		init: function() {
			DEOTHEMES.initialize.init();
		}

	};

	DEOTHEMES.windowOnLoad = {

		init: function() {			
			DEOTHEMES.initialize.preloader();		
			DEOTHEMES.initialize.triggerResize();
			DEOTHEMES.initialize.isotope();
			DEOTHEMES.initialize.cookies();
		}

	};

	DEOTHEMES.windowOnResize = {

		init: function() {
			DEOTHEMES.initialize.stickyFooter();
		}

	}

	DEOTHEMES.windowOnScroll = {

		init: function() {
			DEOTHEMES.initialize.scrollToTopScroll();
			DEOTHEMES.initialize.stickyNavbar();
		}

	}

	var $window = $(window),
			$html = $('html'),
			$body = $('body'),
			$backToTop = $('#back-to-top'),
			minWidth;

	$(document).ready(DEOTHEMES.documentOnReady.init);
	$window.on('load', DEOTHEMES.windowOnLoad.init);
	$window.on('resize', DEOTHEMES.windowOnResize.init);
	$window.on('scroll', DEOTHEMES.windowOnScroll.init);

})(jQuery);