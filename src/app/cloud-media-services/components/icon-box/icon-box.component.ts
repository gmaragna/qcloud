import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html'
})
export class IconBoxComponent implements OnInit {


  List: any[] = [
    { title: 'Streamlined Content  Production', image: './assets/images/icon-box/17.png' , desc:'It is a long established fact that a reader will be distracted by the of readable content of a page.' },
    { title: 'Smarter Content  Management', image: './assets/images/icon-box/18.png' , desc:'It is a long established fact that a reader will be distracted by the of readable content of a page.' },
    { title: 'Global Content Delivery', image: './assets/images/icon-box/19.png' , desc:'It is a long established fact that a reader will be distracted by the of readable content of a page.' },
    { title: 'Personalized  Experiences', image: './assets/images/icon-box/20.png' , desc:'It is a long established fact that a reader will be distracted by the of readable content of a page.' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
