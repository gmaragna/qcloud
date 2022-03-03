import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { OurTeamComponent } from './our-team.component';
import { TeamComponent } from './team/team.component';
import { WorkingLanguageComponent } from './working-language/working-language.component';
import { OurBlogComponent } from './our-blog/our-blog.component';

const routes: Routes = [
  {
    path: '',
    component: OurTeamComponent,
  }
];


@NgModule({
  declarations: [OurTeamComponent,TeamComponent, WorkingLanguageComponent, OurBlogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class OurTeamModule { }
