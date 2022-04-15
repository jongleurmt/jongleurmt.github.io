import { Component, OnInit } from '@angular/core';
import { MinMax } from '../interfaces/min-max';
import { Shape } from '../interfaces/shape';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit
{
  public shapes: Shape[] = [];

  constructor() { }

  ngOnInit(): void
  {
    const count = Math.floor(window.innerWidth / 100) * 3;
    this.shapes = new Array(count);

    for (var i = 0; i < count; i++)
    {
      const duration = this.randomRange(15, 30);
      this.shapes[i] = {
        type: this.randomRange(0, 2, true) == 1 ? 'circle' : 'cross',
        alpha: this.randomRange(0.05, 0.3),
        delay: this.randomRange(-duration * 2, duration * 1.5),
        duration: duration,
        offset: this.randomRange(5, 95),
        rotation: this.randomRange(0, 180),
        size: this.randomRange(2, 5),
        zIndex: this.randomRange(0, 2, true)
      };
    }
  }

  randomRange(min: number, max: number, toInt: boolean = false): number
  {
    const v = Math.random() * (max - min) + min;
    return toInt ? Math.floor(v) : v;
  }

  getShapeStyle(shape: Shape): any
  {
    return {
      'animation-duration': shape.duration + 's',
      'animation-delay': shape.delay + 's',
      'height': shape.size + 'rem',
      'left': shape.offset + 'vw',
      'opacity': shape.alpha,
      'transform': `rotate(${shape.rotation}deg)`,
      'width': shape.size + 'rem'
    }
  }
}
