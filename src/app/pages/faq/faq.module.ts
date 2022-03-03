import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { FaqComponent } from './faq.component';
import { QuestionsComponent } from './questions/questions.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';
import { OurBlogComponent } from './our-blog/our-blog.component';

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
  }
];

@NgModule({
  declarations: [FaqComponent, QuestionsComponent, WorkingLanguageComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class FaqModule { }
