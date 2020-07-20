import { Component } from '@angular/core';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [fadeAnimation]
})
export class FooterComponent {
}
