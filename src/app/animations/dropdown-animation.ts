import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const dropdownAnimation = trigger('dropdownAnimation', [
  state(
    'hidden',
    style({
      opacity: 0,
      transform: 'translateY(-20px)',
    })
  ),
  state(
    'visible',
    style({
      opacity: 1,
      transform: 'translateY(0)',
    })
  ),
  transition('hidden => visible', [animate('200ms ease-in')]),
  transition('visible => hidden', [animate('350ms ease-out')]),
]);
