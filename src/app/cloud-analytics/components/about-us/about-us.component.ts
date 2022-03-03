import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-box-2',
    title: 'Fully Managed Serverless Analytics ',
    subTitle: 'About Us',
    description: 'Seamlessly unlock business insights with Qloud Platform’s fully managed, proven, end-to-end data analytics products. Remove operational complexities of data analytics with a serverless approach and make important business decisions quickly and efficiently.',
    descClass: 'pr-lg-5',
    titleIcon: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
