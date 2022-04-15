import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { ShapeComponent } from './components/shape/shape.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { GamesComponent } from './games/games.component';
import { IconNavComponent } from './components/nav/icon-nav/icon-nav.component';
import { AboutComponent } from './jongleur/about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { JongleurComponent } from './jongleur/jongleur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ShapeComponent,
    HomeComponent,
    NewsComponent,
    GamesComponent,
    IconNavComponent,
    AboutComponent,
    ConnectComponent,
    JongleurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
