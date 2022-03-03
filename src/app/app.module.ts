import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QloudModule } from './qloud/qloud.module';
import { LandingPage1Module } from './landing-page1/landing-page1.module';
import { LandingPage2Module } from './landing-page2/landing-page2.module';
import { LandingPage3Module } from './landing-page3/landing-page3.module';
import { AboutUsOneModule } from './about/about-us-one/about-us-one.module';
import { AboutUsTwoModule } from './about/about-us-two/about-us-two.module';
import { ServicesModule } from './pages/services/services.module';
import { OurTeamModule } from './pages/our-team/our-team.module';
import { PricingPlanModule } from './pages/pricing-plan/pricing-plan.module';
import { ClientsModule } from './pages/clients/clients.module';
import { FaqModule } from './pages/faq/faq.module';
import { Error404Module } from './pages/error404/error404.module';
import { Portfolio2columnsModule } from './portfolio/portfolio2columns/portfolio2columns.module';
import { Portfolio3columnsModule } from './portfolio/portfolio3columns/portfolio3columns.module';
import { Portfolio4columnsModule } from './portfolio/portfolio4columns/portfolio4columns.module';
import { PortfolioDetailsModule } from './portfolio/portfolio-details/portfolio-details.module';
import { BlogModule } from './blog/blog/blog.module';
import { BlogDetailModule } from './blog/blog-detail/blog-detail.module';
import { BlogTwoColumnModule } from './blog/blog-two-column/blog-two-column.module';
import { BlogThreeColumnModule } from './blog/blog-three-column/blog-three-column.module';
import { BlogRightColumnModule } from './blog/blog-right-column/blog-right-column.module';
import { ContactUs1Module } from './contact-us/contact-us1/contact-us1.module';
import { ContactUs2Module } from './contact-us/contact-us2/contact-us2.module';
import { CloudHostingModule } from './cloud-hosting/cloud-hosting.module';
import { CloudAnalyticsModule } from './cloud-analytics/cloud-analytics.module';
import { CloudDatabasesModule } from './cloud-databases/cloud-databases.module';
import { CloudMediaServicesModule } from './cloud-media-services/cloud-media-services.module';
import { CloudComputeModule } from './cloud-compute/cloud-compute.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QloudModule,
    LandingPage1Module,
    LandingPage2Module,
    LandingPage3Module,
    AboutUsOneModule,
    AboutUsTwoModule,
    ServicesModule,
    OurTeamModule,
    PricingPlanModule,
    ClientsModule,
    FaqModule,
    Error404Module,
    Portfolio2columnsModule,
    Portfolio3columnsModule,
    Portfolio4columnsModule,
    PortfolioDetailsModule,
    BlogModule,
    BlogDetailModule,
    BlogTwoColumnModule,
    BlogThreeColumnModule,
    BlogRightColumnModule,
    ContactUs1Module,
    ContactUs2Module,
    CloudHostingModule,
    CloudAnalyticsModule,
    CloudDatabasesModule,
    CloudMediaServicesModule,
    CloudComputeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
