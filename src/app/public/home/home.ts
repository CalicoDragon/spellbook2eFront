import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { SpellCard } from '../../shared/components/spell-card/spell-card';
import { PersonalSpellData } from '../../shared/services/personal-spell-data';

@Component({
  selector: 'app-home',
  imports: [Navbar, SpellCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(protected dataService: PersonalSpellData) {}

  spells: any[] = [];

  updateSpells(updatedArray: Array<any>) {
    this.spells = updatedArray;
  }
}
