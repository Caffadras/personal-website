import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const bounce = trigger('bounce', [
  state('void', style({ opacity: 0 })),
  transition('void => fromLeft', [
    animate(
      '0.6s',
      keyframes([
        style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(15px)', offset: 0.6 }),
        style({ transform: 'translateX(0)', offset: 1 }),
      ])
    ),
  ]),
  transition('void => fromRight', [
    animate(
      '0.6s',
      keyframes([
        style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.6 }),
        style({ transform: 'translateX(0)', offset: 1 }),
      ])
    ),
  ]),
  transition('void => inPlace', [
    animate(
      '0.6s',
      keyframes([
        style({
          opacity: 0,
          transform: 'scale(1)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'scale(1.1)',
          offset: 0.6,
        }),

        style({ transform: 'scale(1)', offset: 1 }),
      ])
    ),
  ]),
]);
