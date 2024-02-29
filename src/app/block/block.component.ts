import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.scss'
})

export class BlockComponent {

  name: string = 'Bob';
  imgSrc: string = "https://via.placeholder.com/350x150";

  sayHello(): void {
    alert("Bonjour !");
  }

}
