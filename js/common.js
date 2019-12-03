new WOW().init();	
$(document).ready(function () {

$('.mob-btn').on('click',function () {
	$('body').addClass('menu-open');
});
$('.menu-overlay').on('click',function () {
	$('body').removeClass('menu-open');
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$('.header').addClass('header--invisible');
	} else {
		$('.header').removeClass('header--invisible');
	}
});



// only for showing thanks block after send form.
$('#login .btn, #password .btn').on('click',function (e) {
	e.preventDefault();

	$(this).closest('.popup__content').addClass('active');

	setTimeout(function () {
		$('.popup__content').removeClass('active');
		$('#overlay').hide();
		$('body').removeClass('noscroll');
		$('.popup').removeClass('active');
	}, 3000)
})

// popup
$('.js-popup').on('click',function (e) {
	e.preventDefault();

	let dataId = $(this).attr('data-id');
	$('#overlay').show();
	$('body').addClass('noscroll');
	$('.popup').removeClass('active');
	$('#' + dataId).addClass('active');
})

$('.js-close, #overlay').on('click',function (e) {
	e.preventDefault();

	$('#overlay').hide();
	$('body').removeClass('noscroll');
	$('.popup').removeClass('active');
})

// when submit success. Example, without  ajax
$('.btn-container .btn').on('click',function (e) {
	e.preventDefault();

	$('.touch-form__thanks').addClass('active');
	setTimeout(function () {
		$('.touch-form__thanks').removeClass('active')
	}, 3000)
})


	
// input
$('.input__field').change(function() {
	var $this = $(this);
	var $thisInput = $this.find('input');        
	if ($this.val() !== "") {
		$this.addClass('input--filled');
	} else {
		$this.removeClass('input--filled');
	}
});

	// same height for column
	function maxHeightFunc(el){
		var maxHeight = 0; 
		$(el).each(function(){ 
			if ($(this).height() > maxHeight) { 
				maxHeight = $(this).height();
			}
		});
		return $(el).height(maxHeight);
	};

	maxHeightFunc($('.column'));
	maxHeightFunc($('.find-block__subtitle'));

	// slider

	$('.main-screen-slider').slick({
		dots: true,
		nextArrow: '<span class="next-slide"><svg width="18" height="12" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:avocode="https://avocode.com/" viewBox="0 0 18 12"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Rectangle 5 copy</title><path d="M11.21912,1.21251l1.2155,-1.22355l5.57592,5.60911l-0.39959,0.4019l0.39959,0.40181l-5.57592,5.60882l-1.2155,-1.2234l3.89925,-3.92244h-15.11832v-1.72951l15.1183,0z" fill="currentColor" fill-opacity="1"></path></g></g></svg></span>',
		prevArrow: '<span class="prev-slide"></span>'
	});

	 // Счетчик слайдов
	 (function () {

	 	var $slider = $('.main-screen-slider');

	 	if ($slider.length) {
	 		var currentSlide;
	 		var slidesCount;
	 		var sliderCounter = $('.slider__number');

	 		var updateSliderCounter = function(slick, currentIndex) {
	 			currentSlide = slick.slickCurrentSlide() + 1;
	 			sliderCounter.text(currentSlide);

  	};

  	$slider.on('init', function(event, slick) {
  		// $slider.append(sliderCounter);
  		updateSliderCounter(slick);
  	});

  	$slider.on('beforeChange', function(event) {
  		$(sliderCounter).addClass('opacity');
  	});
  	$slider.on('afterChange', function(event, slick, currentSlide) {
  		$(sliderCounter).removeClass('opacity');
  		updateSliderCounter(slick, currentSlide);
  	});

  }
})();


	$('.themes-slider').slick({
		prevArrow: '<span class="main-slider__arrow main-slider__prev"></span>',
		nextArrow: '<span class="main-slider__arrow main-slider__next"></span>',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		responsive: [
		{
			breakpoint: 990,
			settings: {
				autoplay: true,
				arrows: false,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 568,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}
		]
	});

	$('.main-slider').slick({
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 2000,
		prevArrow: '<span class="main-slider__arrow main-slider__prev"></span>',
		nextArrow: '<span class="main-slider__arrow main-slider__next"></span>',
		responsive: [
		{
			breakpoint: 990,
			settings: {
				// autoplay:true,
				autoplaySpeed: 5000,
				speed: 700
			}
		}
		]

	});

	// themes-link
	$('#themes-link').on('click',function (e) {
		e.preventDefault();

		$('.main-slider').slick('slickGoTo', 2)
	})

	// menu
	$('.menu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.header__right').toggleClass('active');
	})

	// show Like with delay
	setTimeout(function() {
		$('.slick-active .like').addClass('active');
	}, 1800);


	// show column in price table
	$('.show-col__btn').on('click', function() {
		if($('#show').prop('checked') === true){
			$('.option__status__black').show();
		}else{
			$('.option__status__black').hide();
		}
	})
	
	// Show features on mobile
	$('.all-features').on('click',function(e) {
		e.preventDefault();
		$(this).hide().next('.features__block').show();
	});

	// select
	$('.select').on('click','.placeholder',function(){
		var parent = $(this).closest('.select');
		if ( ! parent.hasClass('is-open')){
			parent.addClass('is-open');
			$('.select.is-open').not(parent).removeClass('is-open');
		}else{
			parent.removeClass('is-open');
		}
	}).on('click','.select__list > li',function(){
		var parent = $(this).closest('.select');
		parent.removeClass('is-open').find('.placeholder').html( $(this).html() );
		parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	});
})