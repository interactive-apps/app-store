import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppsService} from '../../apps.service';
declare var $: any;
@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  @Input() products: any;
  private sliderImages = ['assets/img/products/score-card-cover.png', 'assets/img/products/score-card-widget-cover.png', 'assets/img/products/idashboard-cover.png', 'assets/img/products/dhis2touch-cover.png', 'assets/img/products/hisptz-touch-dashboard.png'];
  constructor(
    private route: ActivatedRoute,
    private appService: AppsService
  ) { }

  ngOnInit() {
    const slider = this.sliderImages;
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
    // $('.owl-prev').css('height', '45px');
    // $('.owl-next').css('height', '45px');
    // $('.owl-prev').css('width', '25px');
    // $('.owl-next').css('width', '25px');
    $('.owl-prev').css('top', '45%');
    $('.owl-next').css('top', '45%');

    // $('.owl-prev').css('borderBottomRightRadius', '40px');
    // $('.owl-prev').css('borderTopRightRadius', '40px');
    // $('.owl-next').css('borderBottomLeftRadius', '50px');
    // $('.owl-next').css('borderTopLeftRadius', '50px');

    $('.owl-next').css('right', '5px');
    $('.owl-prev').css('marginLeft', '5px');
    // $('.owl-prev').css('backgroundColor', '#F5F5F5');
    // $('.owl-next').css('backgroundColor', '#F5F5F5');
  }
}

