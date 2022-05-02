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
    width: number
    height: number
    
    constructor(startPoint: Point, endPoint: Point) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.width = this.endPoint.x-this.startPoint.x;
        this.height = this.endPoint.y-this.startPoint.y;
    }

    isInBoundingBox(boundingBox: Point) : boolean {
        var largerX: number = this.startPoint.x;
        var smallerX: number = this.endPoint.x;
        if(smallerX > largerX) {
            largerX = this.endPoint.x;
            smallerX = this.startPoint.x;
        }
        var largerY: number = this.startPoint.y;
        var smallerY: number = this.endPoint.y;
        if(smallerY > largerY) {
            largerY = this.endPoint.y;
            smallerY= this.startPoint.y;
        }
        return (boundingBox.x >= smallerX && boundingBox.x <= largerX && boundingBox.y >= smallerY && boundingBox.y <= largerY);
    }

    setNewPosition(newPoint: Point) {
        this.startPoint = newPoint;
        this.endPoint = new Point(this.startPoint.x + this.width, this.startPoint.y + this.height);
    }
    
    draw(pen : CanvasRenderingContext2D) {
        console.log("Drawing Square", this.startPoint, this.endPoint)
        pen.strokeStyle = 'red';
        pen.strokeRect(this.startPoint.x, this.startPoint.y, this.width, this.height);
        pen.closePath();
    }
}
