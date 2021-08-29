class Tree{
    constructor(x,y,w,h){
        var options = {
            restitution:0.8,
        };
        this.body = Bodies.circle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage('tree.png');
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r);
        pop();
    }
}