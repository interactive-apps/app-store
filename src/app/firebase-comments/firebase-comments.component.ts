import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import { FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import {AuthService} from '../providers/auth.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-firebase-comments',
  templateUrl: './firebase-comments.component.html',
  styleUrls: ['./firebase-comments.component.css']
})
export class FirebaseCommentsComponent implements OnInit {
  @Input() Id: any;
  comments: FirebaseListObservable<any[]>;
  public comment: any;
  public name: any;
  private userDisplayName: string;
  public userEmail: string;
  private isLoggedIn: boolean;
  public commentForm = this.formB.group({
    comnt: ['', Validators.required]
  });
  constructor(public formB: FormBuilder,
              public authService: AuthService, private db: AngularFireDatabase, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    console.log('DATE: ' + Date.now());
    this.comments = this.db.list('/comments/' + this.Id);
    this.comments.subscribe(commentRes => {

      this.comment = commentRes;
    });
  }

  submitComment(event) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authService.af.auth.onAuthStateChanged((user) => {
      if (user != null) {
        // User is logged in, use the user object for its info.
        this.isLoggedIn = true;
        this.userDisplayName = user.displayName;
        this.userEmail = user.email;
        this.comments.push({ commentDate: Date.now(), email: user.email, theComment: this.commentForm.value.comnt, displayName: user.displayName });
      } else {
        // User is not logged in, redirect to where you need to.
      }
    });
  }
}
