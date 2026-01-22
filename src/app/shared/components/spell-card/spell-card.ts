import { Component, computed, input } from '@angular/core';
import { Trait } from '../trait/trait';
import { Star } from '../star/star';
import { PrepareButton } from '../prepare-button/prepare-button';
import { FavButton } from '../fav-button/fav-button';
import { PersonalSpellData } from '../../services/personal-spell-data';
import { DescriptionArea } from '../description-area/description-area';

@Component({
  selector: 'app-spell-card',
  imports: [Trait, Star, PrepareButton, FavButton, DescriptionArea],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.css',
})
export class SpellCard {
  spell = input.required<any>();
  spellPersonalData = computed(() => this.dataService.getDataOfSpell(this.spell()));

  constructor(private dataService: PersonalSpellData) {}

  stars = [1, 2, 3, 4, 5];

  saveData() {
    console.log(`Saving data: ${this.spellPersonalData}`);

    this.dataService.saveSpellData(this.spellPersonalData());
  }

  onStarClickEvent(starId: number) {
    this.spellPersonalData().rating = starId;
    this.saveData();
  }

  onDescChangedEvent(desc: string) {
    this.spellPersonalData().description = desc;
    this.saveData();
  }
}
