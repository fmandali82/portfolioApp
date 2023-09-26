import { Component, Input } from '@angular/core';

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent {

  @Input() projects: Project[] = [
    {
      name: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'project1-image-url.jpg',
      link: 'https://project1-link.com'
    }
  ];

}
