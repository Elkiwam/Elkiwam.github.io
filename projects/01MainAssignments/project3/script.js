//Unconventional/unconvenient Micro-interaction
//Idea: a birth date selector that works with clicks (each click +1) in day month and year, when over 31, 12 or 2025 it resets to 1,1 and 1900.


let day = 1;
let month = 1;
let year = 1900;

let font;
let descriptText

function preload() {
	font = loadFont('/Fonts/S_S_Metroviation_Five.otf');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	rectMode(CENTER);
	textFont(font);
}

function draw() {
	background(240);

	// Draw sections for day, month, and year
	noStroke()
	fill(200);
	rect(width / 2 - 120, height / 2, 100, 100); // Day
	rect(width / 2, height / 2, 100, 100); // Month
	rect(width / 2 + 120, height / 2, 100, 100); // Year

	// Display values
	fill(0);
	textSize(30)
	text(day, width / 2 - 120, height / 2);
	text(month, width / 2, height / 2, 100);
	text(year, width / 2 + 120, height / 2);



	//description text for the number fields
	textSize(35)
	text('Input your birth date to continue', width / 2, height / 2 - 200);

	textSize(20)
	fill(100)
	text('day', width / 2 - 120, height / 2 - 80);
	text('month', width / 2, height / 2 - 80);
	text('year', width / 2 + 120, height / 2 - 80);
}

function mousePressed() {

	//clicks in day
	if (mouseX > width / 2 - 170 && mouseX < width / 2 - 70 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		day += int(random(1, 3));
		if (day > 31) day = 1;
	}

	//clicks in month
	if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		month += int(random(1, 3));
		if (month > 12) month = 1;
	}

	//clicks in year
	if (mouseX > width / 2 + 70 && mouseX < width / 2 + 170 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		year += int(random(1, 3));
		if (year > 2025) year = 1900;
	}
}

