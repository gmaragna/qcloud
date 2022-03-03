import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider7Component } from './revolution-slider7.component';



@NgModule({
  declarations: [RevolutionSlider7Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider7Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider7Module { }
