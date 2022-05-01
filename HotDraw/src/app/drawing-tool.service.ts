import { EventEmitter, Injectable, Output } from '@angular/core';
import { Tool } from './tool';

@Injectable({
  providedIn: 'root'
})
export class DrawingToolService {

  constructor() { }

  @Output() toolChange: EventEmitter<Tool> = new EventEmitter();

  changeTool(tool: Tool) {
    this.toolChange.emit(tool);
  }
}
