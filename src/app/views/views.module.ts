import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { ViewsRoutingModule } from './views-routing.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    RouterModule
  ]
})
export class ViewsModule { }
