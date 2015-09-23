$(document).ready(function() {
	var left = 200;
	var top = 200;
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

	$('#title_window').click(setupGame);

	function setupGame() {
		$('#title_window').hide();
		$('#end_window').hide();
		$('#game').append('<div id="circle"></div>');
		$('#game').append('<div id="enemy1"></div>');
		$('#game').append('<div id="enemy2"></div>');
		$('#game').append('<div id="enemy3"></div>');
		$('#game').append('<div id="enemy4"></div>');
		playGame();
	}

	function playGame() {
		$(document).keydown(function(key) {
			switch(parseInt(key.which,10)) {
				// Left arrow key pressed
				case 37:
					collisionDetect();
					if (left >= 100){
						$('#circle').animate({left: "-=100px"}, 'fast');				
						left -= 100;
					}
					break;
				// Up arrow pressed
				case 38:
					collisionDetect();
					if (top >= 100) {
						$('#circle').animate({top: "-=100px"}, 'fast');				
						top -= 100;
					}
					break;
				// Right arrow pressed
				case 39:
					collisionDetect();
					if (left <= 300) {
						$('#circle').animate({left: "+=100px"}, 'fast');				
						left += 100;
					}
					break;
				// Down arrow pressed 
				case 40:
					collisionDetect();
					if (top <= 300) {
						$('#circle').animate({top: "+=100px"}, 'fast');				
						top += 100;
					}
					break;
			}
		});

		var start = new Date;

		setInterval(function() {
			collisionDetect();
			$('#timer').text("Score: " + score);
			score = Math.round((new Date- start) / 1000);
			
			enemyMove(enemy1);
			enemyMove(enemy2);
			enemyMove(enemy3);
			enemyMove(enemy4);
		}, 1000);
	}

	function collisionDetect() {
		if ((left === enemy1.left) && (top === enemy1.top)) {
			gameOver();
		} 
		else if ((left === enemy2.left) && (top === enemy2.top)) { 
			gameOver();
		}
		else if ((left === enemy3.left) && (top === enemy3.top)) {
			gameOver();
		} 
		else if ((left === enemy4.left) && (top === enemy4.top)) {
			gameOver();
		}
	}

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

	function gameOver() {
		$('#timer').hide();
		$('#circle').hide();
		$('#enemy1').hide();
		$('#enemy2').hide();
		$('#enemy3').hide();
		$('#enemy4').hide();

		$('#game').append('<div id="end_window"><h1>Game Over!</h1><h2>Your score: ' + score + '</h2>');
		// Set left and top to arbitrary numbers so that the gameOver function ceases to be called
		left = 123;
		top = 123;

		$('#end_window').click(function() {
			location.reload();
		});
	}
});
