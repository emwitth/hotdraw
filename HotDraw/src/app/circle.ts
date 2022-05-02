import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class CircleTool implements Tool{
    name: string = 'circle';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): Array<Shape> {
        var circle: Circle = new Circle(startPoint, endPoint);
        shapes.push(circle);
        return shapes;
    }
}

export class Circle implements Shape {
    startPoint: Point
    endPoint: Point
    radius: number;
    
    constructor(startPoint: Point, endPoint: Point) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.radius = Math.sqrt(
                (Math.pow((this.endPoint.x-this.startPoint.x), 2))
                + (Math.pow((this.endPoint.x-this.startPoint.x), 2)));
    }

    isInBoundingBox(boundingBox: Point) : boolean {
        return ((boundingBox.x - this.startPoint.x) * (boundingBox.x - this.startPoint.x) + 
                (boundingBox.y - this.startPoint.y) * (boundingBox.y - this.startPoint.y)
                <= this.radius*this.radius);
    }

    setNewPosition(newPoint: Point) {
        this.startPoint = newPoint;
    }
    
    draw(pen : CanvasRenderingContext2D) {
        console.log("Drawing Circle", this.startPoint, this.radius)
        pen.strokeStyle = 'green';
        pen.beginPath();
        pen.ellipse(this.startPoint.x, this.startPoint.y, this.radius, this.radius, Math.PI/4, 0, 2*Math.PI);
        pen.closePath();
        pen.stroke();
    }
}