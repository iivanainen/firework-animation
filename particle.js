

function Particle(x, y, hueR, hueG, hueB, spark) {
  this.pos = createVector(x, y);
  this.acc = createVector(0,0);
  this.lifespan = 255;
  this.hueR = hueR;
  this.hueG = hueG;
  this.hueB = hueB;
  
  if (spark == false) {
    this.vel = createVector(0, random(-12, -5));

  }
  else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 6));
  }
  
  
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  
  this.update = function() {
    
    if (spark) {
      this.vel.mult(0.9);
      this.lifespan-= random(-2, 10);
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

  }
  
  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  this.show = function() {
    if (spark){
      strokeWeight(2)
      stroke(this.hueR, this.hueG, this.hueB, this.lifespan);  
    }
    else {
      strokeWeight(4);
      stroke(this.hueR, this.hueG, this.hueB);
    }
    point(this.pos.x, this.pos.y);
    
    //console.log(this.hueR, this.hueG, this.hueB);
  }
}
