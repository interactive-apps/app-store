import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AppsService} from './apps.service';
import { FilterPipe } from './filter.pipe';
import { CardComponent } from './card/card.component';
import { AppsComponent } from './apps/apps.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppsNavComponent } from './apps/apps-nav/apps-nav.component';
import { CardSliderComponent } from './card/card-slider/card-slider.component';
import { PageLikesComponent } from './page-likes/page-likes.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationComponent,
    FilterPipe,
    CardComponent,
    AppsComponent,
    HomeComponent,
    NavbarComponent,
    AppsNavComponent,
    CardSliderComponent,
    PageLikesComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FacebookModule.forRoot()
  ],
  providers: [AppsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
