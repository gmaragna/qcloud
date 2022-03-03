import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Meet The Best Team	',
    subTitle: 'Work With Us',
    titleIcon: ''
  };
  
  List1: any[] = [
    { name: 'Marcash Dane', design: 'Developer', image: 'assets/images/team/05.jpg',
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    },
    { name: 'Greta Life', design: 'Designer', image: 'assets/images/team/04.jpg' ,
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    },
    { name: 'Petey Cruiser', design: 'Developer', image: 'assets/images/team/03.jpg',
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    },
    { name: 'Anna Mull', design: 'CEO', image: 'assets/images/team/02.jpg',
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    },
    { name: 'Handry White', design: 'Project Manager', image: 'assets/images/team/01.jpg' ,
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    }
  ];
  List2: any[] = [
    { name: 'Marcash Dane', design: 'Developer', image: 'assets/images/team/05.jpg',
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    },
    { name: 'Greta Life', design: 'Designer', image: 'assets/images/team/04.jpg' ,
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    },
    { name: 'Petey Cruiser', design: 'Developer', image: 'assets/images/team/03.jpg',
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    },
    { name: 'Anna Mull', design: 'CEO', image: 'assets/images/team/02.jpg',
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    },
    { name: 'Handry White', design: 'Project Manager', image: 'assets/images/team/01.jpg' ,
      socialLinks: [
        { icon: 'fa fa-facebook', link: '#' },
        { icon: 'fa fa-twitter', link: '#' },
        { icon: 'fa fa-instagram', link: '#' }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
