class Paper {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':0.6,
          'density':0.6,
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      //this.image = loadImage("paper.png")
      this.width = 2*radius;
      this.height = 2*radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipseMode(CENTER);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };