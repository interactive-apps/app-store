import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AppsService} from "./apps.service";
import { FilterPipe } from './filter.pipe';
import { CardComponent } from './card/card.component';
import { AppsComponent } from './apps/apps.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationComponent,
    FilterPipe,
    CardComponent,
    AppsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
