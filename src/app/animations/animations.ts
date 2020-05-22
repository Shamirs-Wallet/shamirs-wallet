import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeIn =
  trigger('fadeIn', [
    state('in', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate(2000)
    ]),
  ]);

export const fadeOver =
  trigger('fadeOver', [
    state('in', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate(2000)
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate(2000)
    ]),
  ]);
