import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-two',
  templateUrl: './section-vertical-two.component.html'
})
export class SectionVerticalTwoComponent implements OnInit {

  titleSectionProp: any = {
    class: 'iq-title-box-2 mb-4',
    title: 'We lead and support our customer’s cloud',
    subTitle: 'About Us',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
