import { Component, OnInit, inject } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { detailCharactersService } from '@features/characters/services/detailCharacters.service';
import { Character } from '@features/characters/models/characters.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section *ngIf="isLoading; else contentTemplate">
      <p>Loading character details...</p>
    </section>

    <ng-template #contentTemplate>
      <section *ngIf="character; else errorTemplate">
        <h2>{{ character.name }}</h2>
        <p><strong>Alias:</strong> {{ character.alias || 'N/A' }}</p>
        <p><strong>Species:</strong> {{ character.species }}</p>
        <p><strong>Birthday:</strong> {{ character.birthday }}</p>
        <p><strong>Height:</strong> {{ character.height }} m</p>
        <p><strong>Weight:</strong> {{ character.weight }} kg</p>
        <p><strong>Age:</strong> {{ character.age }}</p>
        <p><strong>Gender:</strong> {{ character.gender }}</p>
        <p><strong>Anime Debut:</strong> {{ character.animeDebut }}</p>
        <p><strong>Manga Debut:</strong> {{ character.mangaDebut }}</p>
        <p><strong>Affiliation:</strong> {{ character.affilation.affiliationName }}</p>
        <p><strong>Occupation:</strong> {{ character.occupation.occupationName }}</p> 
        <p><strong>Grade:</strong> {{ character.grade.gradeLevel }}</p>
      </section>
    </ng-template>

    <ng-template #errorTemplate>
      <p>Error: Character details could not be loaded.</p>
    </ng-template>
  `,
  styles: [],
})
export class CharacterDetailComponent implements OnInit {
  private detailCharactersService = inject(detailCharactersService);
  public character?: Character;
  public isLoading = true;
  public hasError = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
  
      if (isNaN(id) || id <= 0) {
        console.error('Invalid character ID');
        this.isLoading = false;
        this.hasError = true;
        return;
      }
  
      this.loadCharacterDetails(id);
    });
  }
  
  private loadCharacterDetails(id: number) {
    this.isLoading = true;
    this.hasError = false;
  
    this.detailCharactersService.getCharacterInformation(id).subscribe(
      (data) => {
        if (data) {
          this.character = data;
        } else {
          console.error('Character not found');
          this.hasError = true;
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error loading character details:', error);
        this.hasError = true;
        this.isLoading = false;
      }
    );
  }
}
