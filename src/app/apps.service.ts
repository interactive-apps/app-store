import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class AppsService {

  constructor(private http: Http) { }

  all(): Observable<any> {
    return this.http.get('assets/apps/apps.json').map((res) => res.json());
  }
}
