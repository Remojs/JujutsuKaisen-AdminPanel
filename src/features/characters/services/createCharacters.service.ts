import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/characters.model';
import { environment } from '@envs/environment.development';


@Injectable({
  providedIn: 'root'
})
export class createCharactersService {
    private baseUrl = environment.apiUrl;
    private charactersUrl = `${this.baseUrl}/characters`;

  constructor(private http: HttpClient) {}

  createCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.charactersUrl, character);
  }
}
