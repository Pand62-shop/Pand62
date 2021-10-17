$(document).ready(function() {
	
	//-----------------------
	// About me Menu Item
	$('li.about-menu a').on('click', function() {
		// Smooth Scroll
		document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
	});
	
	//-----------------------
	// Marktplaats Menu Item
	$('li.markt-menu a').on('click', function() {
		// Smooth Scroll
		document.querySelector('.marktplaats').scrollIntoView({ behavior: 'smooth' });
	});
	
	//-----------------------
	// Foto's Menu Item
	$('li.fotos-menu a').on('click', function() {
		// Smooth Scroll
		document.querySelector('.fotos_hor').scrollIntoView({ behavior: 'smooth' });
	});
	
	//-----------------------
	// Home Menu Item
	$('.menu-wrapper .logo-img').on('click', function() {
		// Smooth Scroll
		document.querySelector('.home-anchor').scrollIntoView({ behavior: 'smooth' });
	});
	
	
	
	// Show Mobile Menu
	$('.mobile-menu-button-open').on('click', function() {
		showMobileMenu();
	});
	// Hide Mobile Menu
	$('.mobile-menu-button-closed').on('click', function() {
		hideMobileMenu();		
	});
	
	function showMobileMenu() {
		// hide menu
		$(".header .menu-wrapper").css({'display': 'block', 'height': 'auto'});				
		// hide bars, show times
		$('.mobile-menu-button-open').css({'display': 'none'});
		$('.mobile-menu-button-closed').css({'display': 'block'});
	}
	
	function hideMobileMenu() {
		// hide menu
		$(".header .menu-wrapper").css({'display': 'none', 'height': '0'});		
		// hide times, show bars
		$('.mobile-menu-button-closed').css({'display': 'none'});
		$('.mobile-menu-button-open').css({'display': 'block'});
	}
})


