import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AllAppsService} from '../../providers/all-apps.service';

declare var $: any;
@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {

  id: any;
  private sub: any;
  public apps: Array<any>;
  public loading: boolean;
  public appFilter: string;
  public appTypes= ['all categories'];

  constructor(private route: ActivatedRoute, public allAppsService: AllAppsService) {
    this.appFilter = '';
  }

  ngOnInit() {
    this.allAppsService.all().subscribe(apps => {
      this.apps = apps;
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
