import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html'
})
export class IconBoxComponent implements OnInit {

  List: any[] = [
    { title: 'Highest Gartner MQ', 'images' : './assets/images/icon-box/07.png' , 'desc': 'It is a long established fact that a reader will be distracted.'},
    { title: 'Protect Data Cloud', 'images' : './assets/images/icon-box/08.png' , 'desc': 'It is a long established fact that a reader will be distracted.'},
    { title: 'Over 3 Million Users', 'images' : './assets/images/icon-box/09.png' , 'desc': 'It is a long established fact that a reader will be distracted.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
