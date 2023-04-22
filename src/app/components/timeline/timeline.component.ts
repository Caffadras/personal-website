import { Component, HostListener, OnInit } from '@angular/core';
import { bounceIn } from '../../animations/bounceIn';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [bounceIn],
})
export class TimelineComponent implements OnInit {
  animationType: string = 'void';
  scrolledIntoView: { [key: string]: boolean } = {};
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

  onInView(id: string) {
    this.scrolledIntoView[id] = true;
    this.updateAnimationFormat();
  }
}
