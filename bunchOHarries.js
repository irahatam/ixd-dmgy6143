let lot, lotharry, beanieimg;
var whichimage = 0;
var theimages = [];

function preload() {
  loadFont('ChampionGothic-Heavyweight.ttf');
	theimages[0] = loadImage('lot.png');
	theimages[1] = loadImage('beanie.png');
	theimages[2] = loadImage('dunkirk.png');
	theimages[3] = loadImage('fratboy.png');
	theimages[4] = loadImage('harry.jpg');
	theimages[5] = loadImage('2012.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
	background('#007FFF');
	
	lot = createButton('Love On Tour Harry');
	lot.position(50,50);
	lot.size(100,200);
	lot.style('font-family', 'ChampionGothic-Heavyweight');
	lot.style('font-size', '20px');
	lot.mousePressed(mousePressed);
}

function mousePressed() {
	whichimage = (whichimage+1)%theimages.length;
}

function mouseDragged() {
	image(theimages[whichimage], mouseX, mouseY, 200, 200);
}

function erase(){
	fill('#007FFF');
}
