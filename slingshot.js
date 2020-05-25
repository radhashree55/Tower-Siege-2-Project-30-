class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 15
        }
        this.pointB = pointB
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    fly(){
        this.slingShot.bodyA = null;
    }
    attatch(body){
        this.slingShot.bodyA = body;
    }
    display(){
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }
    }