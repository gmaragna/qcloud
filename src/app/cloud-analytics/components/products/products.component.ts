import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Big data products',
    subTitle: 'Products',
    titleIcon: ''
  };

  List: any[] = [
    {
      title: 'Cloud Dataflow',
      image: './assets/images/icon-box/10.png',
      link: '/services',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
    },
    {
      title: 'Cloud Dataproc',
      image: './assets/images/icon-box/11.png',
      link: '/services',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
    },
    {
      title: 'Cloud Pub/Sub',
      image: './assets/images/icon-box/13.png',
      link: '/services',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
    },
    {
      title: 'Cloud Data Transfer',
      image: './assets/images/icon-box/12.png',
      link: '/services',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
    },
    {
      title: 'Cloud Data Fusion',
      image: './assets/images/icon-box/06.png',
      link: '/services',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
    },
    {
      title: 'Cloud Composer',
      image: './assets/images/icon-box/14.png',
      link: '/services',
      desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
