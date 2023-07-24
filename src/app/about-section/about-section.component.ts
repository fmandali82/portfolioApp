import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  downloadResume() {
    const resumeUrl = 'assets/samitha_ranasinghe_resume.pdf'; // Update with your resume file name and path
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'samitha_ranasinghe_resume.pdf'; // Set the desired name for the downloaded file
    link.click();
  }

}
