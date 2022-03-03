import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-white iq-title-box-1 wow fadeInUp',
    title: 'Our Contact',
    titleIcon: '',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
