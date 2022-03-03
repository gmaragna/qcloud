import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html'
})
export class GetStartedComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-box-1',
    title: 'Get Started',
    titleIcon: ''
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
