import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QloudModule } from '../qloud/qloud.module';
import { IndexComponent } from './index/index.component';
import { RevolutionSlider2Module } from './components/revolution-slider2/revolution-slider2.module';
import { OurClientComponent } from './components/our-client/our-client.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WorkingLanguageComponent } from './components/working-language/working-language.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProjectComponent } from './components/project/project.component';
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
  declarations: [IndexComponent, OurClientComponent, FeaturesComponent, AboutUsComponent, OurServicesComponent, WorkingLanguageComponent, CounterComponent, ProjectComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule,
    RevolutionSlider2Module
  ]
})
export class LandingPage2Module { }
