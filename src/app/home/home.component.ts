import { Component, OnInit } from '@angular/core';
import {AppsService} from '../apps.service';
import {AuthService} from '../providers/auth.service';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public apps: Array<any>;
  public loading: boolean;
  public hasError: boolean;
  public appFilter: string;
  private theRatingResult: any;
  allApps: FirebaseObjectObservable<any[]>;

  constructor(private appsService: AppsService,  private db: AngularFireDatabase) {
    this.loading = true;
    this.hasError = false;
    this.appFilter = '';
  }

  ngOnInit() {
    this.appsService.all().subscribe(apps => {
        this.allApps = this.db.object('/apps/' + apps.id);
        const appsRes = this.allApps;
        let obj = {};
        appsRes.forEach(function (app) {
          const myObj = app;
          for (const count of app){
            obj[count] = app;
          }
          // console.log(obj);
          obj = app;
          // this.apps = obj;
        });
      this.apps = apps;
      this.loading = false;
      this.hasError = false;
    },
    error => {
      this.loading = false;
      this.hasError = true;
    });

  }

}
