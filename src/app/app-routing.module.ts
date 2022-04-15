import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './jongleur/about/about.component';
import { JongleurComponent } from './jongleur/jongleur.component';
import { LoaderComponent } from './loader/loader.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app/games'
  },
  {
    path: 'loader',
    component: LoaderComponent
  },
  {
    path: 'app',
    component: HomeComponent,
    children: [
      {
        path: 'jongleur',
        component: JongleurComponent,
      },
      {
        path: 'jongleur/about',
        component: AboutComponent
      },
      {
        path: 'jongleur/connect',
        component: ConnectComponent
      },
      {
        path: 'games',
        component: GamesComponent
      },
      {
        path: 'news',
        component: NewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
