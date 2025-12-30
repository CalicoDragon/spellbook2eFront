import { Component, EventEmitter, Output } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Output() searchEvent = new EventEmitter<Array<any>>();

  spells: any[] = [];
  isFocus: boolean = false;

  constructor(private apiService: Api) {}

  onEnter(search: String = '') {
    if (this.isFocus) {
      search ? this.getSpell(search) : this.getAllSpells();
    }
  }

  getSpell(query: String): void {
    this.apiService.getSpells(query).subscribe((data: any) => {
      this.spells = data;
      this.searchEvent.emit(this.spells);
    });
  }

  getAllSpells(): void {
    this.apiService.getAllSpells().subscribe((data: any) => {
      this.spells = data;
      this.searchEvent.emit(this.spells);
    });
  }
}
