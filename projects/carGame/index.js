'use strict';

(function() {
	var vendors = ['webkit', 'moz'];
	for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
		var vp = vendors[i];
		window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
		window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
								   || window[vp+'CancelRequestAnimationFrame']);
	}
	if (!window.requestAnimationFrame || !window.cancelAnimationFrame) {
		var lastTime = 0;
		window.requestAnimationFrame = function(callback) {
			var now = new Date().getTime();
			var nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function() { callback(lastTime = nextTime); },
							  nextTime - now);
		};
		window.cancelAnimationFrame = clearTimeout;
	}
	function randomWithRange(min, max) {
		var range = Math.abs(max - min) + 1;
		var r = (Math.random() * range) + (min <= max ? min : max);
		return (r ? r : randomWithRange(min, max))
	}

	// 小车的数据
	var car = {
		img: 'car.png',
		x: 0,
		y: 0,
		width: 0,
		height: 0
	}
	var move = {
		inc: 0,
		x: 0,
		y: 0,
	    speed: 1,
	    friction: 1
	}
	var f41;
	var carImg = new Image()
	carImg.onload = function() {
		car.width = this.width
		car.height = this.height
		car.y = contextHeight - car.height - move.y
		road.width = car.width * 4 + 10
		road.x = contextWidth / 2 - road.width / 2
		f41 = road.width / 4
		car.x = contextWidth / 2 - f41 // car.width / 2
		car._x = car.x
		car._y = car.y
		for (var j = -10; j < contextHeight / 50; j++) {
			for (var i = 1; i <= 3; i++) {
				road.zebraCrossing.push([road.x + f41 * i, j * 60, 2, 40])
			}
		}
	}
	carImg.src = car.img
	var carCorner = 6
	var enemySrc = (function() {
		var r = []
		for (var i = 1; i <= 12; i++) {
			r.push({
				width: 0,
				height: 0,
				img: 'enemy'+i+'.png'
			})
		}
		return r
	}())
	var enemys = []
	for (var i = enemySrc.length - 1; i >= 0; i--) {
		enemySrc[i].imgObj = new Image()
		enemySrc[i].imgObj.onload = (function(obj) {
			return function() {
				obj.width = this.width
				obj.height = this.height
			}
		})(enemySrc[i])
		enemySrc[i].imgObj.src = enemySrc[i].img
	}

	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')
	var contextWidth = canvas.width
	var contextHeight = canvas.height

	var road = {
		img: new Image(),
		direction: 1,
		path: [],
		meadowI: 0,
		meadows: [],
		zebraCrossing: [],
		zebraCrossingI: 0,
		meters: 0,
		width: 0
	}
	road.img.src = 'roads.png'
	road.img.onload = function() {
		var x = Math.ceil(contextWidth / this.width)
		var y = Math.ceil(contextHeight / this.height)
		for (var i = -1; i < y; i++) {
			for (var j = 0; j < x; j++) {
				road.meadows.push([j*this.width, i*this.height, this.width, this.height])
			}
		}
		init()
		listener()
	}

	var frameFunc;

	function init() {
		var _random = Math.ceil(randomWithRange(-1, enemySrc.length + 1))
		var _img = enemySrc[((_random+0) >= 0 ? _random : 1)]
		var _index = Math.floor(randomWithRange(0, enemys.length + 1))
		enemys = [{
			img: _img,
			index: _index,
			x: Math.floor(road.width / 4 * _index + road.x),
			y: 0,
			inc: Math.ceil(randomWithRange(2, 5))
		}]
		drawStart()
	}

	function d() {
		draw();
	}

	function drawStart() {
		clearContext()
		drawBackground()
		setTimeout(function() {
			drawRoad()
			drawCar()
			context.fillStyle = '#bada55'
			context.fillRect( contextWidth / 2 - 100, contextHeight - 300, 200, 60)
			context.fillStyle = '#fff'
			context.strokeRect( contextWidth / 2 - 101, contextHeight - 301, 202, 62)
			context.fillStyle = '#fff'
			context.font = '36px Arial'
			context.fillText('Start', contextWidth / 2 - 40, contextHeight - 260)
			canvas.addEventListener('click', d, false)
		})
	}

	function drawEnd() {
		canvas.removeEventListener('click', d, false)
		window.cancelAnimationFrame(frameFunc)
		context.fillStyle = '#fff'
		context.fillRect( contextWidth / 2 - 100, contextHeight - 300, 200, 60)
		context.fillStyle = '#fff'
		context.strokeRect( contextWidth / 2 - 101, contextHeight - 301, 202, 62)
		context.fillStyle = 'red'
		context.font = '36px Arial'
		context.fillText(Math.ceil(road.meters) + ' 分 !', contextWidth / 2 - 50, contextHeight - 260)
		canvas.addEventListener('click', function(e) {
			location.reload()
		}, false)
	}

	function draw() {
		// 清画布
		clearContext()
		// 画背景
		drawBackground()
		// 画路
		drawRoad()
		// 画障碍物
		drawEnemy()
		// 画自己的小车车
		drawCar()
		try {
			detectAccident()
		} catch (exception) {
			if (exception == 'AccidentException') {
				return drawEnd()
			}
		}
		context.fillStyle = '#ccc'
		context.fillRect(0, 0, contextWidth, 50)
		road.meters += 0.1
		if (road.meters < 500) {
			context.fillStyle = '#fff'
			context.font = '26px Arial'
		} else if (road.meters < 1000) {
			context.fillStyle = 'yellow'
			context.font = '36px Arial'
		} else {
			context.fillStyle = 'red'
			context.font = '46px Arial'
		}
		context.fillText(Math.ceil(road.meters) + ' 分 !', contextWidth/2-45, 35)
		// 下一桢
		frameFunc = window.requestAnimationFrame(draw)
	}

	function clearContext() {
		context.clearRect(0, 0, contextWidth, contextHeight)
	}

	function drawBackground() {
		var x = Math.ceil(contextWidth / road.img.width)
		var y = Math.ceil(contextHeight / road.img.height)
		road.meadowI *= 1.1
		if (road.meadowI > 10) {
			road.meadowI = 0
		}
		if (road.meadows.length) {
			road.meadows.forEach(function(i) {
				context.drawImage(road.img, i[0], i[1] + Math.round(road.meadowI % 10 * 6), i[2], i[3])
			})
		}
	}

	function drawRoad() {
		context.fillStyle = '#888'
		context.fillRect(road.x, 0, road.width, contextHeight)
		context.fillStyle = '#fff'
		context.fillRect(road.x - 3, 0, 3, contextHeight)
		context.fillRect(road.x + road.width, 0, 3, contextHeight)
		road.zebraCrossingI *= 1.1
		if (road.zebraCrossingI > 30) {
			road.zebraCrossingI = 0
		}
		if (road.zebraCrossing.length) {
			road.zebraCrossing.forEach(function(i) {
				context.fillRect(i[0], i[1] + Math.round(road.zebraCrossingI % 30 * 6), i[2], i[3])
			})
		}
	}

	function drawEnemy() {
		if (enemys.length) {
			for (var i = 0; i < enemys.length; i++) {
				if (enemys[i + 1]) {
					enemys[i + 1].y + enemys[i + 1].height
				}
			}
			for (var i = 0; i <= enemys.length - 1; i++) {
				if (enemys[i].y > contextHeight) {
					enemys = enemys.slice(i)
				} else if (enemys[i] && enemys[i].img) {
					enemys[i].y += enemys[i].inc
					context.drawImage(enemys[i].img.imgObj, 0, 0, enemys[i].img.width, enemys[i].img.height, enemys[i].x, enemys[i].y, enemys[i].img.width, enemys[i].img.height)
				}
			}
			if (enemys[enemys.length - 1].y > (contextHeight / 3)) {
				geneEnemy()
			}
		}
	}

	function geneEnemy() {
		var _img = enemySrc[Math.ceil(randomWithRange(-1, enemySrc.length + 1))]
		if (Math.random() * 10 > 5 && _img && enemys.length < 3) {
			var _index = Math.floor(randomWithRange(0, enemys.length + 1))
			if (!enemys[enemys.length - 1] || _index != enemys[enemys.length - 1].index) {
				enemys.push({
					img: _img,
					index: _index,
					x: Math.floor(road.width / 4 * _index + road.x),
					y: 0,
					inc: Math.ceil(randomWithRange(2, 5))
				})
			}
		}
	}

	var keys = {};
	var faster = 1;
	var delta = 1.1;
	function drawCar(e) {
		if (keys[38]) {
			car._y--;
			keys[38] = false;
        // if (move.y > -move.speed) {
        //     move.y--;
        // }
    }
    if (keys[40]) {
  		car._y++;
  		keys[40] = false;
        // if (move.y < move.speed) {
        //     move.y++;
        // }
    }
    if (keys[39]) {
  		car._x += f41;
  		keys[39] = false;
        // if (move.x < move.speed) {
        //     move.x++;
        // }
    }
    if (keys[37]) {
  		car._x -= f41;
  		keys[37] = false;
        // if (move.x > -move.speed) {
        //     move.x--;
        // }
    }
    if (Math.ceil(car.x) < car._x) {
    	if (car.x < car._x) {
	    	faster*=delta
	    	car.x+=faster
	    } else {
	    	faster = 1
	    	car.x = car._x
	    }
    } else if (Math.floor(car.x) > car._x) {
    	if (car.x > car._x) {
	    	faster*=delta
	    	car.x-=faster
	    } else {
	    	faster = 1
	    	car.x = car._x
	    }
    }
    if (Math.ceil(car.y) < car._y) {
    	if (car.y < car._y) {
	    	faster*=delta
	    	car.y+=faster
	    } else {
	    	faster = 1
	    	car.y = car._y
	    }
    } else if (Math.floor(car.y) > car._y) {
    	if (car.y > car._y) {
	    	faster*=delta
	    	car.y-=faster
	    } else {
	    	faster = 1
	    	car.y = car._y
	    }
    }

		context.drawImage(carImg, 0, 0, car.width, car.height, car.x, car.y, car.width, car.height)
	}

	function listener() {
		document.onkeydown = function(e) {
			// move.inc += 2;
			keys[e.keyCode] = true
		};
		document.onkeyup = function(e) {
			// move.inc = 0;
			keys[e.keyCode] = false
		}
	}

	function detectAccident() {
		var carCoordinate = {
			topLeft: { // 左上角
				x: car.x + carCorner,
				y: car.y + carCorner
			},
			topRight: { // 右上角
				x: car.x + car.width - carCorner,
				y: car.y + carCorner
			},
			bottomLeft: { // 左下角
				x: car.x + carCorner,
				y: car.y + car.height - carCorner
			},
			bottomRight: { // 右下角
				x: car.x + car.width - carCorner,
				y: car.y + car.height - carCorner
			}
		}
		// console.log(enemys.length)
		if (car.x < (road.x - carCorner)
			||
			(car.x + car.width) > (road.x + road.width + carCorner)
		) {
			throw 'AccidentException';
		}
		for (var i = 0; i < enemys.length; i++) {
			var enemysCarCoordinate = {
				topLeft: { // 左上角
					x: enemys[i].x + carCorner,
					y: enemys[i].y + carCorner
				},
				topRight: { // 右上角
					x: enemys[i].x + enemys[i].img.width - carCorner,
					y: enemys[i].y + carCorner
				},
				bottomLeft: { // 左下角
					x: enemys[i].x + carCorner,
					y: enemys[i].y + enemys[i].img.height - carCorner
				},
				bottomRight: { // 右下角
					x: enemys[i].x + enemys[i].img.width - carCorner,
					y: enemys[i].y + enemys[i].img.height - carCorner
				}
			}
			if (
				isAccident(carCoordinate, enemysCarCoordinate)
			) {
				throw 'AccidentException';
			}
		}
	}

	function isAccident(car, enemy) {
		return  (car.topLeft.x >= enemy.topLeft.x &&
				car.topLeft.x <= enemy.topRight.x &&
				car.topLeft.y >= enemy.topLeft.y &&
				car.topLeft.y <= enemy.bottomLeft.y) ||
				(car.topRight.x >= enemy.topLeft.x &&
				car.topRight.x <= enemy.topRight.x &&
				car.topRight.y >= enemy.topRight.y &&
				car.topRight.y <= enemy.bottomRight.y) ||
				(car.bottomLeft.x >= enemy.topLeft.x &&
				car.bottomLeft.x <= enemy.topRight.x &&
				car.bottomLeft.y >= enemy.topLeft.y &&
				car.bottomLeft.y <= enemy.bottomLeft.y) ||
				(car.bottomRight.x >= enemy.topLeft.x &&
				car.bottomRight.x <= enemy.topRight.x &&
				car.bottomRight.y >= enemy.topRight.y &&
				car.bottomRight.y <= enemy.bottomRight.y)
	}

}());
