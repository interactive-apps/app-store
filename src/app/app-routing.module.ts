import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SelectedAppComponent} from './components/selected-app/selected-app.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' },
  { path: 'apps/:id', component: SelectedAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
