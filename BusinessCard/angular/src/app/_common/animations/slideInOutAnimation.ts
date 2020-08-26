import {
  trigger,
  animate,
  transition,
  style,
  state,
  query
} from '@angular/animations';

export const slideInOutAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('300ms ease-in', style({ transform: 'translateY(0%)' }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(-100%)' }))
  ])
]);


