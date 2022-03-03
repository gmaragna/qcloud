import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html'
})
export class ResourcesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Compute Guides and Resources',
    subTitle: 'Resources',
    titleIcon: ''
  };

  List: any[] = [
    { title: 'Cloud Platform', image: './assets/images/icon-box/19.png', desc : 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'},
    { title: 'Cloud Professionals', image: './assets/images/icon-box/17.png', desc : 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'},
    { title: 'Compute Engine tutorials', image: './assets/images/icon-box/20.png', desc : 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
