//Unconventional/unconvenient Micro-interaction
//let currentTextSize;
//let currentTextColor;
//let currentBackground;

function preload() {
	font = loadFont('/Fonts/S_S_Metroviation_Five.otf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	textFont(font);


}

function draw() {
	let r = (mouseY / 3)
	//let g = (mouseY / 4)
	//let b = (mouseY)

	//stored values
	//textSize(currentTextSize);
	//fill(currentTextColor);


	//background effect
	if (mouseX > 80 && mouseX < 140) {
		let currentBackground = (mouseY / 2, mouseY / 3, 255);
		background(mouseY / 2, mouseY / 3, 255)
		//background(currentBackground);
		//currentBackground = (mouseY / 2, mouseY / 3, 255);

	}

	//Textsize effect
	if (mouseX > 150 && mouseX < 210) {
		strokeWeight(6)
		fill(r)
		textSize(constrain(mouseY, 110, height - 110) / 2)
	}

	push()
	//shifthing effect
	if (mouseX > 220 && mouseX < 280) {
		fill(255)
		stroke(0)
		translate(0, constrain(mouseY, 110, height - 110) / 5 - 100)
	}

	//Textcolor effect
	if (mouseX > 290 && mouseX < 350) {
		fill(255)
		fill(constrain(mouseY, 110, height - 110) / 2, constrain(mouseY, 110, height - 110) / 6, constrain(mouseY, 110, height - 110) / 3)
		//fill(r, g, b)
	}




	//textfield
	text('text', width / 2, height / 2);
	pop()

	//show sliders
	slider(100)
	slider(170)
	slider(240)
	slider(310)


}



function slider(x) {
	fill(255);
	stroke(0)
	strokeWeight(4)
	rect(x, height / 2, 20, height - 200, 20);
	if (mouseX > x - 20 && mouseX < x + 20) {
		fill(0);
		//circle(100, map(mouseY, 0, height, 110, height - 110), 20);
		circle(x, constrain(mouseY, 110, height - 110), 20);
	}
}
