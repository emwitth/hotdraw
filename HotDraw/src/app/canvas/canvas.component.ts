import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Shape } from '../shape';
import { Circle } from '../circle';
import { Square } from '../square';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') public canvas!: ElementRef;
  shapes: Array<Shape> = new Array();
  private pen!: CanvasRenderingContext2D;

  constructor() {}

  ngAfterViewInit(): void {
    this.pen = this.canvas.nativeElement.getContext('2d');
  }

  ngOnInit(): void {
    
  }

  test() {
    console.log("MouseDown!");
  }

}
