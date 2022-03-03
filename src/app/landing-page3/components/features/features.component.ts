import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Our Feature Services',
    subTitle: 'Features',
    titleIcon: ''
  };

  List: any[] = [
    { 
      title: 'Public Cloud',
      image: 'assets/images/icon-box/10.png',
      link : '/services',
      desc : 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
    },
    { 
      title: 'Virtual Private Cloud',
      image: 'assets/images/icon-box/11.png',
      link : '/services',
      desc : 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
    },
    { 
      title: 'Private Cloud',
      image: 'assets/images/icon-box/12.png',
      link : '/services',
      desc : 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
    },
    { 
      title: 'Tally-as-a-Service',
      image: 'assets/images/icon-box/13.png',
      link : '/services',
      desc : 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
    },
    { 
      title: 'Banking Community Cloud',
      image: 'assets/images/icon-box/14.png',
      link : '/services',
      desc : 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
    },
    { 
      title: 'Load Balancing',
      image: 'assets/images/icon-box/15.png',
      link : '/services',
      desc : 'It is a long established fact that a reader will be distracted by the of readable content of a page.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
