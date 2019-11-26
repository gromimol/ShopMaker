new WOW().init();	
$(document).ready(function () {

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

// Sticky header
// получить элемент
var myElement = document.querySelector("header");
// создать новый экземпляр Headroom
var headroom  = new Headroom(myElement);
// инициализация
headroom.init();
	
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
	})
})