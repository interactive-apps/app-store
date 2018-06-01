import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-preferences',
  templateUrl: './top-preferences.component.html',
  styleUrls: ['./top-preferences.component.css']
})
export class TopPreferencesComponent implements OnInit {

  @Input() product: any;
  constructor() { }

  ngOnInit() {
  }

}
