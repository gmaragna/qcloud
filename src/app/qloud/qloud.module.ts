import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogOwlComponent } from './components/blog-owl/blog-owl.component';
import { ClientComponent } from './components/client/client.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { TeamOwlComponent } from './components/team-owl/team-owl.component';
import { PortfolioBoxComponent } from './components/portfolio-box/portfolio-box.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogSearchComponent } from './components/blog-search/blog-search.component';
import { BlogRecentPostComponent } from './components/blog-recent-post/blog-recent-post.component';
import { BlogRecentCommentComponent } from './components/blog-recent-comment/blog-recent-comment.component';
import { BlogArchiveComponent } from './components/blog-archive/blog-archive.component';
import { BlogCategoryComponent } from './components/blog-category/blog-category.component';
import { BlogMetaComponent } from './components/blog-meta/blog-meta.component';
@NgModule({
  declarations: [LoaderComponent,FooterComponent, HeaderComponent, ScrollTopComponent ,TitleSectionComponent, TestimonialsComponent, BlogOwlComponent, ClientComponent, TopBannerComponent, TeamOwlComponent, PortfolioBoxComponent, BlogCardComponent, BlogSearchComponent, BlogRecentPostComponent, BlogRecentCommentComponent, BlogArchiveComponent, BlogCategoryComponent, BlogMetaComponent],
  exports: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    ScrollTopComponent,
    TitleSectionComponent,
    TestimonialsComponent,
    BlogOwlComponent,
    ClientComponent,
    TopBannerComponent,
    TeamOwlComponent,
    PortfolioBoxComponent,
    BlogCardComponent,
    BlogSearchComponent,
    BlogRecentPostComponent,
    BlogRecentCommentComponent,
    BlogArchiveComponent,
    BlogCategoryComponent,
    BlogMetaComponent

  ],
  imports: [
    CommonModule,
    RouterModule

  ],
})
export class QloudModule { }

