import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpellCard } from './shared/components/spell-card/spell-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpellCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('spellbook2eFront');
}
