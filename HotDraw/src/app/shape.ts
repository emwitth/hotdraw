import { Point } from "./point";
export interface Shape {
    startPoint: Point;
    endPoint: Point;

    isInBoundingBox(boundingBox: Point): boolean;
    setNewPosition(newPos: Point): void;
    draw(pen : CanvasRenderingContext2D): void;
}
