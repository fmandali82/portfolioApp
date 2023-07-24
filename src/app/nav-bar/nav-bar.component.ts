import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  menuItems = [
    { label: 'About', link: 'about-section' },
    { label: 'Projects', link: 'projects-section' },
    { label: 'Experiences', link: 'experiences-section' },
    { label: 'Skills', link: 'skills-section' },
    { label: 'Education', link: 'education-section'},
    { label: 'Contact Me', link: 'contact-section'}
  ];

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

}
