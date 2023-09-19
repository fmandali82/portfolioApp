import { Component, OnInit, Input } from '@angular/core';

interface Skill {
  name: string;
  url: string;
}

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {

  @Input() skills: Skill[] = [];

}
