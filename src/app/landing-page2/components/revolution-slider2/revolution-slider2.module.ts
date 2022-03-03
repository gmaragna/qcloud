import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionSlider2Component } from './revolution-slider2.component';

@NgModule({
  declarations: [RevolutionSlider2Component],
  imports: [
    CommonModule
  ],
  exports: [
    RevolutionSlider2Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RevolutionSlider2Module { }
