import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class LineTool implements Tool{
    name: string = 'line';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): Array<Shape> {
        var line: Line = new Line(startPoint, endPoint);
        shapes.push(line);
        return shapes;
    }
}

export class Line implements Shape {
    startPoint: Point;
    endPoint: Point;
    tolerance: number = 0.2;

    constructor(startPoint: Point, endPoint: Point) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    isInBoundingBox(boundingBox: Point): boolean {
        var AB = Math.sqrt((this.endPoint.x-this.startPoint.x)*(this.endPoint.x-this.startPoint.x)+
                            (this.endPoint.y-this.startPoint.y)*(this.endPoint.y-this.startPoint.y));
        var AP = Math.sqrt((boundingBox.x-this.startPoint.x)*(boundingBox.x-this.startPoint.x)+
                            (boundingBox.y-this.startPoint.y)*(boundingBox.y-this.startPoint.y));
        var PB = Math.sqrt((this.endPoint.x-boundingBox.x)*(this.endPoint.x-boundingBox.x)+
                            (this.endPoint.y-boundingBox.y)*(this.endPoint.y-boundingBox.y));

        return (AP + PB - this.tolerance) <= AB && AB <= (AP + PB + this.tolerance);
    }

    setNewPosition(newPos: Point): void {
        var xChange: number = this.startPoint.x-newPos.x;
        var yChange: number = this.startPoint.y-newPos.y;

        this.startPoint = newPos;
        this.endPoint = new Point(this.endPoint.x-xChange, this.endPoint.y-yChange);
    }

    draw(pen: CanvasRenderingContext2D): void {
        console.log("Drawing Line", this.startPoint, this.endPoint);
        pen.strokeStyle = 'purple';
        pen.beginPath();
        pen.moveTo(this.startPoint.x, this.startPoint.y);
        pen.lineTo(this.endPoint.x, this.endPoint.y);
        pen.closePath();
        pen.stroke();
    }
    
}