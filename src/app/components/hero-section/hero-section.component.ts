import { Component } from '@angular/core';
import { ScrollingService } from '../../services/scrolling.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
  constructor(private scrollingService: ScrollingService) {}

  scrollToAnchor(anchorId: string, offset: number = 0): void {
    this.scrollingService.scrollToAnchor(anchorId, offset);
  }
}
