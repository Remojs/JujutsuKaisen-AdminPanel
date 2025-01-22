import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@envs/environment.development';

@Injectable({
  providedIn: 'root'
})
export class deleteCharactersService {
  private baseUrl = environment.apiUrl;
  private charactersUrl = `${this.baseUrl}/characters`;

  constructor(private http: HttpClient) {}

  deleteCharacter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.charactersUrl}/${id}`);
  }
}