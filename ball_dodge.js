$(document).ready(function() {
	var left = 200;
	var top = 200;
	$('#circle').html(left + "," + top);

	// Check for any arrow keys pressed and move the circle
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
				if (left <= 300) {
					$('#circle').animate({left: "+=100px"}, 'fast');				
					left += 100;
					$('#circle').html(left + "," + top);
				}
				break;
			// Down arrow pressed 
			case 40:
				if (top <= 300) {
					$('#circle').animate({top: "+=100px"}, 'fast');				
					top += 100;
					$('#circle').html(left + "," + top);
				}
				break;
		}
	});

	// score will increase by one for each second over the start time
	var start = new Date;
	var score = 0;

	var enemy1 = {
		name: "enemy1",
		left: 0,
		top: 0
	};
	
	var enemy2 = {
		name: "enemy2",
		left: 0,
		top: 400		
	};

	var enemy3 = {
		name: "enemy3",
		left: 400,
		top: 0
	};

	var enemy4 = {
		name: "enemy4",
		left: 400,
		top: 400
	};

	setInterval(function() {
		$('#timer').text("Score: " + score);
		score = Math.round((new Date- start) / 1000);
		
		enemyMove(enemy1);
		enemyMove(enemy2);
		enemyMove(enemy3);
		enemyMove(enemy4);
	}, 1000);
	
	function enemyMove(enemy) {
		// possibleDirections says where the enemy is allowed to move.  direction indicates which way the enemy will actually go
		var possibleDirections = [];

		// Top left corner
		if ((enemy.left === 0) && (enemy.top === 0)){
			possibleDirections = ['right','down'];	
		}
		// Top right corner
		else if ((enemy.left === 400) && (enemy.top === 0)){
			possibleDirections = ['left','down'];
		}
		// Bottom left corner
		else if ((enemy.left === 0) && (enemy.top === 400)){
			possibleDirections = ['up','right'];
		}
		// Bottom right corner
		else if ((enemy.left === 400) && (enemy.top === 400)){
			possibleDirections = ['up','left'];
		}
		// Top edge
		else if (enemy.top === 0){
			possibleDirections = ['left','down','right'];
		}
		// Right edge
		else if (enemy.left === 400){
			possibleDirections = ['left','up','down'];
		}
		// Bottom edge
		else if (enemy.top === 400){
			possibleDirections = ['up','left','right'];
		}
		// Left edge
		else if (enemy.left === 0){
			possibleDirections = ['up','down','right'];
		}
		else {
			possibleDirections = ['up','down','left','right'];
		}
				
		direction = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
		
		if (direction === 'up') {
			$('#' + enemy.name + '').animate({top: "-=100px"}, 'fast');
			enemy.top -= 100;
		}
		else if (direction === 'right') {
			$('#' + enemy.name + '').animate({left: "+=100px"}, 'fast');
			enemy.left += 100;
		}	
		else if (direction === 'down') {
			$('#' + enemy.name + '').animate({top: "+=100px"}, 'fast');
			enemy.top += 100;
		}
		else if (direction === 'left') {
			$('#' + enemy.name + '').animate({left: "-=100px"}, 'fast');
			enemy.left -= 100;
		}
	}
});
