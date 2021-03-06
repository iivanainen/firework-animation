var fireworks = [];
var gravity;

function setup() {
  createCanvas(600, 400);
  
  gravity = createVector(0,0.2);
  
  stroke(255);
  strokeWeight(4);
  

}

function draw() {
  background(0, 0, 0, 80);
  
  if (random(1) < 0.03) {
    
    fireworks.push(new Firework());  
  }
  
  for(var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].show();
    fireworks[i].update();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
    
    //console.log(fireworks.length);
  }
  

}
