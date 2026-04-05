import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchEvent = output<String>();

  isFocus: boolean = false;

  onEnter(search: String = '') {
    if (this.isFocus) {
      this.searchEvent.emit(search);
      // search ? this.getSpell(search) : this.getAllSpells();
    }
  }

  // getSpell(query: String): void {
  //   this.apiService.getSpells(query).subscribe((data: any) => this.searchEvent.emit(data));
  // }

  // getAllSpells(): void {
  //   this.apiService.getAllSpells().subscribe((data: any) => this.searchEvent.emit(data));
  // }
}
