import { Component, Input } from '@angular/core';
import { Trait } from '../trait/trait';
import { Star } from '../star/star';

@Component({
  selector: 'app-spell-card',
  imports: [Trait, Star],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.css',
})
export class SpellCard {
  @Input() spell: any = '';

  stars = [1, 2, 3, 4, 5];
  rating = 1;
  hover_state = 0;

  onEnterEvent(starId: number) {
    this.hover_state = starId;
  }
  onLeaveEvent() {
    this.hover_state = 0;
  }
  onClickEvent(starId: number) {
    this.rating = starId;
  }
}
