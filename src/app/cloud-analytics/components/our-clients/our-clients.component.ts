import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html'
})
export class OurClientsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-box-2  iq-title-white',
    title: 'Free until you\'re ready to launch',
    titleIcon: '',
    description: 'Build your site for free and take as long as you need. (That’s right, no trial here.) just add a site plan and custom domain when you’re ready for the world.'
  };

  Images: any[] = [
    { image: './assets/images/client/c1-1.png' },
    { image: './assets/images/client/c1-2.png' },
    { image: './assets/images/client/c1-3.png' },
    { image: './assets/images/client/c1-4.png' },
    { image: './assets/images/client/c1-5.png' },
    { image: './assets/images/client/c1-6.png' },
    { image: './assets/images/client/c1-7.png' },
    { image: './assets/images/client/c1-8.png' },
    { image: './assets/images/client/c1-9.png' },
    { image: './assets/images/client/c1-10.png' },
    { image: './assets/images/client/c1-11.png' },
    { image: './assets/images/client/c1-12.png' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
