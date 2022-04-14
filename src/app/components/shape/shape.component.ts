import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'jng-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit
{
  @Input() shape: 'cross' | 'circle' = 'cross';
  @Input() color: string = '#fff';

  constructor() { }

  ngOnInit(): void {
  }

}
