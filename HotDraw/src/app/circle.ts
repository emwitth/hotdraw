import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class Circle implements Tool{
    name: string = 'circle';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): void {
        
    }
}
