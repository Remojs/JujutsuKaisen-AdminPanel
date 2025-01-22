import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CharactersService } from '@features/characters/services/characters.service';
import { Character } from '@features/characters/models/characters.model';
import { GridComponent } from '@components/grid/grid.component';
import { map, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [GridComponent, AsyncPipe, NgIf, MatProgressSpinnerModule],
  template: `
    <section *ngIf="charactersData | async as characters">
      <app-grid [displayedColumns]="displayedColumns" [data]="characters" />
    </section>
    <p *ngIf="!(charactersData | async)" class="center"><mat-progress-spinner mode="indeterminate" diameter="50"></mat-progress-spinner></p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {
  private charactersService = inject(CharactersService);

  displayedColumns = ['id', 'name', 'species', 'age', 'gender', 'affiliation', 'occupation', 'grade', 'action'];
  charactersData!: Observable<any[]>; // Marcamos como no null con `!`

  ngOnInit() {
    this.charactersData = this.charactersService.getCharacters().pipe(
      map((characters: Character[]) => {
        console.log('Datos recibidos:', characters);  // Verifica qué datos llegan
        return characters.map((char) => ({
          id: char.id,
          name: char.name,
          species: char.species,
          age: char.age,
          gender: char.gender,
          affiliation: char.affilation?.affiliationName,
          occupation: char.occupation?.occupationName,
          grade: char.grade?.gradeLevel,
        }));
      })
    );
  }
}
