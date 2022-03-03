import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QloudModule } from '../qloud/qloud.module';
import { IndexComponent } from './index/index.component';
import { RevolutionSlider4Module } from './components/revolution-slider4/revolution-slider4.module';
import { HostingListComponent } from './components/hosting-list/hosting-list.component';
import { ProcessComponent } from './components/process/process.component';
import { HelpComponent } from './components/help/help.component';
import { ServiceTabComponent } from './components/service-tab/service-tab.component';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';
import { OurPartnerComponent } from './components/our-partner/our-partner.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];


@NgModule({
  declarations: [IndexComponent, HostingListComponent, ProcessComponent, HelpComponent, ServiceTabComponent, PricingPlanComponent, OurBlogComponent, OurPartnerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule,
    RevolutionSlider4Module
  ]
})
export class CloudHostingModule { }
