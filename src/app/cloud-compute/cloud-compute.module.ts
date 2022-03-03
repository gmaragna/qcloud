import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QloudModule } from '../qloud/qloud.module';
import { IndexComponent } from './index/index.component';
import { RevolutionSlider8Module } from './components/revolution-slider8/revolution-slider8.module';
import { OurClientComponent } from './components/our-client/our-client.component';
import { ProductComponent } from './components/product/product.component';
import { CounterComponent } from './components/counter/counter.component';
import { ServiceTabComponent } from './components/service-tab/service-tab.component';
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
  declarations: [IndexComponent, OurClientComponent, ProductComponent, CounterComponent, ServiceTabComponent, ResourcesComponent, GetStartedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule,
    RevolutionSlider8Module
  ]
})
export class CloudComputeModule { }
