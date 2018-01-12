import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AllAppsService} from '../../../providers/all-apps.service';

declare var $: any;
@Component({
  selector: 'app-app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent implements OnInit {
  @Input() appId: any;
  id: any;
  private sub: any;
  public app: any;

  constructor(private route: ActivatedRoute, private allAppsService: AllAppsService) { }

  ngOnInit() {
    console.log(this.appId);
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        $('#myModal').modal('show');
        this.allAppsService.find(this.id).subscribe(app => {
          this.app = app;
        });
      }
    });
  }

}
