import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spell } from '../models/spell-model';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/';

  getSpells(query: string): Observable<Spell[]> {
    return this.http.post<Spell[]>(
      this.apiUrl,
      { query },
      { headers: { 'Content-Type': 'application/json' } },
    );
  }

  getAllSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(this.apiUrl);
  }
}
