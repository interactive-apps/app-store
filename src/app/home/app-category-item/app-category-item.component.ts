import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-category-item',
  templateUrl: './app-category-item.component.html',
  styleUrls: ['./app-category-item.component.css']
})
export class AppCategoryItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewAppDetail(e, id) {
    e.stopPropagation();
    this.router.navigate(['app-details/id']);
  }

}
