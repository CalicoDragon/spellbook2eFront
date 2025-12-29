import { Component, OnInit } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
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
      console.log(this.spells);
    });
  }

  getAllSpells(): void {
    console.log('Getting all the spells...');

    this.apiService.getAllSpells().subscribe((data: any) => {
      this.spells = data;
      console.log(this.spells);
    });
  }
}
