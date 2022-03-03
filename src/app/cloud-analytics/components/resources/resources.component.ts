import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html'
})
export class ResourcesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-box-2',
    title: 'Big DataGuides and Resources',
    subTitle: 'Resources',
    titleIcon: '',
    description: 'Seamlessly unlock business insights with Qloud Platform’s fully managed, proven,end-to-end data analytics products. Remove operational complexities of data analytics with a serverless approach and make important business decisions quickly and efficiently.'
  };

  List1: any[] = [
    { title: 'Marketing',image: './assets/images/icon-box/13.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Social Services',image: './assets/images/icon-box/03.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  ];
  List2: any[] = [
    { title: 'Clean Design',image: './assets/images/icon-box/14.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Creative Ideas',image: './assets/images/icon-box/16.png', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
