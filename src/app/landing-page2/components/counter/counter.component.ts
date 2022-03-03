import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  List: any[] = [
    { title: 'Successfully Served' ,content: 'Happy Clients' ,timer: 1790},
    { title: 'Successfully Completed' ,content: 'Branding Projects' ,timer: 491},
    { title: 'Recruited more than' ,content: 'Marketing Experts' ,timer: 245},
    { title: 'Publicly Published' ,content: 'Blog Posts' ,timer: 1090}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
