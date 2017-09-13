import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AppsService} from '../apps.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  app: any;
  private zone: NgZone;
  constructor(
    private route: ActivatedRoute,
    private appService: AppsService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const appId: string = params['id'];
      this.appService.find(appId).subscribe(app => {
        this.app = app;
      }, error => {
        console.log(error);
      });
    });
  }
  // Reloading the page
  reloadPage() {
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }
}
