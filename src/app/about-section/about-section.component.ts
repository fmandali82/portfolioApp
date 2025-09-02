import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  @Input() about: any = 'About';

  openResume(resumeUrl: string) {
    console.log(resumeUrl)
    window.open(resumeUrl, '_blank');
  }

  openCV(cvUrl: string) {
    console.log(cvUrl)
    window.open(cvUrl, '_blank');
  }

}
