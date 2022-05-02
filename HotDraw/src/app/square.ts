import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class SquareTool implements Tool{
    name: string = 'square';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): Shape[] {
        var square: Square = new Square(startPoint, endPoint);
        shapes.push(square);
        return shapes;
    }
}

export class Square implements Shape {
    startPoint: Point
    endPoint: Point
    
    constructor(startPoint: Point, endPoint: Point) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    isInBoundingBox(boundingBox: Point) : boolean {
        return (boundingBox.x >= (this.startPoint.x - this.endPoint.x) && boundingBox.y >= (this.startPoint.y - this.endPoint.y));
    }

    setNewPosition(newPoint: Point) {
        this.startPoint = newPoint;
    }
    
    draw(pen : CanvasRenderingContext2D) {
        console.log("Drawing Square", this.startPoint, this.endPoint)
        pen.strokeStyle = 'red';
        pen.strokeRect(this.startPoint.x, this.startPoint.y, this.endPoint.x-this.startPoint.x, this.endPoint.y-this.startPoint.y);
        // pen.strokeRect(144,115,333,243);
        pen.closePath();
    }
}
