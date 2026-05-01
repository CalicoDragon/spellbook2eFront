import { Injectable } from '@angular/core';
import { PersonalSpellDataModel } from '../models/personal-spell-data-model';
import { Spell } from '../models/spell-model';

@Injectable({
  providedIn: 'root',
})
export class PersonalSpellData {
  _KEY = 'personalSpellData';

  getAllSpellData(): PersonalSpellDataModel[] {
    const storedData = localStorage.getItem(this._KEY);
    return storedData ? JSON.parse(storedData) : [];
  }

  saveSpellData(data: PersonalSpellDataModel) {
    const parsedData: PersonalSpellDataModel[] = this.getAllSpellData();

    // Check if this spell already has personal data
    const dataIndex = parsedData.findIndex((item) => item.name === data.name);

    if (dataIndex != -1) {
      // If it exists, we update
      parsedData[dataIndex] = data;
    } else {
      // If it does not, we push
      parsedData.push(data);
    }

    localStorage.setItem(this._KEY, JSON.stringify(parsedData));
  }

  getDataOfSpell(spell: Spell): PersonalSpellDataModel {
    const parsedData: PersonalSpellDataModel[] = this.getAllSpellData();

    let data = parsedData.find((item) => item.name === spell.name);

    // If no data found, return generic
    if (data == undefined) {
      data = {
        name: spell.name,
        rating: 1,
        description: '',
        favorite: false,
        prepared: false,
      };
    }

    return data;
  }

  replaceSpellData(jsonFile: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        localStorage.setItem(this._KEY, reader.result);
      }
    };

    reader.readAsText(jsonFile);
  }

  isSpellFavorited(spell: Spell): boolean {
    const spellData = this.getDataOfSpell(spell);

    return spellData.favorite;
  }

  isSpellPrepared(spell: Spell): boolean {
    const spellData = this.getDataOfSpell(spell);

    return spellData.prepared;
  }
}
