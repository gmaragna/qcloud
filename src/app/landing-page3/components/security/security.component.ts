import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html'
})
export class SecurityComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center mb-0 iq-title-box-2',
    title: 'Security for any App, any Platform, any Cloud',
    subTitle: 'Security',
    titleIcon: ''
  };

  Sliders: any[] = [
    {
      id : 'Google-Cloud-Platform',
      title: 'Google Cloud Platform',
      desc : 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
      link: '#',
      image : 'assets/images/security/01.png'
    },
    {
      id : 'docker',
      title: 'Docker',
      desc : 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
      link: '#',
      image : 'assets/images/security/02.png',
    },
    {
      id : 'kubernetes',
      title: 'Kubernetes',
      desc : 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
      link: '#',
      image : 'assets/images/security/03.png'
    },
    {
      id : 'Openshift',
      title: 'Red Hat OpenShift',
      desc : 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
      link: '#',
      image : 'assets/images/security/04.png'
    },
    {
      id : 'AWS-2',
      title: 'Amazon Web Services',
      desc : 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
      link: '#',
      image : 'assets/images/security/05.png'
    },
    {
      id : 'azure',
      title: 'Microsoft Azure',
      desc : 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
      link: '#',
      image : 'assets/images/security/06.png'
    },
    {
      id : 'unnamed-11-2',
      title: 'Mesosphere',
      desc : 'The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin',
      link: '#',
      image : 'assets/images/security/07.png'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
