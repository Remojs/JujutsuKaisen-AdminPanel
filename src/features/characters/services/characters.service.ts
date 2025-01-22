import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from '@features/characters/models/characters.model';
import { environment } from '@envs/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  private baseUrl = environment.apiUrl;
  private charactersUrl = `${this.baseUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl).pipe(
      map((characters) =>
        characters.map((char) => ({
          id: char.id,
          name: char.name,
          alias: char.alias || null,
          species: char.species,
          birthday: char.birthday,
          height: char.height,
          weight: char.weight,
          age: char.age,
          gender: char.gender,
          animeDebut: char.animeDebut,
          mangaDebut: char.mangaDebut,
          affilation: char.affilation,
          occupation: char.occupation,
          grade: char.grade,
        }))
      )
    );
  }
  getCharacterInformation(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get<Character>(url);
  }
}
