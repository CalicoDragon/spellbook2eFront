import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spell-card',
  imports: [],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.css',
})
export class SpellCard {
  @Input() name: String = '';
}
