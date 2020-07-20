import {
  trigger,
  animate,
  transition,
  style,
  state,
  query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [
    style({ opacity: 0 }),
    animate(400)
  ]),
  transition(':leave', [
    animate(400, style({ opacity: 0 }))
  ])
]);


