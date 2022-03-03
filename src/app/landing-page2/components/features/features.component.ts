import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  List: any[] = [
    { title: 'Select a service type', 'images' : './assets/images/work/01.png' ,'arrow' : './assets/images/arrow/01.png' , 'desc': 'It is a long established fact that a  freader will be distracted by the.'},
    { title: 'Deploy in seconds', 'images' : './assets/images/work/02.png' ,'arrow' : './assets/images/arrow/01.png' , 'desc': 'It is a long established fact that a  freader will be distracted by the.'},
    { title: 'Update automaticall', 'images' : './assets/images/work/03.png' , 'arrow' : '', 'desc': 'It is a long established fact that a  freader will be distracted by the.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
