// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;

function setup() {
  createCanvas(640, 360);
	person = new person();
}



function draw() {
  background(51);
	person.update;
	person.display;
}
