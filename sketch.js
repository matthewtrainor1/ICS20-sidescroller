var man;

function setup() {
  createCanvas(640, 360);
	man = new Person();
}
var x;
function draw() {
  background(51);
	if(mouseIsPressed){
	var force = createVector(1, 0)
	man.applyForce(force);
	}
	
	translate(-man.pos.x, 0);
	man.update();
	man.display();

	fill(10);
rect(250, 315, 65, 50);

}
