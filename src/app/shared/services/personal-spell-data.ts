import { Injectable } from '@angular/core';
import { PersonalSpellDataModel } from '../models/personal-spell-data-model';

@Injectable({
  providedIn: 'root',
})
export class PersonalSpellData {
  _KEY = 'personalSpellData';

  getAllSpellData() {
    const storedData = localStorage.getItem(this._KEY);
    let parsedData: PersonalSpellDataModel[] = [];
    if (storedData) {
      parsedData = JSON.parse(storedData);
    }

    return parsedData;
  }

  saveSpellData(data: PersonalSpellDataModel) {
    const parsedData: PersonalSpellDataModel[] = this.getAllSpellData();
    console.log(parsedData);

    // Check if this spell already has personal data
    const dataIndex = parsedData.findIndex((item) => item.name === data.name);
    console.log(dataIndex);

    if (dataIndex != -1) {
      // If it exists, we update
      parsedData[dataIndex] = data;
    } else {
      // If it does not, we push
      parsedData.push(data);
    }

    localStorage.setItem(this._KEY, JSON.stringify(parsedData));
  }
}
