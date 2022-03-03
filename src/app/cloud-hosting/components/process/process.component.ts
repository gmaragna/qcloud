import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html'
})
export class ProcessComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Host your files in just a minute',
    subTitle: 'Process',
    titleIcon: ''
  };

  List: any[] = [
    { title: 'Connect your cloud', image: './assets/images/process/04.png' , desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'},
    { title: 'Choose a name', image: './assets/images/process/02.png' , desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'},
    { title: 'Deploy your content', image: './assets/images/process/03.png' , desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
