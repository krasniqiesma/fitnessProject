import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'views'},
  {path: '', loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
