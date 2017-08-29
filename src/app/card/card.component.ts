import {Component, Input, NgZone, OnInit} from '@angular/core';
import {AppsService} from '../apps.service';

declare var $: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: any;
  public apps: Array<any>;
  public loading: boolean;
  public hasError: boolean;
  public appFilter: string;
  public theClass = 'carousel';

  constructor(private appsService: AppsService,
              private zone: NgZone) {
    this.loading = true;
    this.hasError = false;
    this.appFilter = '';
  }

  ngOnInit() {
    $('.landing-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: true,
      dotsContainer: '#carousel-custom-dots',
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          loop: false,
          autoplay: false,
          autoplaySpeed: 2000
        },
        600: {
          items: 1,
          loop: false,
          autoplay: false,
          autoplaySpeed: 2000
        },
        1000: {
          items: 1,
          loop: false,
          autoplay: false,
          autoplaySpeed: 2000
        }
      }
    });
    $('.owl-dot').click(function () {
      $('.landing-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
    });
  }

  sliderStatus(flag: string) {
    if (flag === 'active') {
      $('.landing-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
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
    }else {
      console.log('The check variable is ' + flag);
      $('.landing-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        dotsContainer: '#carousel-custom-dots',
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            loop: false,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
      });
    }
  }

  reloadPage() {
    this.zone.runOutsideAngular(() => {
      location.reload();
    });
  }
}
