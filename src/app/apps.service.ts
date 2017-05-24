import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppsService {

  constructor(private http: Http) { }
  all(): Observable<any> {
    return this.http.get('assets/apps/apps.json').map(res => res.json())
      .catch(error => Observable.throw(new Error(error)));
  }

}
