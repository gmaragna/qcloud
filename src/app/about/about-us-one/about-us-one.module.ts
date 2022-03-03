import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { AboutUsOneComponent } from './about-us-one.component';
import { CounterComponent } from './counter/counter.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { YourApplicationComponent } from './your-application/your-application.component';
import { OurBlogComponent } from './our-blog/our-blog.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsOneComponent,
  }
];

@NgModule({
  declarations: [AboutUsOneComponent, CounterComponent, NavTabsComponent, YourApplicationComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class AboutUsOneModule { }
