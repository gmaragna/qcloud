import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { DetailsComponent } from './details/details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';
import { OurBlogComponent } from './our-blog/our-blog.component';


const routes: Routes = [
  {
    path: '',
    component: PortfolioDetailsComponent
  }
];
@NgModule({
  declarations: [PortfolioDetailsComponent, DetailsComponent, AboutUsComponent, WorkingLanguageComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class PortfolioDetailsModule { }
