class Box {
  constructor(x, y, width, height) {
    this.visibility=255;
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.04,
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    console.log(this.visibility);
    if (this.body.speed<3){

    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
    }
    else {World.remove(world,this.body)
    push();
  this.visibility=this.visibility-0.5
tint(225,this.visibility)
pop();
}
  }
score(){
  if (this.visibility<0&& this.visibility>-10){
    score=score+1
  }

  }

}