import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { Portfolio3columnsComponent } from '../portfolio3columns/portfolio3columns.component';


const routes: Routes = [
  {
    path: '',
    component: Portfolio3columnsComponent
  }
];

@NgModule({
  declarations: [Portfolio3columnsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class Portfolio3columnsModule { }
