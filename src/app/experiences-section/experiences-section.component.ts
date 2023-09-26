import { Component, Input } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
}

@Component({
  selector: 'app-experiences-section',
  templateUrl: './experiences-section.component.html',
  styleUrls: ['./experiences-section.component.css']
})
export class ExperiencesSectionComponent {

  @Input() experiences: Experience[] = [
    {
      position: 'Software Developer',
      company: 'ABC Tech Solutions',
      duration: 'Jan 2022 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      position: 'Web Developer',
      company: 'XYZ Web Services',
      duration: 'May 2020 - Dec 2021',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      position: 'Web Developer',
      company: 'XYZ Web Services',
      duration: 'May 2020 - Dec 2021',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      position: 'Web Developer',
      company: 'XYZ Web Services',
      duration: 'May 2020 - Dec 2021',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      position: 'Software Developer',
      company: 'ABC Tech Solutions',
      duration: 'Jan 2022 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      position: 'Web Developer',
      company: 'XYZ Web Services',
      duration: 'May 2020 - Dec 2021',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];
}
