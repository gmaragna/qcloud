import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { BlogRightColumnComponent } from './blog-right-column.component';

const routes: Routes = [
  {
    path: '',
    component: BlogRightColumnComponent
  }
];

@NgModule({
  declarations: [BlogRightColumnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class BlogRightColumnModule { }
