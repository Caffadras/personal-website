import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollingService {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToAnchor(anchorId: string, offset: number = 0): void {
    setTimeout(() => {
      const anchorElement = document.getElementById(anchorId);
      if (anchorElement) {
        const rect = anchorElement.getBoundingClientRect();
        const top =
          rect.top + this.viewportScroller.getScrollPosition()[1] - offset;
        this.viewportScroller.scrollToPosition([0, top]);
      }
    }, 100);
  }
}
