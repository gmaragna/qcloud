import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-story',
  templateUrl: './customer-story.component.html'
})
export class CustomerStoryComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Customer Stories',
    subTitle: 'Stories',
    titleIcon: ''
  };

  List: any[] = [
    { title: 'Dignissimos wisi cillum', image: './assets/images/portfolio/01.png',desc: 'Print — Branding' },
    { title: 'Dignissimos wisi cillum', image: './assets/images/portfolio/02.png',desc: 'WordPress — eCommerce' },
    { title: 'Dignissimos wisi cillum', image: './assets/images/portfolio/03.png',desc: 'Print — Branding' },
    { title: 'Dignissimos wisi cillum', image: './assets/images/portfolio/04.png',desc: 'WordPress — eCommerce' },
    { title: 'Dignissimos wisi cillum', image: './assets/images/portfolio/05.png',desc: 'WordPress — eCommerce' },
    { title: 'Dignissimos wisi cillum', image: './assets/images/portfolio/06.png',desc: 'WordPress — eCommerce' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
