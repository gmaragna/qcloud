import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { ContactUs2Component } from './contact-us2.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {
    path: '',
    component: ContactUs2Component
  }
];

@NgModule({
  declarations: [ContactUs2Component, ContactCardComponent, ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class ContactUs2Module { }
