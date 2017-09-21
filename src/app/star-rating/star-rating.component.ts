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
  public cardRateRes: any;
  ratings: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth, public authService: AuthService) {
    this.user = afAuth.authState;

  }

  ngOnInit() {
    this.ratings = this.db.list('/ratings/' + this.Id);
    let total = 0;
    let sum5 = 0;
    let sum4 = 0;
    let sum3 = 0;
    let sum2 = 0;
    let sum1 = 0;
    let total1 = 0;
    let total2 = 0;
    let total3 = 0;
    let total4 = 0;
    let total5 = 0;
    this.ratings.subscribe(rateResult => {
      this.cardRateRes = rateResult;
      this.cardRateRes.forEach(function (rating) {
        if (rating.rateValue >= 4.5) {
          sum5 += rating.rateValue;
          total5++;
        } else if (rating.rateValue >= 3.5 && rating.rateValue < 4.5) {
          sum4 += rating.rateValue;
          total4++;
        } else if (rating.rateValue >= 2.5 && rating.rateValue < 3.5) {
          sum3 += rating.rateValue;
          total3++;
        } else if (rating.rateValue <= 1.5 && rating.rateValue < 2.5) {
          sum2 += rating.rateValue;
          total2++;
        } else if (rating.rateValue < 1.5) {
          sum1 += rating.rateValue;
          total1++;
        }
        total += rating.rateValue;
      });
      if (rateResult.length > 0) {
        this.rateAverage = (total / rateResult.length).toFixed(1);
      } else {
        this.rateAverage = 0;
      }
      if (total1 > 0) {
        this.rateAverage1 = (sum1 / total1).toFixed(1);
      } else {
        this.rateAverage1 = 0;
      }
      if (total2 > 0) {
        this.rateAverage2 = (sum2 / total2).toFixed(1);
      } else {
        this.rateAverage2 = 0;
      }
      if (total3 > 0) {
        this.rateAverage3 = (sum3 / total3).toFixed(1);
      } else {
        this.rateAverage3 = 0;
      }
      if (total4 > 0) {
        this.rateAverage4 = (sum4 / total4).toFixed(1);
      } else {
        this.rateAverage4 = 0;
      }
      if (total5 > 0) {
        this.rateAverage5 = (sum5 / total5).toFixed(1);
      } else {
        this.rateAverage5 = 0;
      }
      this.totalRatings = rateResult.length;
      this.totalRatings1 = total1;
      this.totalRatings2 = total2;
      this.totalRatings3 = total3;
      this.totalRatings4 = total4;
      this.totalRatings5 = total5;
    });
  }

  login(val, id) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authService.af.auth.onAuthStateChanged((user) => {
      if (user != null) {
        // User is logged in, use the user object for its info.
        // this.ratings = this.db.list('/ratings/' + id);
        // this.ratings.push({ email: user.email, rateValue: val });
        console.log('val: ' + val + ' ID: ' + id);
      } else {
        // User is not logged in, redirect to where you need to.
      }
    });
  }
}

