import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.component.html',
  styleUrls: ['./comments-modal.component.css']
})
export class CommentsModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#b1').hover(function () {
      $('#modal1').modal({
        show: true,
        backdrop: false
      })
    });

    $('#b2').hover(function () {
      $('#modal2').modal({
        show: true,
        backdrop: false
      });
    });
  }

}
