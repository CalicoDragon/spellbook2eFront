import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchEvent = output<string>();
  isFocus = false;

  onEnter(search = '') {
    if (this.isFocus) this.searchEvent.emit(search);
  }
}
