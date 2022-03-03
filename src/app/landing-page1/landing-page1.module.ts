import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { QloudModule } from '../qloud/qloud.module';
import { RevolutionSlider1Module } from './components/revolution-slider1/revolution-slider1.module';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionVerticalTwoComponent } from './components/section-vertical-two/section-vertical-two.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { PricingPlanComponent } from './components/pricing-plan/pricing-plan.component';
import { IconBoxComponent } from './components/icon-box/icon-box.component';
import { YourApplicationComponent } from './components/your-application/your-application.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];

@NgModule({
  declarations: [IndexComponent, SectionOneComponent, SectionVerticalTwoComponent, NavTabsComponent, PricingPlanComponent, IconBoxComponent, YourApplicationComponent, OurTestimonialComponent, OurBlogComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule,
    RevolutionSlider1Module
  ]
})
export class LandingPage1Module { }
