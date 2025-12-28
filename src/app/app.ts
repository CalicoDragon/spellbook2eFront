import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpellCard } from './shared/components/spell-card/spell-card';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpellCard, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('spellbook2eFront');
}
