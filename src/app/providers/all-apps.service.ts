import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

@Injectable()
export class AllAppsService {

  apps: any[] = [];
  app: any[] = [];
  private zone: any;

  constructor(private http: Http) {
  }

  all(): Observable<any> {
    return Observable.create(observer => {
      if (this.apps.length > 0) {
        observer.next(this.apps);
        observer.complete();
      } else {
        this.http.get('assets/apps/apps.json').map(res => res.json())
          .catch(error => Observable.throw(new Error(error)))
          .subscribe(apps => {
            this.apps = apps;
            observer.next(this.apps);
            observer.complete();
          }, error => observer.error(error));
      }
    });
  }

  find(id) {
    return Observable.create(observer => {
      this.all().subscribe(apps => {
        apps.forEach((selectedApp) => {
          if (selectedApp.id === id) {
            this.app = selectedApp;
            observer.next(this.app);
            observer.complete();
          }
        })
      }, error => observer.error(error));
    });
  }
}
