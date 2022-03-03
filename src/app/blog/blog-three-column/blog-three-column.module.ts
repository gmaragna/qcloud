import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { BlogThreeColumnComponent } from './blog-three-column.component';

const routes: Routes = [
  {
    path: '',
    component: BlogThreeColumnComponent
  }
];
@NgModule({
  declarations: [BlogThreeColumnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class BlogThreeColumnModule { }
