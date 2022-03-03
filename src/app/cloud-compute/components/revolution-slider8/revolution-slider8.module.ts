import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider8Component } from './revolution-slider8.component';



@NgModule({
  declarations: [RevolutionSlider8Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider8Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider8Module { }
