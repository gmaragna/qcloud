import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes  } from "@angular/router";
import { QloudModule } from "../../qloud/qloud.module";
import { ContactUs1Component } from './contact-us1.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactCardComponent } from './contact-card/contact-card.component';


const routes: Routes = [
  {
    path: '',
    component: ContactUs1Component
  }
];

@NgModule({
  declarations: [ContactUs1Component, ContactUsComponent, ContactCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QloudModule
  ]
})
export class ContactUs1Module { }
