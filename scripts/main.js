$(document).ready(function(){
    $("#nav1 a").click(function(){
    var navId = $(this).attr("href");
    $("body,html").animate({scrollTop: $(navId).offset().top}, "slow");
    return false;
   });

    $('#hov').foggy({
    	blurRadius: 2,
    	opacity: 0.8,
    	cssFilterSupport: true,
    });

    $('#hov').hover(function(){
    	$('#hov').foggy(false);
    });

    $('#hov').mouseleave(function(){
    	$('#hov').foggy(true);
    	// animate: 5000
    });
});