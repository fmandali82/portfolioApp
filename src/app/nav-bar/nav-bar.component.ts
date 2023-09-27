import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  menuItems = [
    { label: 'Home', link: 'home-section' },
    { label: 'About', link: 'about-section' },
    { label: 'Skills', link: 'skills-section' },
    { label: 'Projects', link: 'projects-section' },
    { label: 'Experiences', link: 'experiences-section' },
    { label: 'Education', link: 'education-section'},
    { label: 'Contact', link: 'contact-section'}
  ];

  activeSection: string = '';

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Implement logic to determine the active section when scrolling
    // You can use the ViewportScroller to get the current section in view
    const sections = ['home-section', 'about-section', 'skills-section', 'projects-section', 'experiences-section', 'education-section', 'contact-section'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          this.activeSection = section; // Set the active section when scrolled to a section
        }
      }
    }
  }
}