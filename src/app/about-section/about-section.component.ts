import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  @Input() description: string = 'About';

  downloadResume() {
    const resumeUrl = 'assets/samitha_ranasinghe_resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'samitha_ranasinghe_resume.pdf';
    link.click();
  }

}
