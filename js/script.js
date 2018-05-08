$(document).ready(function(){

	/* if ($("html").scrollTop > 150) {
		console.log("OK");
		//$("header").css("position","fixed");
	}
	else {
		//$("header").css("position","relative");
	}; */

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
		//$("html").animate({scrollTop: 1500}, 1000);
		$('html, body').animate({
			scrollTop: $("div#about").offset().top
		}, 1000)
	});

	$("#link-contact").click(function(){
		//$("html").animate({scrollTop: 2050}, 1000);
		$('html, body').animate({
			scrollTop: $("div#contact").offset().top
		}, 1000)
	});

	$("#banner img").on("mouseover", function(){
		//console.log("OK!");
		$("#banner img").addClass("estilo");
	}).on("mouseout", function(){
		$("#banner img").removeClass("estilo");
	});

	$("#contact input.btn").click(function(){
		alert("Mensagem enviada!");
	});

	// $("#portfolio img").on("mouseover", function(){
	// 	$(this).css("width","320px");
	// });

	// $("#portfolio img").on("mouseout", function(){
	// 	$(this).css("width","300px");
	// });

	$("#portfolio .img-mini").click(function(){

		var image = $(this).attr("src");

		// console.log(image);
		
		$("#img-large").attr({
			"src": image
		});

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

	$('#page-up').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000)
	});

});