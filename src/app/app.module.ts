import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {AppsService} from './providers/apps.service';
import { FilterAppsPipe } from './filters/filter-apps.pipe';
import { CardComponent } from './components/home/card/card.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { SelectedAppComponent } from './components/selected-app/selected-app.component';
import { TopPreferencesComponent } from './components/home/top-preferences/top-preferences.component';
import { FeaturedAppsPipe } from './providers/featured-apps.pipe';
import {GoogleAnalyticsEventsService} from './providers/google-analytics-events.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterAppsPipe,
    CardComponent,
    SelectedAppComponent,
    TopPreferencesComponent,
    FeaturedAppsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AppsService, GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
