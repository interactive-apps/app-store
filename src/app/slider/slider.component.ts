import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppsService} from '../apps.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() product: any;
  constructor(
    private route: ActivatedRoute,
    private appService: AppsService
  ) { }

  ngOnInit() {
  }
}

