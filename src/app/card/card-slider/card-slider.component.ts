import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppsService} from '../../apps.service';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  appId: string;
  product: any;
  constructor(
    private route: ActivatedRoute,
    private appService: AppsService
  ) { }

  ngOnInit() {}
}
