import { Component, computed, inject, input, signal } from '@angular/core';
import { Star } from '../star/star';
import { PrepareButton } from '../prepare-button/prepare-button';
import { FavButton } from '../fav-button/fav-button';
import { PersonalSpellData } from '../../services/personal-spell-data';
import { DescriptionArea } from '../description-area/description-area';
import { Trait } from '../trait/trait';
import { Spell } from '../../models/spell-model';
import { SpellPopup } from '../spell-popup/spell-popup';

@Component({
  selector: 'app-spell-card',
  imports: [Star, PrepareButton, FavButton, DescriptionArea, Trait, SpellPopup],
  templateUrl: './spell-card.html',
  styleUrl: './spell-card.css',
})
export class SpellCard {
  spell = input.required<Spell>();
  dataService: PersonalSpellData = inject(PersonalSpellData);
  spellPersonalData = computed(() => this.dataService.getDataOfSpell(this.spell()));

  stars = [1, 2, 3, 4, 5];

  saveData() {
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

  onFavClickEvent() {
    this.spellPersonalData().favorite = !this.spellPersonalData().favorite;
    this.saveData();
  }

  onPrepClickEvent() {
    this.spellPersonalData().prepared = !this.spellPersonalData().prepared;
    this.saveData();
  }

  // Modal
  protected isInfoOpen = signal(false);
}
