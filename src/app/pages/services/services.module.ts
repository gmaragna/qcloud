import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { ServicesComponent } from './services.component';
import { OurServicesComponent } from '../services/our-services/our-services.component';
import { WorkingLanguageComponent } from '../services/working-language/working-language.component';
import { OurBlogComponent } from '../services/our-blog/our-blog.component';


const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
  }
];

@NgModule({
  declarations: [ServicesComponent, OurServicesComponent, WorkingLanguageComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class ServicesModule { }
