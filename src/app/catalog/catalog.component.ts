import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  promo: string;
  photo: string;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  productList: Product[] = [
    { id: 1, name: 'braguette de pain', price: 1, promo: '10%', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 2, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 3, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 4, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 5, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 6, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 7, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 8, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 9, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 10, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
    { id: 11, name: 'Dr. Nice', price: 10, promo: 'ten percent', photo: 'https://pbs.twimg.com/media/EPTcbgbWAAEzBPA.jpg'},
  ];

  addToCart(): void {
    alert("Product in our shopping bag mf");
  };
}
