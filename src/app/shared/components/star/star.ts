import { CommonModule, NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [CommonModule, NgClass],
  templateUrl: './star.html',
  styleUrl: './star.css',
})
export class Star {
  starId = input<number>(0);
  rating = input<number>(1);
  starClicked = output<number>();

  onClick() {
    this.starClicked.emit(this.starId());
  }
}
