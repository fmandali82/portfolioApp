import { Component, Input, ViewChild } from '@angular/core';
import { MarkdownModalComponent } from '../markdown-modal/markdown-modal.component';

interface Education {
  degree: string;
  institution: string;
  received: string;
  description: string;
  markdownFile?: string;
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      markdownFile: 'assets/markdown/bs-computer-science.md'
    },
    {
      degree: 'Master of Business Administration',
      institution: 'XYZ Business School',
      received: '2020',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      markdownFile: 'assets/markdown/mba.md'
    }
    // Add more education details as needed
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
