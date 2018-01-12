import { Component, OnInit } from '@angular/core';
import {AllAppsService} from '../../providers/all-apps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public apps: Array<any>;
  public appFilter: string;
  public loading: boolean;
  public hasError: boolean;
  public appTypes= ['all categories'];
  constructor(public allAppsService: AllAppsService) {
    this.appFilter = '';
  }

  ngOnInit() {
    this.allAppsService.all().subscribe(apps => {
      this.apps = apps;
      this.loading = false;
      this.hasError = false;
    },
      error => {
        this.loading = false;
        this.hasError = true;
      });
  }

}
