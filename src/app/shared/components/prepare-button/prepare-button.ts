import { CommonModule, NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-prepare-button',
  imports: [CommonModule, NgClass],
  templateUrl: './prepare-button.html',
  styleUrl: './prepare-button.css',
})
export class PrepareButton {
  isPrepared = input.required<boolean>();
  prepClicked = output<void>();

  onClick() {
    this.prepClicked.emit();
  }
}
