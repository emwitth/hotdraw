import { Point } from "./point";
import { Shape } from "./shape";
import { Tool } from "./tool";

export class Selector implements Tool {
    name: string = 'selector';
    
    getName(): string {
        return this.name;
    }
    
    performAction(shapes: Shape[], startPoint: Point, endPoint: Point) {
        if (shapes.length == 0) { return; }
        for (var i = 0; i < shapes.length; i++) {
            var selected = shapes[i];
            if (selected.isInBoundingBox(startPoint)) {
                selected.setNewPosition(endPoint);
                break;
            }
        }
        return shapes;
    }

}
