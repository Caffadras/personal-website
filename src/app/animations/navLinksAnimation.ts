import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const navLinksAnimation = trigger('navLinksAnimation', [
  state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
  state('*', style({ opacity: 1, transform: 'translateX(0)' })),
  transition('void => *', [animate('1s ease-out')]),
]);
