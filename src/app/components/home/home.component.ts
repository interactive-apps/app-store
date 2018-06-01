import { Component, OnInit } from '@angular/core';
import {AppsService} from '../../providers/apps.service';

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
  public listOfSelected = [];
  public appCategories = '';
  public topPreferenceTitle = 'Featured Apps';
  public listOfAppTypes = {
  'web': 'Web Apps',
  'os': 'Operating System',
  'mobile': 'Mobile Apps',
  'widget': 'Widgets'
};
  public title1 = 'Welcome to ';
  public title2 = 'enjoy the coolest apps';
  public appTypes = ['all categories'];
  public listOfSelectedFeaturedApps = ['interactive-dashboard', 'interactive-scorecard', 'hisptz-touch'];

  constructor(private appsService: AppsService) {
    this.loading = true;
    this.hasError = false;
    this.appFilter = '';
  }

  ngOnInit() {
    $('#all').css('color', '#afaeae');
    $('#all').css('backgroundColor', '#ededed');
    $('#all-cats').css('color', '#367DF3');
    $('#all-cats2').css('color', '#367DF3');
    $('.top-preferences').css('color', '#2d2d2d');
    $('#featured').css('color', '#367DF3');
    $('#featured2').css('color', '#367DF3');

    this.appsService.all().subscribe(apps => {
        let appCategoriesStr = '';
        apps.forEach((app) => {
          if (appCategoriesStr.indexOf(app.category) < 0) {
            appCategoriesStr += app.category + ',';
            this.listOfSelected.push(app.category);
          }
        });
        this.appCategories = appCategoriesStr.substring(0, appCategoriesStr.length - 1);
        this.apps = apps;
        this.loading = false;
        this.hasError = false;
      },
      error => {
        this.loading = false;
        this.hasError = true;
      });
  }

  getCategory(val) {
    $(':checkbox').prop('checked', false);
    const selectedOnes = []; const appTypesSelected = [];
    if (val === 'all') {
      appTypesSelected.push('web', 'mobile', 'os', 'widget', 'plugin', 'window');
    } else {
      appTypesSelected.push(val);
    }
    if (val === 'web') {
      selectedOnes.push(' Web Apps');
      $('.btn').css('backgroundColor', '#ededed');
      $('.btn').css('color', '#AFAEAE');
      $('.cat-list').css('color', '#2d2d2d');
      $('#cat-' + val).css('color', '#367DF3');
      $('#cat2-' + val).css('color', '#367DF3');
      $('#' + val).css('backgroundColor', '#afaeae');
      $('#' + val).css('color', '#FFFFFF');
    } else if (val === 'mobile') {
      selectedOnes.push(' Mobile Apps');
      $('.btn').css('backgroundColor', '#ededed');
      $('.btn').css('color', '#afaeae');
      $('.cat-list').css('color', '#2d2d2d');
      $('#cat-' + val).css('color', '#367DF3');
      $('#cat2-' + val).css('color', '#367DF3');
      $('#' + val).css('backgroundColor', '#afaeae');
      $('#' + val).css('color', '#FFFFFF');
    } else if (val === 'window') {
      selectedOnes.push(' Windows Apps');
      $('.btn').css('backgroundColor', '#ededed');
      $('.btn').css('color', '#afaeae');
      $('.cat-list').css('color', '#2d2d2d');
      $('#cat-' + val).css('color', '#367DF3');
      $('#cat2-' + val).css('color', '#367DF3');
      $('#' + val).css('backgroundColor', '#afaeae');
      $('#' + val).css('color', '#FFFFFF');
    } else if (val === 'os') {
      selectedOnes.push(' Os');
      $('.btn').css('backgroundColor', '#ededed');
      $('.btn').css('color', '#afaeae');
      $('.cat-list').css('color', '#2d2d2d');
      $('#cat-' + val).css('color', '#367DF3');
      $('#cat2-' + val).css('color', '#367DF3');
      $('#' + val).css('backgroundColor', '#afaeae');
      $('#' + val).css('color', '#FFFFFF');
    } else if (val === 'plugin') {
      selectedOnes.push(' Plugins');
      $('.btn').css('backgroundColor', '#ededed');
      $('.btn').css('color', '#afaeae');
      $('.cat-list').css('color', '#2d2d2d');
      $('#cat-' + val).css('color', '#367DF3');
      $('#' + val).css('backgroundColor', '#afaeae');
      $('#' + val).css('color', '#FFFFFF');
    } else if (val === 'widget') {
      selectedOnes.push(' Widgets');
      $('.btn').css('backgroundColor', '#ededed');
      $('.btn').css('color', '#afaeae');
      $('.cat-list').css('color', '#2d2d2d');
      $('#cat-' + val).css('color', '#367DF3');
      $('#cat2-' + val).css('color', '#367DF3');
      $('#' + val).css('backgroundColor', '#afaeae');
      $('#' + val).css('color', '#FFFFFF');
    } else if (val === 'all') {
      selectedOnes.push('All Categories');
      $('.btn').css('backgroundColor', '#ededed');
      $('.btn').css('color', '#afaeae');
      $('.cat-list').css('color', '#2d2d2d');
      $('#all-cats').css('color', '#367DF3');
      $('#all-cats').css('fontWeight', '700');
      $('#all-cats2').css('color', '#367DF3');
      $('#all-cats2').css('fontWeight', '700');
      $('#' + val).css('backgroundColor', '#afaeae');
      $('#' + val).css('color', '#FFFFFF');
    }
    this.listOfSelected = appTypesSelected;
    console.log('appTypesSelected', appTypesSelected)
    this.appTypes = selectedOnes;
    this.listOfSelectedFeaturedApps = [];
  }

  newAndNoteworthy() {
    $('.top-preferences').css('color', '#2d2d2d');
    $('#new').css('color', '#367DF3');
    $('#new2').css('color', '#367DF3');
    this.topPreferenceTitle = 'New & Noteworthy';
    this.listOfSelectedFeaturedApps = ['interactive-dashboard', 'function-maintenance' , 'indicator-search'];
  }

  featuredApps () {
    $('.top-preferences').css('color', '#2d2d2d');
    $('#featured').css('color', '#367DF3');
    $('#featured2').css('color', '#367DF3');
    this.topPreferenceTitle = 'Featured Apps';
    this.listOfSelectedFeaturedApps = ['interactive-dashboard', 'interactive-scorecard', 'hisptz-touch'];
  }

  strongInnovations() {
    $('.top-preferences').css('color', '#2d2d2d');
    $('#strong').css('color', '#367DF3');
    $('#strong2').css('color', '#367DF3');
    this.topPreferenceTitle = 'Strong Innovations';
    this.listOfSelectedFeaturedApps = ['hisptz_touch-dashboard', 'interactive-dashboard', 'interactive-scorecard'];
  }

}
