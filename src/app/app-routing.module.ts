import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'landing-page1', loadChildren: './landing-page1/landing-page1.module#LandingPage1Module' },
  { path: 'landing-page2', loadChildren: './landing-page2/landing-page2.module#LandingPage2Module' },
  { path: 'landing-page3', loadChildren: './landing-page3/landing-page3.module#LandingPage3Module' },
  { path: 'about-us-1',loadChildren: './about/about-us-one/about-us-one.module#AboutUsOneModule' },
  { path: 'about-us-2', loadChildren: './about/about-us-two/about-us-two.module#AboutUsTwoModule'},
  { path: 'services',loadChildren: './pages/services/services.module#ServicesModule' },
  { path: 'our-team',loadChildren: './pages/our-team/our-team.module#OurTeamModule' },
  { path: 'pricing-plan',loadChildren: './pages/pricing-plan/pricing-plan.module#PricingPlanModule' },
  { path: 'clients',loadChildren: './pages/clients/clients.module#ClientsModule' },
  { path: 'faq',loadChildren: './pages/faq/faq.module#FaqModule' },
  { path: 'error-404',loadChildren: './pages/error404/error404.module#Error404Module' },
  { path: 'portfolio-2-columns', loadChildren: './portfolio/portfolio2columns/portfolio2columns.module#Portfolio2columnsModule'},
  { path: 'portfolio-3-columns', loadChildren: './portfolio/portfolio3columns/portfolio3columns.module#Portfolio3columnsModule'},
  { path: 'portfolio-4-columns', loadChildren: './portfolio/portfolio4columns/portfolio4columns.module#Portfolio4columnsModule'},
  { path: 'portfolio-details', loadChildren: './portfolio/portfolio-details/portfolio-details.module#PortfolioDetailsModule'},
  { path: 'blog',loadChildren: './blog/blog/blog.module#BlogModule' },
  { path: 'blog-detail',loadChildren: './blog/blog-detail/blog-detail.module#BlogDetailModule' },
  { path: 'blog-two-column',loadChildren: './blog/blog-two-column/blog-two-column.module#BlogTwoColumnModule' },
  { path: 'blog-three-column',loadChildren: './blog/blog-three-column/blog-three-column.module#BlogThreeColumnModule' },
  { path: 'blog-right-column',loadChildren: './blog/blog-right-column/blog-right-column.module#BlogRightColumnModule' },
  { path: 'contact-us-1', loadChildren: './contact-us/contact-us1/contact-us1.module#ContactUs1Module' },
  { path: 'contact-us-2', loadChildren: './contact-us/contact-us2/contact-us2.module#ContactUs2Module'},
  { path: 'cloud-hosting', loadChildren: './cloud-hosting/cloud-hosting.module#CloudHostingModule' },
  { path: 'cloud-analytics', loadChildren: './cloud-analytics/cloud-analytics.module#CloudAnalyticsModule'},
  { path: 'cloud-databases', loadChildren: './cloud-databases/cloud-databases.module#CloudDatabasesModule'},
  { path: 'cloud-media-services', loadChildren: './cloud-media-services/cloud-media-services.module#CloudMediaServicesModule'},
  { path: 'cloud-compute', loadChildren: './cloud-compute/cloud-compute.module#CloudComputeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
