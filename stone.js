class Stone {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            friction: 1,
            restitution: 0.1,
            density: 1.2
        }
        this.x=x
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("stone.png");
        

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
      
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
    }
} 