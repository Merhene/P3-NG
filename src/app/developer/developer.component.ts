import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill.model';
import { SkillComponent } from "../skill/skill.component";

@Component({
  selector: 'app-developer',
  standalone: true,
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss',
  imports: [CommonModule, SkillComponent]
})
export class DeveloperComponent {

  skill1: Skill = new Skill("PHP", '<i class="fa-brands fa-php"></i>', '<a href="https://www.php.net/")></a>');
  skill2: Skill = new Skill("SQL", '<i class="fa-solid fa-database"></i>', '<a href="https://www.mysql.com/fr/"></a>');
  skill3: Skill = new Skill("HTML", '<i class="fa-brands fa-html5"></i>', '<a href="https://www.html5pattern.com/"></a>');

  developer: Developer = {
    lastName: "Julie",
    firstName: "Raymond",
    age: 31,
    gender: "Féminin",
    bio: "Apprend Angular",
    skills: [this.skill1, this.skill2, this.skill3]
  }
};