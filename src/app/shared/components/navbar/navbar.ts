import { Component, inject, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonalSpellData } from '../../services/personal-spell-data';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchEvent = output<string>();
  isFocus = false;
  dataService: PersonalSpellData = inject(PersonalSpellData);
  favFilter = signal(false);
  prepFilter = signal(false);

  onEnter(search = '') {
    if (this.isFocus) this.searchEvent.emit(search);
  }

  DownloadJSON() {
    const data = this.dataService.getAllSpellData();
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // <a> element to download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'personalSpellData.json';
    document.body.appendChild(link);
    link.click();

    // Get rid of it
    link.remove();
    URL.revokeObjectURL(url);
  }

  ImportJSON(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.dataService.replaceSpellData(input.files[0]);
    }
  }
}
