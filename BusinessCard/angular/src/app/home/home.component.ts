import { Component } from '@angular/core';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  animations: [fadeAnimation]
})
export class HomeComponent {
  
}
