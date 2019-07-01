import { Component, OnInit } from '@angular/core';
import {Times} from './models/times.model';
import {TimeService} from './services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  times: Times;
  constructor(public timeService: TimeService) {  }

  ngOnInit() {
    this.timeService.getTime().subscribe(
      vehicles => this.times = vehicles,
      error => console.error(error),
    );
  }

}
