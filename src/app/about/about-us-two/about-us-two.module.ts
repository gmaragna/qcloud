import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { AboutUsTwoComponent } from './about-us-two.component';
import { FeaturesComponent } from './features/features.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { IconBoxComponent } from './icon-box/icon-box.component';
import { OurBlogComponent } from './our-blog/our-blog.component';


const routes: Routes = [
  {
    path: '',
    component: AboutUsTwoComponent,
  }
];

@NgModule({
  declarations: [AboutUsTwoComponent, FeaturesComponent, WorkingLanguageComponent, AboutUsComponent, IconBoxComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class AboutUsTwoModule { }
