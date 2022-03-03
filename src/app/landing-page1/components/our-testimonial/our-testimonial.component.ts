import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-testimonial',
  templateUrl: './our-testimonial.component.html'
})
export class OurTestimonialComponent implements OnInit {

  titleSectionProp: any = {
    class: 'iq-title-box-2',
    title: 'Some Awesome Words By Our Customers',
    subTitle: 'Testimonial',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
