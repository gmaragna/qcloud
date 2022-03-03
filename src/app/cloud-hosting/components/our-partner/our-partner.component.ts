import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html'
})
export class OurPartnerComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-1',
    title: 'Our Partners',
    titleIcon: ''
  };

  Images: any[] = [
    { image: './assets/images/client/c1.png'},
    { image: './assets/images/client/c2.png'},
    { image: './assets/images/client/c3.png'},
    { image: './assets/images/client/c4.png'},
    { image: './assets/images/client/c5.png'},
    { image: './assets/images/client/c6.png'},
    { image: './assets/images/client/c7.png'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
