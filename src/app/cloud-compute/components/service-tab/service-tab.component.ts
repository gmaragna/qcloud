import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-tab',
  templateUrl: './service-tab.component.html'
})
export class ServiceTabComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center  iq-title-box-2',
    title: 'Our Best Services',
    subTitle: 'Service',
    titleIcon: ''
  };

  List: any[] = [
    {
      id: 'tab-compute-engine',
      title: 'Compute Engine',
      icon: 'ion ion-android-call',
      image: './assets/images/tab/05.png',
      sub_title:"Compute Engine",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      active: true
    },
    {
      id: 'tab-application-service',
      title: 'Application Services',
      icon: 'fa fa-pie-chart',
      sub_title:"Real-Time Actionable Insights",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      services: [ { title: 'Boost SEO ranking' },{ title: 'Social Sharing' },{ title: 'Marketing' },{ title: 'Retention' },{ title: 'Visual Reviews' },{ title: 'Reviews Generation' } ],
      link: '/about-us-1'
    },
    {
      id: 'tab-migrate',
      title: 'Migrate for Compute Engine',
      icon: 'fa fa-user',
      sub_title:"Qloud As A Lead Magnet",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      services: [ { title: 'Boost SEO ranking' },{ title: 'Social Sharing' },{ title: 'Marketing' },{ title: 'Retention' },{ title: 'Visual Reviews' },{ title: 'Reviews Generation' } ],
      link: '/about-us-1'
    },
    {
      id: 'tab-cloud-gpu',
      title: 'Cloud GPUs',
      icon: 'fa fa-users',
      sub_title:"Cloud GPUs",
      image: './assets/images/tab/05.png',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    },
    {
      id: 'tab-power',
      title: 'Power Full Engine',
      icon: 'fa fa-bar-chart',
      sub_title:"Monitoring",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      services: [ { title: 'Boost SEO ranking' },{ title: 'Social Sharing' },{ title: 'Marketing' },{ title: 'Retention' },{ title: 'Visual Reviews' },{ title: 'Reviews Generation' } ],
      link: '/about-us-1'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
