import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class CircleTool implements Tool{
    name: string = 'circle';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): void {
        
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
                + (Math.pow((this.endPoint.x-this.startPoint.x), 2)))/2;
    }

    isInBoundingBox(boundingBox: Point) : boolean {
        return (boundingBox.x >= (this.startPoint.x - this.radius) && boundingBox.y >= (this.startPoint.y - this.radius));
    }

    setNewPosition(newPoint: Point) {
        this.startPoint = newPoint;
    }
    
    draw(pen : CanvasRenderingContext2D) {

    }
}