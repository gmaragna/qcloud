import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-left iq-title-box-2',
    title: 'Are you ready for a better, more  productive business?',
    subTitle: 'Let\'s Get Started',
    titleIcon: '',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.'

  };
  constructor() { }

  ngOnInit(): void {
  }

}
