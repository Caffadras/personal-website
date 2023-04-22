import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const bounceIn = trigger('bounceIn', [
  state('void', style({ opacity: 0 })),
  transition('void => fromLeft', [
    animate(
      '0.6s',
      keyframes([
        style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(20px)', offset: 0.6 }),
        style({ transform: 'translateX(0)', offset: 1 }),
      ])
    ),
  ]),
  transition('void => fromRight', [
    animate(
      '0.6s',
      keyframes([
        style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(-20px)', offset: 0.6 }),
        style({ transform: 'translateX(0)', offset: 1 }),
      ])
    ),
  ]),
]);
