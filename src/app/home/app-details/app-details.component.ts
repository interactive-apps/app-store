import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  close(e) {
    e.stopPropagation();
    this.router.navigate(['/']);
  }

}
