import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QloudModule } from '../qloud/qloud.module';
import { IndexComponent } from './index/index.component';
import { RevolutionSlider7Module } from './components/revolution-slider7/revolution-slider7.module';
import { OverviewBlockComponent } from './components/overview-block/overview-block.component';
import { IconBoxComponent } from './components/icon-box/icon-box.component';
import { CustomerStoryComponent } from './components/customer-story/customer-story.component';
import { ProcessComponent } from './components/process/process.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { from } from 'rxjs';
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
  declarations: [IndexComponent, OverviewBlockComponent, IconBoxComponent, CustomerStoryComponent, ProcessComponent, OurTestimonialComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule,
    RevolutionSlider7Module
  ]
})
export class CloudMediaServicesModule { }
