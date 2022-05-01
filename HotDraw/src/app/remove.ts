import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class Remove implements Tool{
    name: string = 'remove';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point) {
        if (shapes.length == 0) { return; }
        for (var i = 0; i < shapes.length; i++) {
            var selected = shapes[i];
            if (selected.isInBoundingBox(startPoint)) {
                shapes.splice(i, 1);
                break;
            }
        }
        return shapes;
    }
}
