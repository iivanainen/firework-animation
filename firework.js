function Firework() {
  
  this.hueR = random(1, 255);
  this.hueG = random(1, 255);
  this.hueB = random(1, 255);
  
  if (this.hueR + this.hueG <= 200) {
    this.hueB = random(100, 255);
  }
  else if (this.hueR + this.hueG >= 400) {
    this.hueB = random(1, 100);
  }
  
  this.firework = new Particle(random(width), height, this.hueR, this.hueG, this.hueB, false);
  this.exploded = false;
  this.particles = [];

  
  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  this.update = function() {
    
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
        //console.log(this.hueR, this.hueG, this.hueB);
      }
    }
    
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      
      if (this.particles[i].done() == true) {
        this.particles.splice(i, 1);
      }
    }
  }
  
  this.explode = function() {
    for (var i = 0; i < 80; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hueR, this.hueG, this.hueB, true);
      this.particles.push(p);
      
    }
  }
  
  this.show = function() {
    
    if (!this.exploded) {
      this.firework.show();
    }
    
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
