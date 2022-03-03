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
      id: 'tab-expert-support',
      title: 'Expert Support',
      icon: 'ion ion-android-call',
      sub_title:"Spotlessly Optimized Call Flows",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      services: [ { title: 'Boost SEO ranking' },{ title: 'Social Sharing' },{ title: 'Marketing' },{ title: 'Retention' },{ title: 'Visual Reviews' },{ title: 'Reviews Generation' } ],
      link: '/about-us-1',
      active: true
    },
    {
      id: 'tab-performance',
      title: 'Performance',
      icon: 'fa fa-pie-chart',
      sub_title:"Real-Time Actionable Insights",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      services: [ { title: 'Boost SEO ranking' },{ title: 'Social Sharing' },{ title: 'Marketing' },{ title: 'Retention' },{ title: 'Visual Reviews' },{ title: 'Reviews Generation' } ],
      link: '/about-us-1'
    },
    {
      id: 'tab-integration',
      title: 'Integrations & Addons',
      icon: 'fa fa-user',
      sub_title:"Qloud As A Lead Magnet",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      services: [ { title: 'Boost SEO ranking' },{ title: 'Social Sharing' },{ title: 'Marketing' },{ title: 'Retention' },{ title: 'Visual Reviews' },{ title: 'Reviews Generation' } ],
      link: '/about-us-1'
    },
    {
      id: 'tab-collaboration',
      title: 'Collaboration',
      icon: 'fa fa-users',
      sub_title:"Explore Use Cases Of Qloud",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      services: [ { title: 'Boost SEO ranking' },{ title: 'Social Sharing' },{ title: 'Marketing' },{ title: 'Retention' },{ title: 'Visual Reviews' },{ title: 'Reviews Generation' } ],
      link: '/about-us-1'
    },
    {
      id: 'tab-monitoring',
      title: 'Monitoring',
      icon: 'fa fa-bar-chart',
      sub_title:"Monitoring",
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
      services: [ { title: 'Boost SEO ranking' },{ title: 'Social Sharing' },{ title: 'Marketing' },{ title: 'Retention' },{ title: 'Visual Reviews' },{ title: 'Reviews Generation' } ],
      link: '/about-us-1'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
