import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AppsService} from '../apps.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from 'app/providers/auth.service';
import * as firebase from 'firebase/app';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  app: any;
  private zone: NgZone;
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
  constructor(
    private route: ActivatedRoute,
    private appService: AppsService,
    public afAuth: AngularFireAuth, public authService: AuthService,
    private fb: FacebookService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const appId: string = params['id'];
      this.ratings = this.authService.getRatings(appId);
      const initParams: InitParams = {
        appId: appId,
        xfbml: true,
        version: 'v2.9'
      };

      this.fb.init(initParams);
      this.ratings.subscribe(ratingResult => {
        let total = 0; let sum5 = 0; let sum4 = 0; let sum3 = 0; let sum2 = 0; let sum1 = 0;
        let total1 = 0; let total2 = 0; let total3 = 0; let total4 = 0; let total5 = 0;
        ratingResult.forEach(function (rating) {
          if (rating.rateValue >= 4.5) {
            sum5 += rating.rateValue;
            total5++;
          } else if (rating.rateValue >= 3.5 && rating.rateValue < 4.5) {
            sum4 += rating.rateValue;
            total4++;
          }else if (rating.rateValue >= 2.5 && rating.rateValue < 3.5) {
            sum3 += rating.rateValue;
            total3++;
          }else if (rating.rateValue <= 1.5 && rating.rateValue < 2.5) {
            sum2 += rating.rateValue;
            total2++;
          }else if (rating.rateValue < 1.5) {
            sum1 += rating.rateValue;
            total1++;
          }
          total += rating.rateValue;
        });
        if (ratingResult.length > 0) {
          this.rateAverage = (total / ratingResult.length).toFixed(1);
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
        this.totalRatings = ratingResult.length;
        this.totalRatings1 = total1;
        this.totalRatings2 = total2;
        this.totalRatings3 = total3;
        this.totalRatings4 = total4;
        this.totalRatings5 = total5;
      });
      this.appService.find(appId).subscribe(app => {
        this.app = app;
      }, error => {
        console.log(error);
      });
    });
  }

  login(val) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authService.af.auth.onAuthStateChanged((user) => {
      if (user != null) {
        // User is logged in, use the user object for its info.
        this.isLoggedIn = true;
        this.userDisplayName = user.displayName;
        this.userEmail = user.email;
        this.ratings.push({ email: user.email, rateValue: val });
      } else {
        // User is not logged in, redirect to where you need to.
      }
    });
  }
  // Reloading the page
  reloadPage() {
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }
}
