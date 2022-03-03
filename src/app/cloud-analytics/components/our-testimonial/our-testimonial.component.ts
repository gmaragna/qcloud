import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-testimonial',
  templateUrl: './our-testimonial.component.html'
})
export class OurTestimonialComponent implements OnInit {

  List: any[] = [
    { name: 'JD Scot', design: 'Designer, Qloud' , desc: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
    { name: 'Fitt Morgan', design: 'Designer, Qloud' , desc: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown.' },
    { name: 'Nik Jorden', design: 'Designer, Qloud' , desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley .' },
    { name: 'Julia Cooper', design: 'Designer, Qloud' , desc: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer.' },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
