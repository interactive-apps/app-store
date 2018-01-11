import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppDetailsComponent } from './home/app-details/app-details.component';
import {RoutingModule} from './app.routing';
import { AppCategoryItemComponent } from './home/app-category-item/app-category-item.component';
import { AppCardComponent } from './home/app-category-item/app-card/app-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppDetailsComponent,
    AppCategoryItemComponent,
    AppCardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
