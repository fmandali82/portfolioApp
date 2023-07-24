import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  proficiency: number;
}

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  skills: Skill[] = [
    { name: 'HTML', proficiency: 80 },
    { name: 'CSS', proficiency: 70 },
    { name: 'JavaScript', proficiency: 90 },
    { name: 'Angular', proficiency: 85 },
    { name: 'TypeScript', proficiency: 75 },
    { name: 'React', proficiency: 70 },
    { name: 'Node.js', proficiency: 65 },
    { name: 'Python', proficiency: 60 },
    // Add more skills as needed
  ];

  displayedSkills: Skill[] = [];
  initialSkillsToShow = 4;
  skillsPerLoad = 4;

  ngOnInit() {
    this.loadMoreSkills();
  }

  loadMoreSkills() {
    const remainingSkills = this.skills.slice(this.displayedSkills.length);
    const skillsToShow = remainingSkills.slice(0, this.skillsPerLoad);
    this.displayedSkills = [...this.displayedSkills, ...skillsToShow];
  }

  get showLoadMoreButton(): boolean {
    return this.displayedSkills.length < this.skills.length;
  }

}
