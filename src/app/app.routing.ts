import {RouterModule, Routes} from "@angular/router";
import {AppsComponent} from "./apps/apps.component";
import {HomeComponent} from "./home/home.component";
import {CardComponent} from "./card/card.component";
import {NavigationComponent} from "./navigation/navigation.component";
const app_routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '*', redirectTo: '', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'apps/:id', component:AppsComponent},
  {path: 'card', component: CardComponent},
  {path: 'nav', component: NavigationComponent}
];

export  const routing = RouterModule.forRoot(app_routes);
