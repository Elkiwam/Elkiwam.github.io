//Unconventional/unconvenient Micro-interaction

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
	//let r = (mouseY / 3)
	//let g = (mouseY / 4)
	//let b = (mouseY)

	//background effect
	if (mouseX > 80 && mouseX < 140) {
		background(mouseY / 2, mouseY / 3, 255);
	}

	//Textsize effect
	if (mouseX > 150 && mouseX < 210) {
		strokeWeight(6)
		//fill(r)
		textSize(constrain(mouseY, 110, height - 110) / 2)
	}

	//Textcolor effect
	if (mouseX > 220 && mouseX < 280) {
		fill(constrain(mouseY, 110, height - 110) / 2, constrain(mouseY, 110, height - 110) / 6, constrain(mouseY, 110, height - 110) / 3)
		//fill(r, g, b)
	}


	//textfield
	text('Text', width / 2, height / 2);


	//show sliders
	slider(100)
	slider(170)
	slider(240)


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
