import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { PricingPlanComponent } from './pricing-plan.component';
import { PlanComponent } from './plan/plan.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';
import { OurBlogComponent } from './our-blog/our-blog.component';

const routes: Routes = [
  {
    path: '',
    component: PricingPlanComponent
  }
];

@NgModule({
  declarations: [PricingPlanComponent, PlanComponent, WorkingLanguageComponent,OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class PricingPlanModule { }
