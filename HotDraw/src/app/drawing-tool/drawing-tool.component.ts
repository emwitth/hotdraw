import { Component, OnInit } from '@angular/core';
import { Tool } from '../tool';
import { Selector } from '../selector';
import { SquareTool } from '../square';
import { CircleTool } from '../circle';
import { LineTool } from '../line';
import { Pencil } from '../pencil';
import { Remove } from '../remove';

@Component({
  selector: 'app-drawing-tool',
  templateUrl: './drawing-tool.component.html',
  styleUrls: ['./drawing-tool.component.css']
})
export class DrawingToolComponent implements OnInit {

  selector: Selector = new Selector();
  square: SquareTool = new SquareTool();
  circle: CircleTool = new CircleTool();
  line: LineTool = new LineTool();
  pencil: Pencil = new Pencil();
  remove: Remove = new Remove();

  selectedTool: Tool;
  tools: Map<string, Tool> = new Map();
  

  constructor() { 
    this.tools.set(this.selector.getName(), this.selector);
    this.tools.set(this.square.getName(), this.square);
    this.tools.set(this.circle.getName(), this.circle);
    this.tools.set(this.line.getName(), this.line);
    this.tools.set(this.pencil.getName(), this.pencil);
    this.tools.set(this.remove.getName(), this.remove);
    this.selectedTool = this.selector;
  }

  ngOnInit(): void {
  }

  selectCurrentTool(tool: string) {
    var selected = this.tools.get(tool);
    this.selectedTool =  selected != undefined ? selected : this.selector; 
  }

}