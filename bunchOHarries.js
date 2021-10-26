let lot, lotharry;

function setup() {
  createCanvas(windowWidth,windowHeight);
	background('#007FFF');
	lotharry = loadImage('lot.png');
	
	lot = createButton('Love On Tour Harry');
	lot.position(50,50);
	lot.size(100,50);
	lot.style('font-size', '20px');
	lot.mousePressed(mousePressed);
}

function mousePressed() {
	image(lotharry, mouseX, mouseY, 200, 200);
}

function mouseDragged() {
	image(lotharry, mouseX, mouseY, 200, 200);
}

function erase(){
	fill('#007FFF');
}
