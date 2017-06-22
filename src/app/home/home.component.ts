import { Component, OnInit } from '@angular/core';
import {AppsService} from "../apps.service";

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

  constructor(private appsService: AppsService) {
    this.loading = true;
    this.hasError = false;
    this.appFilter= '';
  }

  ngOnInit() {
    this.appsService.all().subscribe(apps =>{
      this.apps = apps;
      this.loading = false;
      this.hasError = false;
    },
    error =>{
      this.loading= false;
      this.hasError = true;
    });
  }

}
