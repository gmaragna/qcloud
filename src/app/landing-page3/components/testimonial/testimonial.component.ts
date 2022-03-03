import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html'
})
export class TestimonialComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: '100+ Companies are using Qloud',
    subTitle: 'Testimonial',
    titleIcon: ''
  };

  List: any[] = [
    {
      name: 'JD Scot',
      design: 'Designer, Qloud',
      image: 'assets/images/testimonial/01.png',
      desc: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text typesetting over the ever since the 1500s, when an unknown dummy text printer took a galley.'
    },
    {
      name: 'Haris Morgan',
      design: 'Designer, Qloud',
      image: 'assets/images/testimonial/02.png',
      desc: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever over the since the 1500s, when an unknown printer took a galley dummy text of type and scrambled.'
    },
    {
      name: 'Nik Jorden',
      design: 'Designer, Qloud',
      image: 'assets/images/testimonial/03.png',
      desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text over the ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
    },
    {
      name: 'Rinks Cooper',
      design: 'Designer, Qloud',
      image: 'assets/images/testimonial/01.png',
      desc: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown dummy text printer.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
