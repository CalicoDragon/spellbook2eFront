import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  getSpells(query: String): any {
    return this.http.post(
      this.apiUrl,
      { name: query },
      {
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  getAllSpells(): any {
    return this.http.get(this.apiUrl);
  }
}
