import { Point } from "./point";
import { Shape } from "./shape";

export interface Tool {
    name: string;

    getName(): string;

    performAction(shapes: Shape[], startPoint: Point, endPoint: Point): any;
}
