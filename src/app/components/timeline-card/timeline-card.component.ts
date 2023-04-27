import { Component, HostListener, Input, OnInit } from '@angular/core';
import { bounce } from '../../animations/bounce';
import { TimelineEvent } from '../../domain/TimelineEvent';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css'],
  animations: [bounce],
})
export class TimelineCardComponent implements OnInit {
  @Input() rightSidePosition: boolean = false;
  @Input() event: TimelineEvent = {
    title: 'Event title',
    description: 'Event description',
    date: 'Event date',
    icon: 'assets/icons/svg/logo-black.svg',
  };

  animationType: string = 'void';
  scrolledIntoView: boolean = false;

  ngOnInit(): void {
    this.updateAnimationFormat();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateAnimationFormat();
  }

  private updateAnimationFormat() {
    if (window.innerWidth < 1280) {
      this.animationType = 'fromRight';
    } else {
      this.animationType = 'fromLeft';
    }
  }

  onInView() {
    this.scrolledIntoView = true;
  }

  getAnimationType(): string {
    if (!this.scrolledIntoView) {
      return 'void';
    }
    if (this.rightSidePosition) {
      return 'fromRight';
    }
    return this.animationType;
  }
}
