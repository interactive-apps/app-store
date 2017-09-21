import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-firebase-likes',
  templateUrl: './firebase-likes.component.html',
  styleUrls: ['./firebase-likes.component.css']
})
export class FirebaseLikesComponent implements OnInit {
  @Input() Id: any;
  likes: FirebaseListObservable<any[]>;
  public totalLikes: any;
  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth, public authService: AuthService) { }

  ngOnInit() {
    this.likes = this.db.list('/likes/' + this.Id);
    this.likes.subscribe(likeRes => {
      this.totalLikes = likeRes.length;
      likeRes.forEach(function (res) {
        console.log(res);
      });
    });
  }

  likeThisApp() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authService.af.auth.onAuthStateChanged((user) => {
      if (user != null) {
        // User is logged in, use the user object for its info.
        this.likes.push({ email: user.email, likeDate: '19-09-2017', displayName: user.displayName});
      } else {
        // User is not logged in, redirect to where you need to.
      }
    });
  }

}
