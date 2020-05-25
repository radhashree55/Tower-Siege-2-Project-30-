class Aim3 {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0,
        'friction':1.0,
        'density':1.0         
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3) {
        var pos =this.body.position;
        rectMode(CENTER);
        fill(2,255,246);
        stroke(0);
        rect(pos.x, pos.y, this.width, this.height);
      }
      else {
        World.remove(world,this.body);
        push();
        tint(255,this.visibility);
        this.visibility = this.visibility-5;
        pop();
      }
    }
  };
