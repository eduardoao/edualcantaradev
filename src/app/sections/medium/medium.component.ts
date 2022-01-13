import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FeedService } from '../../shared/services/feed-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MediumComponent implements OnInit {

  private mediumUrl: string = 'https%3A%2F%2Fmedium.com%2Ffeed%2F%40lennonalvesdias';
  public feeds: any;

  public carouselOptions: OwlOptions = {
    stagePadding: 10,
    margin: 10,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    nav: true,
    navText: ['', ''],
    navSpeed: 700,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    }
  };

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.mediumUrl)
      .subscribe(
        feed => this.feeds = feed.items,
        error => console.log(error));
  }

}
