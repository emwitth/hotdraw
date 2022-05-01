import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class Selector implements Tool {
    name: string = 'selector';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): void {
        
    }

}
