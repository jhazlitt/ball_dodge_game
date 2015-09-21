$(document).ready(function() {
	var left = 0;
	var top = 0;
	$('#circle').html(left + "," + top);
	$(document).keydown(function(key) {
		switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				if (left >= 100){
					$('#circle').animate({left: "-=100px"}, 'fast');				
					left -= 100;
					$('#circle').html(left + "," + top);
				}
				break;
			// Up arrow pressed
			case 38:
				if (top >= 100) {
					$('#circle').animate({top: "-=100px"}, 'fast');				
					top -= 100;
					$('#circle').html(left + "," + top);
				}
				break;
			// Right arrow pressed
			case 39:
				if (left <= 400) {
					$('#circle').animate({left: "+=100px"}, 'fast');				
					left += 100;
					$('#circle').html(left + "," + top);
				}
				break;
			// Down arrow pressed 
			case 40:
				if (top <= 400) {
					$('#circle').animate({top: "+=100px"}, 'fast');				
					top += 100;
					$('#circle').html(left + "," + top);
				}
				break;
		}
	});
	//Using this part just as a test:
	$('div').click(function() {
		$('div').animate({left: "-=10px"}, 'fast');
		//$('div').fadeOut('fast');
	});
});
