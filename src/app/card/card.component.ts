import {Component, Input, NgZone, OnInit} from '@angular/core';
import {AppsService} from '../apps.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from 'app/providers/auth.service';
import * as firebase from 'firebase/app';

declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: any;

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
  private theId: any;
  ratings: FirebaseListObservable<any[]>;
  public loading: boolean;
  public hasError: boolean;
  public appFilter: string;
  public cardRateRes: any;

  constructor(private appsService: AppsService,
              private zone: NgZone,
              private db: AngularFireDatabase, public af: AngularFireAuth,
              private authService: AuthService, public afAuth: AngularFireAuth) {
    this.loading = true;
    this.hasError = false;
    this.appFilter = '';
  }

  ngOnInit() {
    this.ratings = this.db.list('/ratings/' + this.product.id);
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

    $('.landing-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: true,
      dotsContainer: '#carousel-custom-dots',
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          loop: false,
          autoplay: false,
          autoplaySpeed: 2000
        },
        600: {
          items: 1,
          loop: false,
          autoplay: false,
          autoplaySpeed: 2000
        },
        1000: {
          items: 1,
          loop: false,
          autoplay: false,
          autoplaySpeed: 2000
        }
      }
    });
    $('.owl-dot').click(function () {
      $('.landing-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
    });
  }

  displayFunc(id) {
    $('#descriptionId' + id).css('display', 'block');
    $('#defaultId' + id).css('display', 'none');
    this.theId = id;
  }

  hideDescFunc(id) {
    $('#descriptionId' + id).css('display', 'none');
    $('#defaultId' + id).css('display', 'block');
    this.theId = id;
  }

  login(val, id) {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authService.af.auth.onAuthStateChanged((user) => {
      if (user != null) {
        // User is logged in, use the user object for its info.
        this.ratings = this.db.list('/ratings/' + id);
        this.ratings.push({ email: user.email, rateValue: val });
        console.log('val: ' + val + ' ID: ' + id);
      } else {
        // User is not logged in, redirect to where you need to.
      }
    });
  }
}
