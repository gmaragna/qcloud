import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
})
export class TopBannerComponent implements OnInit {

  @Input()  data : any;
  
  constructor() { }

  ngOnInit() {
  }

}
