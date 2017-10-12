import { Component, OnInit } from '@angular/core';
import {AppsService} from '../apps.service';
import {AuthService} from '../providers/auth.service';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public apps: Array<any>;
  public loading: boolean;
  public hasError: boolean;
  public appFilter: string;
  public listOfSelected= ['all categories'];
  private theRatingResult: any;
  allApps: FirebaseObjectObservable<any[]>;

  constructor(private appsService: AppsService,  private db: AngularFireDatabase) {
    this.loading = true;
    this.hasError = false;
    this.appFilter = '';
  }

  ngOnInit() {
    $('#close').css('display', 'none');
    $('#open').css('display', 'block');

    $('#check-all').css('display', 'block');
    $('#uncheck-all').css('display', 'none');
    this.appsService.all().subscribe(apps => {
        this.allApps = this.db.object('/apps/' + apps.id);
        const appsRes = this.allApps;
        let obj = {};
        appsRes.forEach(function (app) {
          const myObj = app;
          for (const count of app){
            obj[count] = app;
          }
          // console.log(obj);
          obj = app;
          // this.apps = obj;
        });
      this.apps = apps;
      this.loading = false;
      this.hasError = false;
    },
    error => {
      this.loading = false;
      this.hasError = true;
    });

  }

  openNavigation() {
    console.log('open sidebar');
    $('#thisSideNav').css('width', '200px');
    $('#content').css('marginLeft', '200px');
    $('#close').css('display', 'block');
    $('#open').css('display', 'none');
  }

  closeNavigation() {
    console.log('close sidebar');
    $('#thisSideNav').css('width', '0');
    $('#content').css('marginLeft', '0');
    $('#open').css('display', 'block');
    $('#close').css('display', 'none');
  }

  checkAll () {
    $(':checkbox').prop('checked', true);
    $('#check-all').css('display', 'none');
    $('#uncheck-all').css('display', 'block');
    const selectedOnes = [];
    $(':checked').each(function () {
      selectedOnes.push(this.value);
    });
    this.listOfSelected = selectedOnes;
}

  UnCheckAll () {
    $(':checkbox').prop('checked', false);
    $('#check-all').css('display', 'block');
    $('#uncheck-all').css('display', 'none');
    this.listOfSelected = ['all categories'];
  }

  getValue() {
    const selectedOnes = [];
    if ($(':checked').length > 0 ) {
      $(':checked').each(function () {
        selectedOnes.push(this.value);
      });
    } else {
      selectedOnes.push('all categories');
    }
    this.listOfSelected = selectedOnes;
  }
}
