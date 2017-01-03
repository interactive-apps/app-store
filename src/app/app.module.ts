import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppCardComponent } from './app-card/app-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import {AppsService} from "./apps.service";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app.routing.module";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppCardComponent,
    NavigationComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
