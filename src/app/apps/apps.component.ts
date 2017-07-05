import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppsService} from '../apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  appId: string;
  app: any;
  constructor(
    private route: ActivatedRoute,
    private appService: AppsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.appId = params.id;
      this.appService.find(params.id).subscribe(app => {
        this.app = app;
      }, error => {
        console.log(error);
      });
    });
  }

}
