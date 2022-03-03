import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PluginsService } from '../../qloud/plugins.service';
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PricingPlanComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };

  data : any = {
    title: "Pricing"
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
