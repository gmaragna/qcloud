import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html'
})
export class OurClientComponent implements OnInit {

  Images: any[] = [
    { image: './assets/images/client/c1.png' },
    { image: './assets/images/client/c2.png' },
    { image: './assets/images/client/c3.png' },
    { image: './assets/images/client/c4.png' },
    { image: './assets/images/client/c5.png' },
    { image: './assets/images/client/c6.png' },
    { image: './assets/images/client/c7.png' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
