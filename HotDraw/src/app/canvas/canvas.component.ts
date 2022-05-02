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

  constructor(private drawingToolService: DrawingToolService) {
    this.shapes = [];
  }

  ngAfterViewInit(): void {
    this.pen = this.canvas.nativeElement.getContext('2d');
  }

  ngOnInit(): void {
    this.drawingToolService.toolChange.subscribe(currentTool => {
      this.drawingTool = currentTool;
    });
  }

  test(test: MouseEvent) {
    console.log(test.clientX, test.clientY);
    
  }
}
