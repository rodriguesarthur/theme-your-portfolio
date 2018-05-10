$(document).ready(function(){

	$(window).scroll(function(){
		if ($(document).scrollTop() > 300 ) {
			$('#box-btn-up').css('bottom', '30px');
		} else {
			$('#box-btn-up').css('bottom','-100px');
		};
	});

	$('#box-btn-up').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$("header h1").click(function(){
		$("html").animate({scrollTop: 0}, 1000);
	});

	$("#link-portfolio").click(function(){
		//$("html").scrollTop(750);
		//$("html").animate({scrollTop: 700}, 1000);
		$('html, body').animate({
			scrollTop: $("div#portfolio").offset().top
		}, 1000)
	});

	$("#link-about").click(function(){
		$('html, body').animate({
			scrollTop: $("div#about").offset().top
		}, 1000)
	});

	$("#link-contact").click(function(){
		$('html, body').animate({
			scrollTop: $("div#contact").offset().top
		}, 1000)
	});

	$("#banner img").on("mouseover", function(){
		$("#banner img").addClass("estilo");
	}).on("mouseout", function(){
		$("#banner img").removeClass("estilo");
	});

	$("#contact input.btn").click(function(){
		alert("Mensagem enviada!");
	});

	$("#portfolio .img-mini").click(function(){

		var image = $(this).attr("src");

		// console.log(image);
		
		$("#img-large").attr({
			"src": image
		});

		$('html, body').animate({
			scrollTop: $('img#img-large').offset().top
		}, 1000)

	});

	$("#btn-bars").click(function(){
		$('header').toggleClass('open-menu');
	});

	$("#link-portfolio-mobile").click(function(){
		$('html, body').animate({
			scrollTop: $("div#portfolio").offset().top
		}, 1000)
		$('header').removeClass('open-menu');
	});

	$("#link-about-mobile").click(function(){
		$('html, body').animate({
			scrollTop: $("div#about").offset().top
		}, 1000)
		$('header').removeClass('open-menu');
	});

	$("#link-contact-mobile").click(function(){
		$('html, body').animate({
			scrollTop: $("div#contact").offset().top
		}, 1000)
		$('header').removeClass('open-menu');
	});

	$('#mask-mobile').click(function(){
		$('header').removeClass('open-menu');
	});

	$('#name-top').click(function(){
		$('header').removeClass('open-menu');
	});

});