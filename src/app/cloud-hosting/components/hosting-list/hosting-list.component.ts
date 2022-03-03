import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosting-list',
  templateUrl: './hosting-list.component.html'
})
export class HostingListComponent implements OnInit {

  List: any[] = [
    {
      title: 'Simple & Reliable',
      services: [ { title: '10+ Cloud Providers' }, { title: 'All  Apps Supported' },{ title: 'Innovative Control Panel' }, { title: 'Unlimited Applications' } ]
    },
    {
      title: 'Free Experience',
      services: [ { title: '10+ Cloud Providers' }, { title: 'All  Apps Supported' },{ title: 'Innovative Control Panel' }, { title: 'Unlimited Applications' } ]
    },
    {
      title: 'Performance',
      services: [ { title: '10+ Cloud Providers' }, { title: 'All  Apps Supported' },{ title: 'Innovative Control Panel' }, { title: 'Unlimited Applications' } ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
