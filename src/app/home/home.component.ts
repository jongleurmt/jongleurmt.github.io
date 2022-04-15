import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { innerNav, outerNav } from '../data/nav';
import { Link } from '../interfaces/link';
import { UrlService } from '../services/url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  outerNav = outerNav;

  constructor(
    private url: UrlService
  )
  { }

  ngOnInit(): void
  {
    
  }

  getInnerNav(): Link[]
  {
    return innerNav.find(i => i.url === this.url.currentPage)?.links || [];
  }
}
