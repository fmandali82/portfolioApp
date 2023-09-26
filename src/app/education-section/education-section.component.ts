import { Component, Input } from '@angular/core';

interface Education {
  degree: string;
  institution: string;
  received: string;
  description: string;
}

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent {

  @Input() educations: Education[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'ABC University',
      received: '2022',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      degree: 'Master of Business Administration',
      institution: 'XYZ Business School',
      received: '2020',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    // Add more education details as needed
  ];

}
