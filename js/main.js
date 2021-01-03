$(document).ready(function(){
	$(".header__burger").click(function(event) {
		$(".header__burger, nav").toggleClass("active");
		$("body").toggleClass("lock");
	});

	// Fixed header
	let header = $(".header");
	let headerBody = $(".header-body");
	let headerBodyH = headerBody.innerHeight();
	let scrollPos = $(window).scrollTop()

	$(window).on("scroll load resize", function() {
		headerBodyH = headerBody.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > headerBodyH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
		
	});


	// Smoth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		$("body").removeClass("lock");
		$(".header__burger, nav").removeClass("active");
		$("html, body").animate({

			scrollTop: elementOffset - 50

		},1000);
		console.log(elementOffset);
		console.log(elementID);
	})

	

	
})

new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	

	zoom: {
		maxRatio: 5,
		minRatio: 1,
	},

	// Миниатюры
	thumbs: {
		swiper: {
			el: '.image-mini-slider',
			slidesPerView: 4,
			spaceBetween: 15,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},

			breakpoints: {
				280: {
					slidesPerView: 2,
				},
				680: {
					slidesPerView: 4,
				}
			}
	
		}
	},


});


