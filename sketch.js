let size = 10
let terrain = []
let flying = 0

function setup() {  
    createCanvas(1680, 900, WEBGL);

    for (let x = 0; x < 50; x++) {
	terrain[x] = []
        for (let y = 0; y < 140; y++) {
            terrain[x][y] = 0
        }
    }
}

function draw() {
    flying -= .03

    let xoff = flying
    for (let x = 0; x < 50; x++) {
	let yoff = 0
        for (let y = 0; y < 140; y++) {
            terrain[x][y] = map(noise(xoff, yoff), 0 , 1, - 150, 200)
	    yoff += .03
        }
        xoff += .03
    }

    background(0)

    translate(- 700, -70)
    rotateX(PI / 3)

    stroke(0, 130, 0)
    noFill()

    for (let x = 0; x < 50; x++) {
	beginShape(TRIANGLE_STRIP)
        for (let y = 0; y < 140 - 1; y++) {
            vertex(y * size, x * size, terrain[x][y])
	    vertex(y * size, (x + 1) * size, terrain[x][y + 1])
        }
	endShape()
    }
}
