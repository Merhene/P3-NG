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
  skill2: Skill = new Skill("CSS", '<i class="fa-brands fa-css3-alt"></i>', '<a href="https://developer.mozilla.org/fr/docs/Web/CSS"></a>');
  skill3: Skill = new Skill("Laravel", '<i class="fa-brands fa-laravel"></i>', '<a href="https://laravel.com/"></a>');

  developer: Developer = {
    lastName: "Merhene",
    firstName: "SI TAYEB",
    age: 28,
    gender: "Male",
    bio: "Nothing to say",
    skills: [this.skill1, this.skill2, this.skill3]
  }
};