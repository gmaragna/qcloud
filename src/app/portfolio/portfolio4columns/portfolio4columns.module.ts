import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { Portfolio4columnsComponent } from './portfolio4columns.component';


const routes: Routes = [
  {
    path: '',
    component: Portfolio4columnsComponent
  }
];

@NgModule({
  declarations: [Portfolio4columnsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class Portfolio4columnsModule { }
