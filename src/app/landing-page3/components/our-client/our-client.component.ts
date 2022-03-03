import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-client',
  templateUrl: './our-client.component.html'
})
export class OurClientComponent implements OnInit {

  Images: any[] = [
    { image: './assets/images/client/01.png'},
    { image: './assets/images/client/02.png'},
    { image: './assets/images/client/03.png'},
    { image: './assets/images/client/04.png'},
    { image: './assets/images/client/05.png'},
    { image: './assets/images/client/06.png'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
