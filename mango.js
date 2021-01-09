class Mango {
    constructor(x, y, r) {
        var options = {
         isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = r;       
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("mango.png");
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }
}