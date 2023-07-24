import { Component, OnInit } from '@angular/core';

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
export class ExperiencesSectionComponent implements OnInit {

  experiences: Experience[] = [
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

  displayedExperiences: Experience[] = [];
  initialExperiencesToShow = 4;
  experiencesPerLoad = 2;

  ngOnInit() {
    this.loadMoreExperiences();
  }

  loadMoreExperiences() {
    const remainingExperiences = this.experiences.slice(this.displayedExperiences.length);
    const experiencesToShow = remainingExperiences.slice(0, this.experiencesPerLoad);
    this.displayedExperiences = [...this.displayedExperiences, ...experiencesToShow];
  }

  get showLoadMoreButton(): boolean {
    return this.displayedExperiences.length < this.experiences.length;
  }

}
