import { Component, OnInit } from '@angular/core';
import { TimelineEvent } from '../../domain/TimelineEvent';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  timelineEvents: TimelineEvent[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient
      .get<TimelineEvent[]>('/assets/data/events.json')
      .subscribe((data: TimelineEvent[]) => {
        this.timelineEvents = data;
      });
  }
}
