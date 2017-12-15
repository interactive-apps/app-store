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
  public title1 = 'Welcome to ';
  public title2 = 'enjoy the coolest apps'
  public listOfSelected= ['all categories'];
  public appTypes= ['all categories'];
  private theRatingResult: any;
  allApps: FirebaseObjectObservable<any[]>;

  constructor(private appsService: AppsService,  private db: AngularFireDatabase) {
    this.loading = true;
    this.hasError = false;
    this.appFilter = '';
  }

  ngOnInit() {
    $('#thisSideNav').css('width', '200px');
    $('#content').css('marginLeft', '200px');
    $(':checkbox').prop('checked', true);
    $('#check-all').css('display', 'none');
    $('#uncheck-all').css('display', 'block');
    const selectedOnes = [];
    const appTypesSelected = [];
    $(':checked').each(function () {
      appTypesSelected.push(this.value);
      if (this.value === 'web') {
        selectedOnes.push(' Web Apps');
      } else if (this.value === 'ios') {
        selectedOnes.push(' Ios Apps');
      } else if (this.value === 'window') {
        selectedOnes.push(' Windows Apps');
      } else if (this.value === 'os') {
        selectedOnes.push(' Os Apps');
      } else if (this.value === 'android') {
        selectedOnes.push(' Android Apps');
      } else if (this.value === 'plugin') {
        selectedOnes.push(' Plugins');
      } else if (this.value === 'widget') {
        selectedOnes.push(' Widgets');
      }
    });
    this.listOfSelected = appTypesSelected;
    this.appTypes = selectedOnes; let formattedArray = [];
    if (selectedOnes.length > 1) {
      for (let count = 0; count < selectedOnes.length; count++) {
        if ( count === selectedOnes.length - 1 ) {
          formattedArray.push(' and ' + selectedOnes[count]);
        } else {
          formattedArray.push(selectedOnes[count]);
        }
      }
    } else {
      formattedArray = selectedOnes;
    }
    this.appTypes = formattedArray;
    if (performance.navigation.type === 1) {
      this.title1 = 'Welcome to ';
      this.title2 = 'Search, Get intro, try it, install and blow minds with awesomeness...';
    } else {
      this.title1 = 'Welcome to ';
      this.title2 = 'Search, Get intro, try it, install and blow minds with awesomeness...';
    }

    let checkCount = 0;
    $(':checked').each(function () {
      checkCount++;
    });
    if (checkCount < 4) {
      $('#check-all').css('display', 'block');
      $('#uncheck-all').css('display', 'none');
    }
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
    $('#thisSideNav').css('width', '200px');
    $('#content').css('marginLeft', '200px');
    $('#close').css('display', 'block');
    $('#open').css('display', 'none');
  }

  closeNavigation() {
    $('#thisSideNav').css('width', '0');
    $('#content').css('marginLeft', '0');
    $('#open').css('display', 'block');
    $('#close').css('display', 'none');
  }

  checkAll () {
    $(':checkbox').prop('checked', true);
    $('#check-all').css('display', 'none');
    // $('#uncheck-all').css('display', 'block');
    const selectedOnes = [];
    const appTypesSelected = [];
    $(':checked').each(function () {
      appTypesSelected.push(this.value);
      if (this.value === 'web') {
        selectedOnes.push(' Web Apps');
      } else if (this.value === 'ios') {
        selectedOnes.push(' Ios Apps');
      } else if (this.value === 'window') {
        selectedOnes.push(' Windows Apps');
      } else if (this.value === 'os') {
        selectedOnes.push(' Os Apps');
      } else if (this.value === 'android') {
        selectedOnes.push(' Android Apps');
      } else if (this.value === 'plugin') {
        selectedOnes.push(' Plugins');
      } else if (this.value === 'widget') {
        selectedOnes.push(' Widgets');
      }
    });
    this.listOfSelected = appTypesSelected;
    this.appTypes = selectedOnes; let formattedArray = [];
    if (selectedOnes.length > 1) {
      for (let count = 0; count < selectedOnes.length; count++) {
        if ( count === selectedOnes.length - 1 ) {
          formattedArray.push(' and ' + selectedOnes[count]);
        } else {
          formattedArray.push(selectedOnes[count]);
        }
      }
    } else {
      formattedArray = selectedOnes;
    }
    this.appTypes = formattedArray;
}

  UnCheckAll () {
    $(':checkbox').prop('checked', false);
    $('#check-all').css('display', 'block');
    $('#uncheck-all').css('display', 'none');
    this.listOfSelected = ['all categories'];
    this.appTypes = ['all categories'];
  }

  getValue() {
    const selectedOnes = []; const appTypesSelected = []; let checkCount = 0;
    if ($(':checked').length > 0 ) {
      checkCount = $(':checked').length;
      $(':checked').each(function () {
        appTypesSelected.push(this.value);
        if (this.value === 'web') {
          selectedOnes.push(' Web Apps');
        } else if (this.value === 'ios') {
          selectedOnes.push(' Ios Apps');
        } else if (this.value === 'window') {
          selectedOnes.push(' Windows Apps');
        } else if (this.value === 'os') {
          selectedOnes.push(' Os Apps');
        } else if (this.value === 'android') {
          selectedOnes.push(' Android Apps');
        } else if (this.value === 'plugin') {
          selectedOnes.push(' Plugins');
        } else if (this.value === 'widget') {
          selectedOnes.push(' Widgets');
        }
      });

      if (checkCount < 2) {
        $('#check-all').css('display', 'block');
        $('#uncheck-all').css('display', 'none');
      }
    } else {
      selectedOnes.push('all categories');
      appTypesSelected.push('all categories');
    }
    this.listOfSelected = appTypesSelected;
    this.appTypes = selectedOnes;
    let formattedArray = [];
    if (selectedOnes.length > 1) {
      for (let count = 0; count < selectedOnes.length; count++) {
        if ( count === selectedOnes.length - 1 ) {
          formattedArray.push(' and ' + selectedOnes[count]);
        } else {
          formattedArray.push(selectedOnes[count]);
        }
      }
    } else {
      formattedArray = selectedOnes;
    }
    this.appTypes = formattedArray;
  }

  getCategory(val) {
    $(':checkbox').prop('checked', false);
    const selectedOnes = []; const appTypesSelected = [];
    appTypesSelected.push(val);
    if (val === 'web') {
      selectedOnes.push(' Web Apps');
    } else if (val === 'ios') {
      selectedOnes.push(' Ios Apps');
    } else if (val === 'window') {
      selectedOnes.push(' Windows Apps');
    } else if (val === 'os') {
      selectedOnes.push(' Os Apps');
    } else if (val === 'android') {
      selectedOnes.push(' Android Apps');
    } else if (val === 'plugin') {
      selectedOnes.push(' Plugins');
    } else if (val === 'widget') {
      selectedOnes.push(' Widgets');
    }
    this.listOfSelected = appTypesSelected;
    this.appTypes = selectedOnes;
  }

  changeTitle2(id) {
    if (id === 1) {
      this.title2 = 'Search, Get intro, try it, install and blow minds with awesomeness...';
    } else if (id === 2) {
      this.title2 = 'the Innovations one-stop center';
    } else if (id === 3) {
      this.title2 = 'the Innovations one-stop center';
    }
  }
}
