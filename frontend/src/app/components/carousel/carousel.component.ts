import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  imagens = [
    { source: 'assets/bannner1.png' },
    { source: 'assets/bannner1.png' },
    { source: 'assets/bannner1.png' },
  ];
}
