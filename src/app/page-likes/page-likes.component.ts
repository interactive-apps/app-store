import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppsService} from '../apps.service';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-page-likes',
  templateUrl: './page-likes.component.html',
  styleUrls: ['./page-likes.component.css']
})
export class PageLikesComponent implements OnInit {

  @Input() productId: any;
  private params: any;
  private app: any;
  constructor(
    private fb: FacebookService,
    private route: ActivatedRoute,
    private appService: AppsService
  ) {
    const initParams: InitParams = {
      appId: '453832331637287',
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);
    console.log(initParams);
  }

  ngOnInit() {}
}
