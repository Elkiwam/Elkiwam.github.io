//Unconventional/unconvenient Micro-interaction

let currentBG;
let buttonClick = false;
let turnbuttonClick = false;

let R;
let G;
let B;

let Metro;
let Bokor;
let Istok;
let Jersey;
let Protest;

function preload() {
	Metro = loadFont('/Fonts/S_S_Metroviation_Five.otf');
	Bokor = loadFont('/Fonts/Bokor-Regular.otf')
	Istok = loadFont('/Fonts/IstokWeb-BoldItalic.otf')
	Jersey = loadFont('/Fonts/Jersey10-Regular.otf')
	Protest = loadFont('/Fonts/ProtestRevolution-Regular.otf')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	colorMode(HSB);
	textSize(25)
	currentBG = color(220); // Default background color
}

function draw() {

	//fill(255)
	//stroke(0)

	//reset scene if enter is pressed
	if (keyIsPressed === true) {
		if (keyCode === 13) {
			background(255)
			fill(255)
			stroke(0)
			strokeWeight(2)
			textSize(25)
			textFont(Istok)

			console.log('what')
		}
	}




	//Textcolor effect
	if (mouseX > 150 && mouseX < 210) {
		//fill(255)
		R = constrain(mouseY, 110, height - 110) / 2
		G = constrain(mouseY, 110, height - 110) / 6
		B = constrain(mouseY, 110, height - 110) / 3
		//console.log(R, G, B)
		fill(R, G, B)
	}

	//background effect
	if (mouseX > 80 && mouseX < 140) {
		//background(mouseY / 2, mouseY / 3, 255)
		currentBG = color(mouseY / 2, mouseY / 3, 255)
		background(currentBG);

	}


	//Font changing effect
	if (mouseX > 220 && mouseX < 280 && mouseY > 110 && mouseY < 330) {
		background(currentBG);
		textFont(Jersey);
	} else if (mouseX > 220 && mouseX < 280 && mouseY > 330 && mouseY < 550) {
		background(currentBG);
		textFont(Istok)
	} else if (mouseX > 220 && mouseX < 280 && mouseY > 550 && mouseY < 770) {
		background(currentBG);
		textFont(Bokor)
	} else if (mouseX > 220 && mouseX < 280 && mouseY > 770 && mouseY < 990) {
		background(currentBG);
		textFont(Protest)
	} else if (mouseX > 220 && mouseX < 280 && mouseY > 990 && mouseY < height - 110) {
		background(currentBG);
		textFont(Metro)
	}

	//strokeColor effect
	if (buttonClick === false) {
		stroke(0)
	} else {
		stroke(255);
	}

	//strokeWeigth effect
	if (mouseX > 290 && mouseX < 350) {
		background(currentBG);
		strokeWeight(constrain(mouseY, 110, height - 110) / 15)
	}

	//Textsize effect
	if (mouseX > 360 && mouseX < 420) {
		//strokeWeight(6)
		//fill(r)
		textSize(constrain(mouseY, 110, height - 110) / 2.1)
	}

	push()
	//shiftingText effect
	if (turnbuttonClick === false) {
		//nothing
	} else {
		translate(mouseX / 2 - 400, mouseY / 2 - 250)
	}

	//textfield
	text('TEXT', width / 2 + 100, height / 2 - 50);
	pop()

	//show sliders
	slider(100)
	slider(170)
	slider(240)
	slider(310)
	slider(380)

	//show buttons
	button(450, 115)
	followButton(40, 40)
	console.log(buttonClick)



}

function slider(x) {
	push();
	fill(255);
	stroke(0)
	strokeWeight(4);
	rect(x, height / 2, 20, height - 200, 20);
	if (mouseX > x - 20 && mouseX < x + 20) {
		fill(0);
		//circle(100, map(mouseY, 0, height, 110, height - 110), 20);
		circle(x, constrain(mouseY, 110, height - 110), 20);
	}
	pop();
}



//experiment with reset button or toggle for stroke color b/w
function button(x, y) {
	push()
	if (buttonClick === false) {
		fill(0)
	} else {
		fill(255)
	}
	strokeWeight(4)
	stroke(0)
	circle(x, y, 30)

	pop()
}

function followButton(x, y) {
	push()
	colorMode(RGB)
	if (turnbuttonClick === false) {
		fill(0)
	} else {
		fill(255, 0, 0)
	}
	strokeWeight(4)
	stroke(0)
	circle(x, y, 30)

	pop()
}


function mousePressed() {
	if (mouseX > 430 && mouseX < 470 && mouseY > 95 && mouseY < 135) {
		buttonClick = !buttonClick;
	} else {
		turnbuttonClick = !turnbuttonClick;
	}
}



