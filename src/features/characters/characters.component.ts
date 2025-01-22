import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CharactersService} from '@features/characters/services/characters.service';
import { deleteCharactersService } from '@features/characters/services/deleteCharacters.service';
import { Character } from '@features/characters/models/characters.model';
import { GridComponent } from '@components/grid/grid.component';
import { map, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [GridComponent, AsyncPipe, NgIf, MatProgressSpinnerModule],
  template: `
    <section *ngIf="charactersData | async as characters">
      <app-grid 
      [displayedColumns]="displayedColumns" 
      [data]="characters" 
      (deleteCharacter)="onDeleteCharacter($event)"
      />
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

  constructor(
    private deleteCharactersService: deleteCharactersService,
    private snackBar: MatSnackBar
  ) {}

  onDeleteCharacter(id: number): void {
    if (confirm('Are you sure you want to delete this character?')) {
      this.deleteCharactersService.deleteCharacter(id).subscribe(
        () => {
          // Recargar la lista de personajes después de eliminar
          this.snackBar.open('Character deleted successfully', 'Close', { duration: 3000 });
          this.ngOnInit(); // Recargar los personajes después de eliminar
        },
        (error) => {
          console.error('Error deleting character', error);
          this.snackBar.open('Error deleting character', 'Close', { duration: 3000 });
        }
      );
    }
  }
}
