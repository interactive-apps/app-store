import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppComponent } from './components/my-app/my-app.component'
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: 'app/:id', component: MyAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
