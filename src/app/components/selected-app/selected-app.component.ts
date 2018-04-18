import { Component, OnInit } from '@angular/core';
import {AppsService} from '../../providers/apps.service';
import {ActivatedRoute, Params} from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-selected-app',
  templateUrl: './selected-app.component.html',
  styleUrls: ['./selected-app.component.css']
})
export class SelectedAppComponent implements OnInit {

  public hasError: boolean;
  public loading: boolean;
  public app: any;
  constructor(private appsService: AppsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const appId: string = params['id'];
      this.appsService.find(appId).subscribe((app: any) => {
          this.app = app;
          this.loading = false;
          this.hasError = false;
        },
        error => {
          this.loading = false;
          this.hasError = true;
        });
    });


    $('.landing-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: ["<span class='fa fa-chevron-left icon-white' style='color: gray; font-size: 30px'></span>", "<span class='fa fa-chevron-right icon-white' style='color: gray; font-size: 30px'></span>"],
      dots: true,
      dotsContainer: '#carousel-custom-dots',
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000
        },
        600: {
          items: 1,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000
        },
        1000: {
          items: 1,
          loop: true,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    });
    $('.owl-dot').click(function () {
      $('.landing-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $('.owl-prev').css('position', 'absolute');
    $('.owl-next').css('position', 'absolute');
    $('.owl-prev').css('top', '45%');
    $('.owl-next').css('top', '45%');

    $('.owl-next').css('right', '-5px');
    $('.owl-prev').css('marginLeft', '-5px');
  }

}
