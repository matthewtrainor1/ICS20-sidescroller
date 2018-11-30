function Person() {
  this.pos = createVector(50, height-50);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  //this.mass = m;

  this.applyForce = function(force) {
    this.acc.add(force);
		var f = force.copy();
    f.div(10);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255, 150,90);
    stroke(255);
    rect(this.pos.x, this.pos.y, 35, 50);
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }
}
