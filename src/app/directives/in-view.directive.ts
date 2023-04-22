import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appInView]',
})
export class InViewDirective implements OnInit, OnDestroy {
  @Output() inView: EventEmitter<void> = new EventEmitter();
  private observer?: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.inView.emit();
            this.observer?.unobserve(this.element.nativeElement);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
