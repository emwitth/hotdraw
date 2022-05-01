import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class Line implements Tool{
    name: string = 'line';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): void {
        
    }
}
