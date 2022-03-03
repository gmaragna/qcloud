import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider1Component } from './revolution-slider1.component';

@NgModule({
  declarations: [RevolutionSlider1Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider1Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider1Module { }
