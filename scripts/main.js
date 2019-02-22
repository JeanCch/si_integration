window.addEventListener('scroll', function(e) {

	if(window.scrollY > 10){
		$('.scroll_Text1').addClass('opacityHidden');
		//$('.scroll_Text1').css('opacity',1).animate({opacity:0}, 1000);
	}
	if(window.scrollY < 10  ){
		$('.scroll_Text1').removeClass('opacityHidden');
	}

	lastScroll = window.scrollY;
})





window.addEventListener('scroll', function(e) {

	if(window.scrollY > 700){

		$('.scroll_Text1_1').addClass('opacityHidden');
		//$('.scroll_Text1').css('opacity',1).animate({opacity:0}, 1000);
	}
	if(window.scrollY < 700){
		$('.scroll_Text1_1').removeClass('opacityHidden');
	}

	lastScroll = window.scrollY;
})




let lastScroll2 = 100;

window.addEventListener('scroll', function(e) {

	if(window.scrollY >= 1200 ){
		$('.scroll_Text2').addClass('opacityHidden');
		//$('.scroll_Text2').css('opacity',1).animate({opacity:0}, 1000);
	}
	if(window.scrollY <= 1200 ){
		$('.scroll_Text2').removeClass('opacityHidden');
	}

	lastScroll2 = window.scrollY;

})

window.addEventListener('scroll', function(e) {

	if(window.scrollY > 2050){

		$('.scroll_Text3').addClass('opacityHidden');
		//$('.scroll_Text1').css('opacity',1).animate({opacity:0}, 1000);
	}
	if(window.scrollY < 2050){
		$('.scroll_Text3').removeClass('opacityHidden');
	}

	lastScroll = window.scrollY;
})

window.addEventListener('scroll', function(e) {

	if(window.scrollY > 3500){

		$('.scroll_Text4').addClass('opacityHidden');
		//$('.scroll_Text1').css('opacity',1).animate({opacity:0}, 1000);
	}
	if(window.scrollY < 3500){
		$('.scroll_Text4').removeClass('opacityHidden');
	}

	lastScroll = window.scrollY;
})

$(function(){
$(window).scroll(
function () {//Au scroll dans la fenetre on déclenche la fonction
if ($(this).scrollTop() > 60) { //si on a défini de plus de 60 px du haut vers le bas
$('#Barre_achat').addClass("fixtop"); //on ajoute la classe "fixtop" à <div id="barre_achat">
} else {
$('#Barre_achat').removeClass("fixtop");//sinon on retire la classe "fixtop" à <div id="barre_achat">
					}
				}
			);
		});

	
