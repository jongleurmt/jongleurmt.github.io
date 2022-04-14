import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'loader'
  },
  {
    path: 'loader',
    component: LoaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
