import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyAppComponent } from './components/my-app/my-app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/home/card/card.component';
import {AllAppsService} from './providers/all-apps.service';
import {HttpModule} from '@angular/http';
import { AppModalComponent } from './components/my-app/app-modal/app-modal.component';
import { AppFilterPipe } from './app-filter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyAppComponent,
    CardComponent,
    AppModalComponent,
    AppFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AllAppsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
