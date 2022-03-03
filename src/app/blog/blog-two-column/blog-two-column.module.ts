import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { BlogTwoColumnComponent } from './blog-two-column.component';


const routes: Routes = [
  {
    path: '',
    component: BlogTwoColumnComponent
  }
];
@NgModule({
  declarations: [BlogTwoColumnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class BlogTwoColumnModule { }
