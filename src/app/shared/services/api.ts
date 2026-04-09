import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getSpells(query: string): Observable<Object> {
    return this.http.post(
      this.apiUrl,
      { query },
      { headers: { 'Content-Type': 'application/json' } },
    );
    // .pipe(
    //   map((data) => ({ state: 'success', data })),
    //   catchError((error) => of({ state: 'error', error })),
    //   startWith({ state: 'loading' }),
    // );
  }

  getAllSpells(): Observable<Object> {
    return this.http.get(this.apiUrl);
    // .pipe(
    //   map((data) => ({ state: 'success', data })),
    //   catchError((error) => of({ state: 'error', error })),
    //   startWith({ state: 'loading' }),
    // );
  }
}
