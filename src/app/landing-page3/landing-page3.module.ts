import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QloudModule } from '../qloud/qloud.module';
import { IndexComponent } from './index/index.component';
import { RevolutionSlider3Module } from './components/revolution-slider3/revolution-slider3.module';
import { IconBoxComponent } from './components/icon-box/icon-box.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProcessComponent } from './components/process/process.component';
import { SecurityComponent } from './components/security/security.component';
import { FeaturesComponent } from './components/features/features.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ContactComponent } from './components/contact/contact.component';
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
  declarations: [IndexComponent, IconBoxComponent, AboutUsComponent, ProcessComponent, SecurityComponent, FeaturesComponent, OurClientComponent, TestimonialComponent, ContactComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule,
    RevolutionSlider3Module
  ]
})
export class LandingPage3Module { }
