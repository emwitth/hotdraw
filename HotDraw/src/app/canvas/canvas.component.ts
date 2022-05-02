import { Point } from './../point';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { DrawingToolService } from '../drawing-tool.service';
import { Shape } from '../shape';
import { Circle } from '../circle';
import { Square } from '../square';
import { Tool } from '../tool';
import { Selector } from '../selector';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') public canvas!: ElementRef;
  shapes: Array<Shape>;
  private pen!: CanvasRenderingContext2D;
  //default tool is selector;
  drawingTool : Tool = new Selector();
  startPoint: Point = new Point(0,0);
  endPoint: Point = new Point(0,0);
  xMultiplyer = 0;
  yMultiplyer = 0;

  constructor(private drawingToolService: DrawingToolService) {
    this.shapes = [];
  }

  ngAfterViewInit(): void {
    this.pen = this.canvas.nativeElement.getContext('2d');
    console.log(this.canvas)
    console.log(this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    console.log(this.canvas.nativeElement.clientWidth, this.canvas.nativeElement.clientHeight);
    this.xMultiplyer = this.canvas.nativeElement.width/this.canvas.nativeElement.clientWidth;
    this.yMultiplyer = this.canvas.nativeElement.height/this.canvas.nativeElement.clientHeight;
    console.log(this.xMultiplyer, this.yMultiplyer);
  }

  ngOnInit(): void {
    this.drawingToolService.toolChange.subscribe(currentTool => {
      this.drawingTool = currentTool;
    });
  }

  clearCanvas(){
    this.shapes = [];
    this.pen.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  down(event: MouseEvent) {
    console.log((event.clientX-this.canvas.nativeElement.offsetLeft)*this.xMultiplyer, 
                (event.clientY-this.canvas.nativeElement.offsetTop)*this.yMultiplyer);
    this.startPoint = new Point((event.clientX-this.canvas.nativeElement.offsetLeft)*this.xMultiplyer,
                              (event.clientY-this.canvas.nativeElement.offsetTop)*this.yMultiplyer);
  }

  up(event: MouseEvent) {
    console.log((event.clientX-this.canvas.nativeElement.offsetLeft)*this.xMultiplyer, 
                (event.clientY-this.canvas.nativeElement.offsetTop)*this.yMultiplyer);
    this.endPoint = new Point((event.clientX-this.canvas.nativeElement.offsetLeft)*this.xMultiplyer,
                              (event.clientY-this.canvas.nativeElement.offsetTop)*this.yMultiplyer);
    console.log(this.startPoint, this.endPoint);
    this.drawingTool.performAction(this.shapes, this.startPoint, this.endPoint);
    this.pen.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.shapes.forEach((shape: Shape) => {
      shape.draw(this.pen);
    });
  }
}
