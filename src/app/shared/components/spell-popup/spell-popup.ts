import { Component, input, output } from '@angular/core';
import { Spell } from '../../models/spell-model';
import { Trait } from '../trait/trait';

@Component({
  selector: 'app-spell-popup',
  imports: [Trait],
  templateUrl: './spell-popup.html',
  styleUrl: './spell-popup.css',
})
export class SpellPopup {
  spell = input.required<Spell>();
  closeInfo = output();
}
