$(document).ready(function(){
	'use strict';
	paper.install(window);				// paper.js를 전역 스코프에 설치
	paper.setup(document.getElementById('mainCanvas'));		// paper.js를 캔버스에 연결하고 paper.js가 그림을 그릴 수 있도록 준비

	// 그림을 그리는 코드
	var tool = new Tool();
	var c = Shape.Circle(200,200,80);
	c.fillColor = 'black';

	var text = new PointText(200,200);
	text.justfication = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = "hello world";

	// event.point 프로퍼티에 마우스로 클릭한 위치가 저장됨.
	tool.onMouseDown = function(event){
		var c = Shape.Circle(event.point, 20);
		// var c = Shape.Circle(event.point.x, event.point.y, 20);
		c.fillColor = 'pink'
	}

	paper.view.draw();	// 실제로 paper.js가 화면에 그림을 그리라는 명령
})