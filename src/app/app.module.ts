import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionsModule } from './sections/sections.module';
import { HttpModule } from '@angular/http';
import { FeedService } from './shared/services/feed-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileResumeComponent } from './profile/resume/resume.component';
import { ProfileMeComponent } from './profile/me/me.component';
import { ProfileTestimonialsComponent } from './profile/testimonials/testimonials.component';
import { ProfileProjectsComponent } from './profile/projects/projects.component';
import { ProfileBlogComponent } from './profile/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    ProfileResumeComponent,
    ProfileMeComponent,
    ProfileTestimonialsComponent,
    ProfileProjectsComponent,
    ProfileBlogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    SectionsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
