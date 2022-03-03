import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html'
})
export class ProcessComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-box-2',
    title: 'Why Google Cloud',
    subTitle: 'Why Choose',
    titleIcon: '',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has. '
  };

  List1: any[] = [
    { title: 'Marketing', symbol: '', value: 61 },
    { title: 'Network edge location', symbol: '', value: 134 },
    { title: 'Customer', symbol: '+', value: 200 }
  ];

  List2: any[] = [
    { title: 'Marketing', image: './assets/images/process/01.png' ,desc: 'There are many variations of passages of readable content page looking' },
    { title: 'Social Services', image: './assets/images/process/03.png' ,desc: 'There are many variations of passages of readable content page looking' },
  ];

  List3: any[] = [
    { title: 'Clean Design', image: './assets/images/process/02.png' ,desc: 'There are many variations of passages of readable content page looking' },
    { title: 'Creative Ideas', image: './assets/images/process/03.png' ,desc: 'There are many variations of passages of readable content page looking' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
