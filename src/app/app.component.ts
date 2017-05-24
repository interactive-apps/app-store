import {Component, OnInit} from '@angular/core';
import {AppsService} from './apps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public apps: Array<any>;
  public loading: boolean;
  public hasError: boolean;
  public appFilter: string;
  constructor(private appsService: AppsService) {
    this.loading = true;
    this.hasError = false;
    this.appFilter = '';
  }
  ngOnInit() {
    this.appsService.all().subscribe(apps =>  {
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
