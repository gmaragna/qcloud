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
    titleIcon: '',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  };

  supports: any[] = [
    { title: 'Boost SEO ranking' },
    { title: 'Social Sharing' },
    { title: 'Marketing' },
    { title: 'Retention' },
    { title: 'Visual Reviews' },
    { title: 'Reviews Generation' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
