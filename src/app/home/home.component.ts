import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeSlide: number;
  constructor() {
    this.activeSlide = 0;
  }

  ngOnInit() {
    Observable.timer(2000, 2000).subscribe(() => {
      if (this.activeSlide < 8) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    });
  }

}
