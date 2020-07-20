import { Component } from '@angular/core';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [fadeAnimation]
})
export class HeroComponent {
  
}
