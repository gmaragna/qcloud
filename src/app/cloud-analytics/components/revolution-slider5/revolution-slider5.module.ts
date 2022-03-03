import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider5Component } from './revolution-slider5.component';



@NgModule({
  declarations: [RevolutionSlider5Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider5Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider5Module { }
