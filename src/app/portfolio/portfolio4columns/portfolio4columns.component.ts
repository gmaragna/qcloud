import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-portfolio4columns',
  templateUrl: './portfolio4columns.component.html',
  encapsulation: ViewEncapsulation.None
})
export class Portfolio4columnsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title: "Portfolio 4 Columns"
  };
  
  List: any[] = [
    { title: 'Dignissimos wisi cillum',desc: 'Print — Branding', image: 'assets/images/portfolio/01.png',class: 'creative design print-branding', link : '/portfolio-details' },
    { title: 'Dignissimos wisi cillum',desc: 'Design', image: 'assets/images/portfolio/02.png',class: 'creative html-ecommerce', link : '/portfolio-details' },
    { title: 'Dignissimos wisi cillum',desc: 'html — eCommerce', image: 'assets/images/portfolio/03.png',class: 'design print-branding', link : '/portfolio-details' },
    { title: 'Dignissimos wisi cillum',desc: 'Print — Branding', image: 'assets/images/portfolio/04.png',class: 'creative print-branding html-ecommerce', link : '/portfolio-details' },
    { title: 'Dignissimos wisi cillum',desc: 'html — eCommerce', image: 'assets/images/portfolio/05.png',class: 'creative design print-branding', link : '/portfolio-details' },
    { title: 'Dignissimos wisi cillum',desc: 'html — eCommerce', image: 'assets/images/portfolio/06.png',class: 'design html-ecommerce', link : '/portfolio-details' },
  ]
  
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
