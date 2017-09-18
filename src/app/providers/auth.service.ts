import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class AuthService {
  constructor(private db: AngularFireDatabase, public af: AngularFireAuth) { }

  getRatings(theStarId) {
    return this.db.list('/ratings/' + theStarId);
  }

}
