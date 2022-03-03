import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider4Component } from './revolution-slider4.component';



@NgModule({
  declarations: [RevolutionSlider4Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider4Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider4Module { }
