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

    constructor(startPoint: Point, endPoint: Point) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    isInBoundingBox(boundingBox: Point): boolean {
        throw new Error("Method not implemented.");
    }

    setNewPosition(newPos: Point): void {
        throw new Error("Method not implemented.");
    }

    draw(pen: CanvasRenderingContext2D): void {
        pen.strokeStyle = 'purple';
        pen.beginPath();
        pen.moveTo(this.startPoint.x, this.startPoint.y);
        pen.lineTo(this.endPoint.x, this.endPoint.y);
        pen.closePath();
        pen.stroke();
    }
    
}