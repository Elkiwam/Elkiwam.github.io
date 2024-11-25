// TYPO mousebased text transformation working in x,y,z

let points;
let bounds;


function preload() {
	font = loadFont('/Fonts/S_S_Metroviation_Five.otf');
	//typetest = loadImage('Images/snowman2.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	textFont(font);
	noStroke()
	//textAlign(CENTER, CENTER);

	points = font.textToPoints("NEON-NOISE", 0, 0, 10, {
		sampleFactor: 40, // we can add more or less points here.
		simplifyThreshold: 0,
	});
	bounds = font.textBounds("NEON-NOISE", 0, 0, 10);

	frameRate(30)
	imageMode(CENTER);

	/*//texture trial
	textTexture = createGraphics((PI * 2), windowHeight * 2);
	textTexture.fill(0);
	textTexture.textFont(font);
	textTexture.background(255, 255, 100);
	textTexture.textSize(50);
	for (let i = 0; i <= 6; i++) {
		textTexture.text("NOISE", 0, i * 10);
	} */
	noStroke();
}



function draw() {
	background(random(0, mouseX / 2), random(0, mouseX / 3), random(0, mouseX / 2));
	fill(255);
	ambientLight(120, 120, 200);
	//let myColor = (255, 255, 255)
	let myColor = (random(0, mouseX / 2), random(0, mouseX / 3), random(0, mouseX / 2))
	pointLight(myColor, width / 2, -150, 500);
	pointLight(255, 200, 200, 50, height / 2, 1000);

	ambientMaterial(150, 50, 150);

	orbitControl();


	//description texts over number fields





	translate(-width / 2, -height / 2);
	let scaleFactor = 0.8;
	// very messy code block to center text
	let scaleW = (width / bounds.w) * scaleFactor;
	let scaleH = (height / bounds.h) * scaleFactor;
	let w = bounds.w * scaleW;
	let h = bounds.h * scaleH;
	let fontX = -bounds.x * scaleW;
	let fontY = -bounds.y * scaleH;
	fontX += width / 2 - w / 2; // center align the text
	fontY += height / 2 - h / 2; // center align the text
	translate(fontX, fontY);

	randomSeed(453535353)


	for (let i = 0; i < points.length; i++) {
		let p = points[i];

		let X = random(mouseX / 10) + p.x * scaleW;
		let Y = random(mouseY / 20) + p.y * scaleH;
		let Z = random(mouseY) + p.y;

		push()
		translate(X, Y, Z);
		rotateY(mouseX / 50)

		//texture
		//texture(textTexture);
		box(7, 7, 7);
		pop()

		//rect(X, Y, 5, 5);
	}

	/* hello text random
	push()
	textAlign(CENTER, CENTER)
	translate(width / 2 - 60, -height / 2 + 50, mouseX / 3)
	fill(random(0, mouseX / 2), random(0, mouseX / 3), random(0, mouseY / 2))
	textSize(mouseX / 10)
	text('hello', 0, 0);
	pop()
	*/

	/* crazy snowman shit
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
*/
}


