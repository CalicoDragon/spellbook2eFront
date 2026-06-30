import { Component, computed, inject, signal, Signal, viewChild } from '@angular/core';
import { catchError, map, Observable, of, startWith, Subject, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { Navbar } from '../../shared/components/navbar/navbar';
import { SpellCard } from '../../shared/components/spell-card/spell-card';
import { Api } from '../../shared/services/api';
import { Spell, SpellsRequest } from '../../shared/models/spell-model';
import { Paginator } from '../../shared/components/paginator/paginator';
import { PersonalSpellData } from '../../shared/services/personal-spell-data';

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
  private readonly spells: Signal<SpellsRequest | undefined> = toSignal(this.spells$); // Marked as possible undefined as before doing a query it will be undefined
  protected readonly filteredSpells = computed(() => {
    const spells = this.spells();

    if (!spells || spells.loadingState !== 'success') {
      return spells;
    }

    return {
      ...spells,
      spells: spells.spells.filter(this.favPrepFilter),
    };
  });

  protected receiverSearch(query: string): void {
    this.searchTriggered$.next(query);
    this.changePage(1);
  }

  // Pagination
  protected page = signal<number>(1);
  protected Math: Math = Math;

  protected changePage(page: number): void {
    this.page.set(page);
  }

  // fav prep filters
  private readonly personalDataService = inject(PersonalSpellData);
  private readonly navbar = viewChild(Navbar);
  private readonly favPrepFilter = (spell: Spell) => {
    const isFavButton = this.navbar()?.favFilter();
    const isPrepButton = this.navbar()?.prepFilter();
    const isFav = this.personalDataService.isSpellFavorited(spell);
    const isPrep = this.personalDataService.isSpellPrepared(spell);

    return (
      (!isFavButton && !isPrepButton) ||
      (isFavButton && isPrepButton && isFav && isPrep) ||
      (isFavButton && !isPrepButton && isFav) ||
      (!isFavButton && isPrepButton && isPrep)
    );
  };
}
