class paper{
    constructor(x,y,r)
{
    var options={
        isStactic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }

    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(this.y,this.x,this.r/2,options)
    World.add(world.circle.body)
}
display()
{
   var paperpos=this.body.position;
   push ()
   translate (paperpos.x,paperpos.y)
   rectMode(CENTER)
   strokeWeight(3);
   fill (white)
   ellipse(0,0,this.r,this.r);
   pop ()


}
}