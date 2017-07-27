import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

@Injectable()
export class AppsService {

  apps: any[] = [];
  private zone: any;
  constructor(private http: Http) { }
  all(): Observable<any> {
    return Observable.create(observer => {
      if(this.apps.length > 0) {
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
        const app = _.find(apps, ['id', id]);
        if (app) {
          observer.next(app);
          observer.complete();
        } else {
          observer.error('App not found');
        }

      }, error => observer.error(error));
    });
  }

  reloadPage() {
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }
}
