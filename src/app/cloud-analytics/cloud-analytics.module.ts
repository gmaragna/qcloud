import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QloudModule } from '../qloud/qloud.module';
import { IndexComponent } from './index/index.component';
import { RevolutionSlider5Module } from './components/revolution-slider5/revolution-slider5.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';
import { OurTestimonialComponent } from './components/our-testimonial/our-testimonial.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { GetStartedComponent } from './components/get-started/get-started.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
    ]
  }
];


@NgModule({
  declarations: [IndexComponent, AboutUsComponent, ProductsComponent, OurTestimonialComponent, OurClientsComponent, ResourcesComponent, GetStartedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule,
    RevolutionSlider5Module
  ]
})
export class CloudAnalyticsModule { }
