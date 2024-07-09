import { Component, Input, ViewChild } from '@angular/core';
import { MarkdownModalComponent } from '../markdown-modal/markdown-modal.component';

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  link?: string;
  markdownFile?: string;
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
      link: 'https://project1-link.com',
      markdownFile: 'assets/markdown/project1.md'
    }
    // Add other projects here
  ];

  @ViewChild('markdownModal') markdownModal!: MarkdownModalComponent;

  async openMarkdownModal(markdownFile?: string) {
    if (markdownFile) {
      try {
        const response = await fetch(markdownFile);
        const markdownContent = await response.text();
        this.markdownModal.markdownContent = markdownContent; // Assign string directly
        this.markdownModal.showModal = true;
        this.markdownModal.ngOnChanges({
          markdownContent: {
            currentValue: markdownContent,
            previousValue: '',
            firstChange: true,
            isFirstChange: () => true
          }
        }); // Manually trigger ngOnChanges
      } catch (error) {
        console.error('Error fetching Markdown file:', error);
      }
    }
  }
}
