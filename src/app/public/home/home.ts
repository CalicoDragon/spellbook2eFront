import { Component, inject, signal, Signal } from '@angular/core';
import { catchError, map, Observable, of, startWith, Subject, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { Navbar } from '../../shared/components/navbar/navbar';
import { SpellCard } from '../../shared/components/spell-card/spell-card';
import { Api } from '../../shared/services/api';
import { SpellsRequest } from '../../shared/models/spell-model';
import { Paginator } from '../../shared/components/paginator/paginator';

@Component({
  selector: 'app-home',
  imports: [Navbar, SpellCard, Paginator],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly apiService = inject(Api);
  private readonly searchTriggered$ = new Subject<string>();
  private readonly spells$: Observable<SpellsRequest> = this.searchTriggered$.pipe(
    switchMap((query) => {
      const spells$ = query ? this.apiService.getSpells(query) : this.apiService.getAllSpells();

      return spells$.pipe(
        map((data) => ({ loadingState: 'success', spells: data }) as const), // as const forces TS to interpret { loadingState: 'success', spells: data } as the type { loadingState: 'success', spells: Spell[] } rather than { loadingState: string, spells: Spell[] } which it currently does
        startWith({ loadingState: 'loading' } as const),
        catchError(() => of({ loadingState: 'error' } as const)),
      );
    }),
  );
  protected readonly spells: Signal<SpellsRequest | undefined> = toSignal(this.spells$); // Marked as possible undefined as before doing a query it will be undefined

  protected receiverSearch(query: string): void {
    this.searchTriggered$.next(query);
  }

  // Pagination
  protected page = signal<number>(1);
  protected Math: Math = Math;

  protected changePage(page: number): void {
    this.page.set(page);
  }
}
