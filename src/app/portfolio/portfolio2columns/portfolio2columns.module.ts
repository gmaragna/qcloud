import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { Portfolio2columnsComponent } from '../portfolio2columns/portfolio2columns.component';

const routes: Routes = [
  {
    path: '',
    component: Portfolio2columnsComponent
  }
];

@NgModule({
  declarations: [Portfolio2columnsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class Portfolio2columnsModule { }
