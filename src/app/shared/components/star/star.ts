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

  @Output() starEnter = new EventEmitter<number>();
  @Output() starLeave = new EventEmitter<number>();
  @Output() starClicked = new EventEmitter<number>();

  onEnter() {
    this.starEnter.emit(this.starId);
  }
  onLeave() {
    this.starLeave.emit();
  }
  onClick() {
    this.starClicked.emit(this.starId);
  }
}
