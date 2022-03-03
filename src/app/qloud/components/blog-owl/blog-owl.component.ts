import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-owl',
  templateUrl: './blog-owl.component.html'
})
export class BlogOwlComponent implements OnInit {

  @Input() blogList: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
