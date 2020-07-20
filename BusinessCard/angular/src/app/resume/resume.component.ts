import { Component } from '@angular/core';
import { fadeAnimation } from '@common/animations/fadeAnimation';

@Component({
  selector: 'resume-component',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [fadeAnimation]
})
export class ResumeComponent {
  
}
