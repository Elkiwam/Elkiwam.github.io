// TYPO pixel snowman working state, image shifted

let font;
let typetest


function preload() {
	//font = loadFont('/Fonts/S_S_Metroviation_Five.otf');
	typetest = loadImage('/Images/snowman2.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	//textFont(font);
	frameRate(30)
	imageMode(CENTER);

}

function draw() {
	background(200)


	/*trying the text
	fill(0);
	textSize(100);
	text("ZHdK", 0, height * 0.1);
*/

	push()
	let tiles = constrain(map(mouseX, 0, width, 10, 300), 10, 300);
	console.log(tiles)


	for (let x = 0; x < tiles; x++) {
		for (let y = 0; y < tiles; y++) {


			let tileSize = width / tiles;
			let c = typetest.get(floor(x * tileSize), floor(y * tileSize));
			let b = map(brightness(c), 0, 20, 1, 0);
			//let zShift = 500
			//let z = map(b, 0, 1, -100, zShift)


			fill(50, 50, 200)
			noStroke()
			//ellipse(x * tileSize, y * tileSize, 10, 10);
			push()
			translate(x * tileSize - width / 2 + 50, y * tileSize - height / 2);

			push()
			//translate(0, 0, tileSize * b * 4);
			//sphere(tileSize * b / 3);
			ellipse(0, 0, tileSize * b, tileSize * b);
			pop()
			pop()

		}
	}

	pop()


	//image(typetest, 0,0,300,200);

}


