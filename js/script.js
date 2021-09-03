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
		document.querySelector('.fotos').scrollIntoView({ behavior: 'smooth' });
	});
	
	
})


