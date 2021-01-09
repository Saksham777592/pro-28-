class Rope {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.rope = Constraint.create(options);
        this.pointB = pointB;

        World.add(world, this.rope);
    }
    //body will store the stone.body
    attach(body) {
        this.rope.bodyA = body; 
    }
    fly() {
        this.rope.bodyA = null;
    }
    display() {  
        if(this.rope.bodyA) {  
               
        var point1 = this.pointB;
        var point2 = this.rope.bodyA.position;
              
        strokeWeight(4);
        line(point2.x, point2.y, point1.x, point1.y);
       
        }
    }
}   