document.addEventListener("DOMContentLoaded", function() {
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
