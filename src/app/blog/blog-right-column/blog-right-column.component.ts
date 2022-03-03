import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-blog-right-column',
  templateUrl: './blog-right-column.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BlogRightColumnComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title: "Right Column Blog"
  };

  List: any[] = [
    {
      img: './assets/images/blog/01.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Build Construction',
      link: '/blog-details',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/02.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Official Terraform Provider',
      link: '/blog-details',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/03.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'CCPA Compliance Update',
      link: '/blog-details',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/04.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Introducing Object Storage!',
      link: '/blog-details',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/01.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Content Marketing',
      link: '/blog-details',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/02.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Life Lack Meaning',
      link: '/blog-details',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    },
    {
      img: './assets/images/blog/03.png',
      name:  'Marketing',
      time: 'February 17, 2020',
      title: 'Construction industry',
      link: '/blog-details',
      desc: 'It is a long established fact that a reader will be distracted by the readable.',
    }
  ];
  
  constructor(private plugins: PluginsService) { }

  public navItems: any = topMenuBarItems;

  ngOnInit() {
    // Init all plugins...
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
