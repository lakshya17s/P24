class Ground{
    constructor(x,y){
      var options = {
          isStatic:true,
      }  
      this.body = Bodies.rectangle(x,y,800,20,options);
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("#F71228")
        rect(0,0,800,20);
        pop();
    }
}