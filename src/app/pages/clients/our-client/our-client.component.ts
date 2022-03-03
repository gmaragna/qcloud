import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html'
})
export class OurClientComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'All Our Great Clients',
    subTitle: 'Our Clients',
    titleIcon: ''
  };

  Images1: any[] = [
    { image: './assets/images/client/01.png'},
    { image: './assets/images/client/02.png'},
    { image: './assets/images/client/03.png'},
    { image: './assets/images/client/04.png'},
    { image: './assets/images/client/05.png'},
    { image: './assets/images/client/06.png'},
    { image: './assets/images/client/01.png'},
    { image: './assets/images/client/02.png'},
    { image: './assets/images/client/03.png'},
  ];

  Images2: any[] = [
    { image: './assets/images/client/01.png'},
    { image: './assets/images/client/02.png'},
    { image: './assets/images/client/03.png'},
    { image: './assets/images/client/04.png'},
    { image: './assets/images/client/05.png'},
    { image: './assets/images/client/06.png'},
    { image: './assets/images/client/01.png'},
    { image: './assets/images/client/02.png'},
    { image: './assets/images/client/03.png'},
  ];

  Images3: any[] = [
    { image: './assets/images/client/01.png'},
    { image: './assets/images/client/02.png'},
    { image: './assets/images/client/03.png'},
    { image: './assets/images/client/04.png'},
    { image: './assets/images/client/05.png'},
    { image: './assets/images/client/06.png'},
    { image: './assets/images/client/01.png'},
    { image: './assets/images/client/02.png'},
    { image: './assets/images/client/03.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
