import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [CommonModule, NgClass],
  templateUrl: './star.html',
  styleUrl: './star.css',
})
export class Star {
  @Input() starId: number = 0;
  @Input() rating: number = 1;

  @Output() starClicked = new EventEmitter<number>();

  onClick() {
    this.starClicked.emit(this.starId);
  }
}
