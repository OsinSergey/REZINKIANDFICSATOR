document.addEventListener("DOMContentLoaded", function() {

	function backToTop() {
		let button = $('.back-to-top');

		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 400) {
				button.fadeIn();

			} else {
				button.fadeOut();
			}
		});
		button.on('click', (e) => {

			e.preventDefault();
			$('html').animate({
				scrollTop: 0
			}, 1000);
		});

	}
	backToTop();
	let modalnav = $('.link-ham'),
	over = $('.overline'),
	closenav = $('.closed'),
	btnNav = $('.menu-btn');

btnNav.click(function () {
	over.show();
	$('html, body').css({
		overflow: 'hidden',
		height: '100%'
	});

});
modalnav.click(function () {
	over.hide();
	$('html, body').css({
		overflow: 'auto',
		height: 'auto'
	});

});
closenav.click(function () {
	over.hide();
	$('html, body').css({
		overflow: 'auto',
		height: 'auto'
	});

});

});
