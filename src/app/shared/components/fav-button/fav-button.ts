import { Component, input, output } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-fav-button',
  imports: [CommonModule, NgClass],
  templateUrl: './fav-button.html',
  styleUrl: './fav-button.css',
})
export class FavButton {
  isFav = input.required<boolean>();
  favClicked = output<void>();

  onClick() {
    this.favClicked.emit();
  }
}
