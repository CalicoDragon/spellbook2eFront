import { Component, inject, Signal } from '@angular/core';
import { catchError, map, Observable, of, startWith, Subject, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { Navbar } from '../../shared/components/navbar/navbar';
import { SpellCard } from '../../shared/components/spell-card/spell-card';
import { Api } from '../../shared/services/api';
import { SpellsRequest, Spell } from '../../shared/models/spell-model';

@Component({
  selector: 'app-home',
  imports: [Navbar, SpellCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly apiService = inject(Api);
  private readonly searchTriggered$ = new Subject<string>();
  private readonly spells$: Observable<any> = this.searchTriggered$.pipe(
    switchMap((query) => {
      const spells$ = query ? this.apiService.getSpells(query) : this.apiService.getAllSpells();

      return spells$.pipe(
        map((data) => ({ loadingState: 'success', spells: data })), // Tells TS to check that this value "satisfies" the interface and thus will also match that part of SpellsRequest
        startWith({ loadingState: 'loading' } satisfies { loadingState: 'loading' }),
        catchError(() => of({ loadingState: 'error' } satisfies { loadingState: 'error' })),
      );
    }),
  );
  protected readonly spells: Signal<SpellsRequest> = toSignal(this.spells$);

  protected receiverSearch(query: string) {
    this.searchTriggered$.next(query);
  }
}
