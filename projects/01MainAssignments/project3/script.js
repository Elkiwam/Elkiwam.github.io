//Unconventional/unconvenient Micro-interaction
//Idea: a birth date selector that works with clicks (each click +1) in day month and year, when over 31, 12 or 2025 it resets to 1,1 and 1900.


let day = 1;
let month = 1;
let year = 1920;
let errorMessage = true;

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
	background(0);

	//bg rectangle
	if (errorMessage === true) {
		fill(255)
		rect(width / 2, height / 2 - 20, 500, 340, 10);
		fill(0)
		rect(width / 2, height / 2 - 145, 484, 75, 6);
	} else if (errorMessage === false) {
		fill(255)
		rect(width / 2, height / 2 - 10, 500, 360, 10)
		fill(255, 0, 0)
		rect(width / 2, height / 2 - 145, 484, 75, 6);
	}

	// Sections for day/month/year
	noStroke()
	//day
	if (mouseX > width / 2 - 170 && mouseX < width / 2 - 70 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		fill(220)
		rect(width / 2 - 120, height / 2, 105, 105, 10);
	} else {
		fill(200)
		rect(width / 2 - 120, height / 2, 100, 100, 5)
	}

	//month
	if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		fill(220)
		rect(width / 2, height / 2, 105, 105, 10);
	} else {
		fill(200)
		rect(width / 2, height / 2, 100, 100, 5);
	}

	//year
	if (mouseX > width / 2 + 70 && mouseX < width / 2 + 170 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		fill(220)
		rect(width / 2 + 120, height / 2, 105, 105, 10);
	} else {
		fill(200)
		rect(width / 2 + 120, height / 2, 100, 100, 5);
	}

	// Display values
	fill(0);
	textSize(30)
	text(day, width / 2 - 120, height / 2);
	text(month, width / 2, height / 2, 100);
	text(year, width / 2 + 120, height / 2);


	//description text for the number fields
	textSize(32)
	fill(255)
	text('Input your birth date to continue', width / 2, height / 2 - 145);

	textSize(20)
	fill(100)
	text('day', width / 2 - 120, height / 2 - 70);
	text('month', width / 2, height / 2 - 70);
	text('year', width / 2 + 120, height / 2 - 70);

	//Submit button
	if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 75 && mouseY < height / 2 + 125) {
		fill(0)
		textSize(32)
		rect(width / 2, height / 2 + 100, 205, 55, 6);
	} else {
		fill(100)
		rect(width / 2, height / 2 + 100, 200, 50, 5);
		textSize(30)
	}
	fill(255)
	text('Submit', width / 2, height / 2 + 100)

	//error message
	if (errorMessage === true) {
	} else if (errorMessage === false) {
		//displays error message
		fill(255, 0, 0)
		textSize(18)
		text('invalid birth date, try again.', width / 2, height / 2 + 147)
	}



}

function mousePressed() {

	//clicks in day
	if (mouseX > width / 2 - 170 && mouseX < width / 2 - 70 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		day += int(random(1, 3));
		errorMessage = true;
		if (day > 31) day = 1;
	}

	//clicks in month
	if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		month += int(random(1, 3));
		errorMessage = true;
		if (month > 12) month = 1;
	}

	//clicks in year
	if (mouseX > width / 2 + 70 && mouseX < width / 2 + 170 && mouseY > height / 2 - 50 && mouseY < height / 2 + 50) {
		year += int(random(1, 3));
		errorMessage = true;
		if (year > 2025) year = 1900;
	}

	//submit button
	if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 75 && mouseY < height / 2 + 125) {
		//reset all values
		day = 1;
		month = 1;
		year = 1900;
		errorMessage = false;
	}
}

