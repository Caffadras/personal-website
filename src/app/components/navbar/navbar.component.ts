import { ChangeDetectorRef, Component } from '@angular/core';
import { dropdownAnimation } from '../../animations/dropdown-animation';
import { logoAnimation } from '../../animations/logo-animation';
import { navLinksAnimation } from '../../animations/navLinksAnimation';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [dropdownAnimation, logoAnimation, navLinksAnimation],
})
export class NavbarComponent {
  dropdownVisible: boolean = false;
  ripplesColor: string = 'rgba(246, 241, 241, 0.3)';
  display: string = 'none';

  constructor(private cdr: ChangeDetectorRef) {}

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
    this.cdr.detectChanges();
  }

  onClickedOutside(): void {
    this.dropdownVisible = false;
  }

  onAnimationStart(event: AnimationEvent): void {
    if (event.toState === 'visible') {
      this.display = 'block';
    }
  }
  onAnimationEnd(event: AnimationEvent): void {
    if (event.toState === 'hidden') {
      this.display = 'none';
    }
  }
}
