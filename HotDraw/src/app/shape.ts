import { Point } from "./point";
export interface Shape {
    startPoint: Point;
    endPoint: Point;

    isInBoundingBox(boundingBox: Point): void;
    setNewPosition(newPos: Point): void;
    draw(pen : CanvasRenderingContext2D): void;
}
