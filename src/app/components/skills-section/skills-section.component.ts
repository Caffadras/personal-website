import { Component } from '@angular/core';
import { skillsAnimation } from '../../animations/skills-animation';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
  animations: [skillsAnimation],
})
export class SkillsSectionComponent {
  scrolledIntoView: { [key: number]: boolean } = {};

  onInView(id: number) {
    this.scrolledIntoView[id] = true;
  }
}
