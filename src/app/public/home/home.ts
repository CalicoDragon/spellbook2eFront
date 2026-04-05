import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { SpellCard } from '../../shared/components/spell-card/spell-card';
import { Api } from '../../shared/services/api';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Navbar, SpellCard, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private apiService = inject(Api);
  spells$!: Observable<Array<any>>;

  recieveSearch(query: String) {
    console.log('Search recieved', query);

    this.spells$ = query ? this.apiService.getAllSpells() : this.apiService.getSpells(query);
  }
}
