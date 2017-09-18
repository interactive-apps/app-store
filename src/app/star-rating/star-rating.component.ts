import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AuthService} from '../providers/auth.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() theStarId: any;
  @Input() Id: any;
  @Input() rateAverageVal: any;
  user: Observable<firebase.User>;
  public rateAverage: any;
  public rateAverage1: any;
  public rateAverage2: any;
  public rateAverage3: any;
  public rateAverage4: any;
  public rateAverage5: any;
  public totalRatings: any;
  public totalRatings1: any;
  public totalRatings2: any;
  public totalRatings3: any;
  public totalRatings4: any;
  public totalRatings5: any;
  ratings: FirebaseListObservable<any[]>;
  private userDisplayName: string;
  public userEmail: string;
  private isLoggedIn: boolean;
  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth, public authService: AuthService) {
    this.user = afAuth.authState;

  }
  ngOnInit() {
    console.log(this.Id);
    console.log('The ratings are ' + this.rateAverageVal);
    this.rateAverage = this.rateAverageVal;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

