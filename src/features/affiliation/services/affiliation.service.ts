import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Affiliation } from '../models/affiliation.model';
import { environment } from '@envs/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AffiliationService {

  private baseUrl = environment.apiUrl;
  private charactersUrl = `${this.baseUrl}/affiliations`;

  constructor(private http: HttpClient) {}

  getAffiliations(): Observable<Affiliation[]> {
    return this.http.get<Affiliation[]>(this.charactersUrl).pipe(
      map((characters) =>
        characters.map((char) => ({
          id: char.id,
          affiliationName: char.affiliationName,
          type: char.type || null,
          location: char.location,
          controlledBy: char.controlledBy,
        }))
      )
    );
  }

  getCharacterInformation(id: number): Observable<Affiliation> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.get<Affiliation>(url);
  }

  // Método para eliminar una afiliación
  deleteAffiliation(id: number): Observable<void> {
    const url = `${this.charactersUrl}/${id}`;
    return this.http.delete<void>(url); // Aquí usamos DELETE con el id
  }
}
