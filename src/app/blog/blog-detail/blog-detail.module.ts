import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { BlogDetailComponent } from './blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogDetailComponent
  }
];
@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class BlogDetailModule { }
