import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const skillsAnimation = trigger('skillsAnimation', [
  state('void', style({ opacity: 0 })),
  transition('void => fromLeft', [
    animate(
      '0.6s ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
      ])
    ),
  ]),
  transition('void => fromRight', [
    animate(
      '0.6s ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
      ])
    ),
  ]),
]);
