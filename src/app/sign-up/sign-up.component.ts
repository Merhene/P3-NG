import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  newUser: User = {
    email: "",
    firstname: "",
    lastname: "",
    password: ""
  };

  onSubmit(): void {
    // Formulaire envoyé
    console.log(this.newUser);
  }
}
