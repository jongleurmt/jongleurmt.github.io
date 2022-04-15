import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/interfaces/link';

@Component({
  selector: 'app-icon-nav',
  templateUrl: './icon-nav.component.html',
  styleUrls: ['./icon-nav.component.scss']
})
export class IconNavComponent implements OnInit
{
  @Input() links: Link[] = [];
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Input() labels: 'bottom' | 'right' = 'bottom';

  constructor() { }

  ngOnInit(): void
  {
    
  }
}
