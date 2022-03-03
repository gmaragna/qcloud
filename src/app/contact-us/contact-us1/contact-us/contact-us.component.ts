import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html'
})
export class ContactUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-box-2',
    title: 'Contact With US',
    subTitle: 'Get In Touch',
    titleIcon: '',
    description: 'It is a long established fact that a reader will be distracted'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
