import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider3Component } from './revolution-slider3.component';

@NgModule({
  declarations: [RevolutionSlider3Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider3Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider3Module { }
