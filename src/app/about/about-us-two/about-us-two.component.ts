import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-about-us-two',
  templateUrl: './about-us-two.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AboutUsTwoComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title:"About Us 2"
  };
  
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
