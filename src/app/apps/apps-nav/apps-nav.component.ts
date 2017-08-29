import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppsService} from '../../apps.service';

@Component({
  selector: 'app-apps-nav',
  templateUrl: './apps-nav.component.html',
  styleUrls: ['./apps-nav.component.css']
})
export class AppsNavComponent implements OnInit {

  appId: string;
  app: any;
  constructor(
    private route: ActivatedRoute,
    private appService: AppsService,
    private zone: NgZone
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

  reloadPage() {
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }
}
