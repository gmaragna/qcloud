import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  List: any[] = [
    { title: 'Happy Clients' ,sysmbol: '' , value: 1520},
    { title: 'Completed projects' ,sysmbol: '+' , value: 2000},
    { title: 'Team members' ,sysmbol: '' , value: 240},
    { title: 'Questions Answered' ,sysmbol: '' , value: 750}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
