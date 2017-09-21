import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-firebase-comments',
  templateUrl: './firebase-comments.component.html',
  styleUrls: ['./firebase-comments.component.css']
})
export class FirebaseCommentsComponent implements OnInit {
  @Input() Id: any;
  @Input() comVal: any;
  comments: FirebaseListObservable<any[]>;
  public date: any;
  public comment: any;
  public name: any;
  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.comments = this.db.list('/comments/' + this.Id);
    let commentResults = []; let dateRes = ''; let thisComment = ''; let theDisplayName = '';
    this.comments.subscribe(commentRes => {
      commentRes.forEach(function (comment) {
        dateRes = dateRes + comment.commentDate;
        thisComment = thisComment + comment.theComment;
        theDisplayName = theDisplayName + comment.displayName;
      });
      this.date = dateRes;
      this.comment = thisComment;
      this.name = theDisplayName;
    });
  }

  onSubmit(val) {
  }
}
