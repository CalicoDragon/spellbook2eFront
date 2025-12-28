import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'http://localhost:3000/api/500';

  constructor(private http: HttpClient) {}

  getSpells(): any {
    return this.http.get(this.apiUrl);
  }
}
