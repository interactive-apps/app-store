import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FacebookModule } from 'ngx-facebook';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AppsService} from './apps.service';
import { FilterPipe } from './filter.pipe';
import { CardComponent } from './card/card.component';
import { AppsComponent } from './apps/apps.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppsNavComponent } from './apps/apps-nav/apps-nav.component';
import {environment} from '../environments/environment';
import { CardSliderComponent } from './card/card-slider/card-slider.component';
import { PageLikesComponent } from './page-likes/page-likes.component';
import {AuthService} from './providers/auth.service';
import {StarRatingModule} from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationComponent,
    FilterPipe,
    CardComponent,
    AppsComponent,
    StarRatingComponent,
    HomeComponent,
    NavbarComponent,
    AppsNavComponent,
    CardSliderComponent,
    PageLikesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth feature
    FormsModule,
    HttpModule,
    routing,
    FacebookModule.forRoot(),
    StarRatingModule.forRoot()
  ],
  providers: [AuthService, AppsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
