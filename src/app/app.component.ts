import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsEventsService} from './providers/google-analytics-events.service';
declare const ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      };
      function handleOutboundLinkClicks(event) {
        console.log(event);
        ga('send', 'event', {
          eventCategory: 'Outbound Link',
          eventAction: 'click',
          eventLabel: event.target.href,
          transport: 'beacon'
        });
      }
    });
  }
  ngOnInit() {
  }
}
