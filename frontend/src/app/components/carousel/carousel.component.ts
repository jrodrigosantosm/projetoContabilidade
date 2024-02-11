import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  imagens = [
    { source: 'assets/1.png' },
    { source: 'assets/2.png' },
    { source: 'assets/3.png' },
    { source: 'assets/4.png' },
    { source: 'assets/5.png' },
    { source: 'assets/6.png' },
  ];

  carouselStyle = { 'position': 'relative' };
}
