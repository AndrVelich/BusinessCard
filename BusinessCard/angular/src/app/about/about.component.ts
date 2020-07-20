import { Component } from '@angular/core';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
  selector: 'about-component',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeAnimation]
})
export class AboutComponent {
  
}
