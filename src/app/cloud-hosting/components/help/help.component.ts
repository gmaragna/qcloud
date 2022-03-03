import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html'
})
export class HelpComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left  mb-0 iq-title-white iq-title-box-2',
    title: 'Let Us Help You Grow',
    titleIcon: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
