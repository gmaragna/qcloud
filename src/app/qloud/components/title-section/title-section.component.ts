import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html'
})
export class TitleSectionComponent implements OnInit {
  @Input() titleSectionProp: any;
  constructor() { }

  ngOnInit(): void {
  }

}
