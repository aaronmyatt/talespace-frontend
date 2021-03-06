import {Component, OnInit} from "@angular/core";
import {NgbCarouselConfig, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;

  }

  ngOnInit() {
  }

}
