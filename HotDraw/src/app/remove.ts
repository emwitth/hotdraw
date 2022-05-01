import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class Remove implements Tool{
    name: string = 'remove';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): void {
        
    }
}
