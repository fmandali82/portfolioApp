import { Component, OnInit, Input } from '@angular/core';

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
export class ProjectsSectionComponent implements OnInit{

  @Input() projects: Project[] = [
    {
      name: 'Project 1',
      description: 'Description for Project 1',
      imageUrl: 'project1-image-url.jpg',
      link: 'https://project1-link.com'
    }
  ];

  displayedProjects: Project[] = [];
  initialProjectsToShow = 4;
  projectsPerLoad = 2;

  ngOnInit() {
    this.loadMoreProjects();
  }

  loadMoreProjects() {
    const remainingProjects = this.projects.slice(this.displayedProjects.length);
    const projectsToShow = remainingProjects.slice(0, this.projectsPerLoad);
    this.displayedProjects = [...this.displayedProjects, ...projectsToShow];
  }

  get showLoadMoreButton(): boolean {
    return this.displayedProjects.length < this.projects.length;
  }

}
