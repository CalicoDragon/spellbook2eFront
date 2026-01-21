import { Component, Input } from '@angular/core';
import { Trait } from '../trait/trait';
import { Star } from '../star/star';
import { PrepareButton } from '../prepare-button/prepare-button';
import { FavButton } from '../fav-button/fav-button';
import { PersonalSpellData } from '../../services/personal-spell-data';
import { PersonalSpellDataModel } from '../../models/personal-spell-data-model';

@Component({
  selector: 'app-spell-card',
  imports: [Trait, Star, PrepareButton, FavButton],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.css',
})
export class SpellCard {
  @Input() spell: any = '';

  constructor(private dataService: PersonalSpellData) {}

  stars = [1, 2, 3, 4, 5];
  rating = 1;
  hover_state = 0;

  saveData() {
    const mData: PersonalSpellDataModel = {
      name: this.spell.name,
      rating: this.rating,
      description: '',
      favorite: false,
      prepared: false,
    };

    this.dataService.saveSpellData(mData);
  }

  onEnterEvent(starId: number) {
    this.hover_state = starId;
  }
  onLeaveEvent() {
    this.hover_state = 0;
  }
  onClickEvent(starId: number) {
    this.rating = starId;
    this.saveData();
  }
}
