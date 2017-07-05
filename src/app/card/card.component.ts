import {Component, Input, OnInit} from '@angular/core';
import {AppsService} from '../apps.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: any;


  imgSrc: string;
  public apps: Array<any>;
  public loading: boolean;
  public hasError: boolean;
  public appFilter: string;

  constructor(private appsService: AppsService) {
    this.loading = true;
    this.hasError = false;
    this.appFilter = '';
  }

  ngOnInit() {}

}
