// import { Component, Input } from '@angular/core';

// interface Experience {
//   position: string;
//   company: string;
//   duration: string;
//   description: string;
// }

// @Component({
//   selector: 'app-experiences-section',
//   templateUrl: './experiences-section.component.html',
//   styleUrls: ['./experiences-section.component.css']
// })
// export class ExperiencesSectionComponent {

//   @Input() experiences: Experience[] = [
//     {
//       position: 'Software Developer',
//       company: 'ABC Tech Solutions',
//       duration: 'Jan 2022 - Present',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       position: 'Web Developer',
//       company: 'XYZ Web Services',
//       duration: 'May 2020 - Dec 2021',
//       description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//     },
//     {
//       position: 'Web Developer',
//       company: 'XYZ Web Services',
//       duration: 'May 2020 - Dec 2021',
//       description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//     },
//     {
//       position: 'Web Developer',
//       company: 'XYZ Web Services',
//       duration: 'May 2020 - Dec 2021',
//       description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//     },
//     {
//       position: 'Software Developer',
//       company: 'ABC Tech Solutions',
//       duration: 'Jan 2022 - Present',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       position: 'Web Developer',
//       company: 'XYZ Web Services',
//       duration: 'May 2020 - Dec 2021',
//       description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
//     },
//   ];
// }


import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MarkdownModalComponent } from '../markdown-modal/markdown-modal.component';

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
  category: string;
  markdownFile?: string;
  logoUrl?: string;
  isHovered?: boolean;
}

@Component({
  selector: 'app-experiences-section',
  templateUrl: './experiences-section.component.html',
  styleUrls: ['./experiences-section.component.css']
})
export class ExperiencesSectionComponent implements OnInit {
  @Input() experiences: Experience[] = [
    {
      position: 'Machine Learning Intern',
      company: 'KAYA Global',
      duration: 'May 2023 - Dec 2023',
      description: 'I worked on various ML concepts along with full stack development in the FERN stack...',
      category: 'industrial',
      markdownFile: 'assets/markdown/machine-learning-intern.md'
    },
    // other experiences...
  ];

  categories: { key: string, label: string }[] = [];
  filteredExperiences: Experience[] = [];
  activeCategory: string = 'active';
  isNavbarFixed: boolean = false;

  @ViewChild('markdownModal') markdownModal!: MarkdownModalComponent;

  ngOnInit() {
    this.filteredExperiences = this.experiences.filter(exp => exp.duration.split(" ").at(-1) === 'Present');
    this.extractCategories();
  }

  extractCategories() {
    const uniqueCategories = new Set(this.experiences.map(exp => exp.category));
    this.categories = Array.from(uniqueCategories).map(cat => ({
      key: cat,
      label: this.capitalize(cat)
    }));
    this.categories.unshift({ key: 'active', label: 'Active' });
  }

  capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  filterExperiences(category: string) {
    this.activeCategory = category;
    if (category === 'active') {
      this.filteredExperiences = this.experiences.filter(exp => exp.duration.split(" ").at(-1) === 'Present');
    } else {
      this.filteredExperiences = this.experiences.filter(exp => exp.category === category);
    }
  }

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