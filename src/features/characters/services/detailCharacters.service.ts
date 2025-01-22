import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '@features/characters/models/characters.model';
import { environment } from '@envs/environment.development';

@Injectable({
  providedIn: 'root',
})
export class detailCharactersService {

  private baseUrl = environment.apiUrl;
  private charactersUrl = `${this.baseUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl);
  }

  getCharacterInformation(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get<Character>(url);
  }
}