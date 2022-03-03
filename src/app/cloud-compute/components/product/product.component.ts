import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Explore compute products',
    subTitle: 'Product',
    titleIcon: ''
  };

  List: any[] = [
    {
      title: 'Compute Engine',
      description: 'It is a long established fact that a reader will be distracted by the readable'
    },
    {
      title: 'Free Experience',
      services: [ { title: 'LOB apps' }, { title: 'Web hosting' },{ title: 'Databases' }, { title: 'Unlimited Applications' } ]
    },
    {
      title: 'Industry',
      services: [ { title: 'Education' }, { title: 'Energy' },{ title: 'Financial services' }, { title: 'Healthcare' }, { title: 'Life sciences' } ]
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
