import {Component, Input, OnInit} from '@angular/core';
import {AllAppsService} from '../../../providers/all-apps.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() app: any;

  constructor() { }

  ngOnInit() {}

}
