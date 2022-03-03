import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html'
})
export class PricingPlanComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center iq-title-box-2',
    title: 'Pricing & Plan ',
    subTitle: 'Pricing',
    titleIcon: ''
  };

  items: any[] = [
    {
      title: "Basic",
      description: "It is a long established fact that a reader will be distracted",
      price: "Free",
      plan_desc: "",
      services: [ { title: "Feedback System" }, { title: "Social Integration" } ,{ title: "Push Notifications " },{ title: "Relevant App Content" } ,{ title: "Log-in via Social Media " } ]
    },
    {
      title: "Premium",
      description: "It is a long established fact that a reader will be distracted",
      price: "$12",
      plan_desc: "/mo",
      active: true,
      services: [ { title: "Feedback System" }, { title: "Social Integration" } ,{ title: "Push Notifications " },{ title: "Relevant App Content" } ,{ title: "Log-in via Social Media " } ]
    },
    {
      title: "Business",
      description: "It is a long established fact that a reader will be distracted",
      price: "$38",
      plan_desc: "/mo",
      services: [ { title: "Feedback System" }, { title: "Social Integration" } ,{ title: "Push Notifications " },{ title: "Relevant App Content" } ,{ title: "Log-in via Social Media " } ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
