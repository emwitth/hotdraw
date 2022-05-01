import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class Square implements Tool{
    name: string = 'square';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): void {
        
    }
}
