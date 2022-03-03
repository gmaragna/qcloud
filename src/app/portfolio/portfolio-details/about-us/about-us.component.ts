import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'iq-title-box-2',
    title: 'We lead and support our customer’s cloud',
    subTitle: 'About Us',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    titleIcon: ''
  };
  supports: any[] = [
    { title: 'Boost SEO ranking' },
    { title: 'Social Sharing' },
    { title: 'Marketing' },
    { title: 'Retention' },
    { title: 'Visual Reviews' },
    { title: 'Reviews Generation' }
  ];

  List1 : any[] = [
    { title: 'Engineers and Developers' , content: '' ,timer: 50, symbol: '+'},
    { title: 'Customers' , content: 'k' ,timer: 100, symbol: '+'}
  ];
  
  List2 : any[] = [
    { title: 'Instances Deployed' , content: 'm' ,timer: 35, symbol: '+'},
    { title: 'Support answers per month' , content: 'm' ,timer: 15, symbol: '+'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
