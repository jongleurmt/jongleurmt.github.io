import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { innerNav, outerNav } from './data/nav';
import { Link } from './interfaces/link';
import { UrlService } from './services/url.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  // Navigation
  innerNav = innerNav;
  outerNav = outerNav;

  constructor(
    private router: Router,
    private url: UrlService
  ) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd)
      {
        const segments = e.url.split('/');
        const url = segments[2];

        this.url.currentPage = url;
        if (!this.url.currentPage)
        {
          this.url.currentPage = 'games';
        }
      }
    })
  }

  /**
   * Toggles an element.
   * @param e The element to toggle.
   */
  toggleMenu(e: any)
  {
    $(e).toggleClass('show');
  }

  /**
   * Returns the inner navigation.
   * @returns The inner navigation.
   */
  getInnerNav(): Link[]
  {
    return innerNav.find(i => i.url === this.url.currentPage)?.links || [];
  }
}
