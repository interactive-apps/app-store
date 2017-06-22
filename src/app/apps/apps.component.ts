import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppsService} from "../apps.service";

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  appId: string;
  name: string;
  version: string;
  compatibility: string;
  cover_url: string;
  description:string;
  download_url: string;
  features: any;
  revision: string;
  logo_url: string;
  short_description: string;
  github_url: string;
  app: any;
  constructor(
    private route: ActivatedRoute,
    private appService: AppsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.appId = params.id;
      this.appService.find(params.id).subscribe(app => {
        console.log(app)
        this.app = app;
      }, error => {
        console.log(error)
      })
    })
  }

}
