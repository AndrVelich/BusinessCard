import { Component } from '@angular/core';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeAnimation]
})
export class ContactComponent {
  
}
