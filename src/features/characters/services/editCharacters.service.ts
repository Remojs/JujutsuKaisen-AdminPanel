import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/characters.model';
import { environment } from '@envs/environment.development';

@Injectable({
  providedIn: 'root'
})
export class editCharactersService {
  private baseUrl = environment.apiUrl; // URL base de la API
  private charactersUrl = `${this.baseUrl}/characters`;

  constructor(private http: HttpClient) {}

  editCharacter(id: number, character: Partial<Character>): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.put<Character>(url, character);
  }
}
