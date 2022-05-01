import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class Pencil implements Tool{
    name: string = 'pencil';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): void {
        
    }
}
