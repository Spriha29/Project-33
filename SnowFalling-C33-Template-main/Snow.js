class Snow {
  constructor(x,y){ 
    var options = { 
      friction: 0.001, 
      restitution:0.9 
    } 

    this.snow = Bodies.circle(x,y,10,options) 
    this.radius = 10; World.add(world, this.snow); }

    showSnow(){ 
      fill("white") 
      ellipseMode(CENTER); 
      ellipse(this.snow.position.x,this.snow.position.y,this.radius,this.radius); 
    }

    updateY(){ 
      if(this.snow.position.y > height){ 
        Matter.Body.setPosition(this.snow, {x:random(0,1400), y:random(0,1400)}) 
      } 
  }
  };