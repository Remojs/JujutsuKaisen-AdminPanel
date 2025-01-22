import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createCharactersService } from '@features/characters/services/createCharacters.service';
import { Character } from '@features/characters/models/characters.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-characters-form',
  imports: [ReactiveFormsModule],
  templateUrl: './characters-form.component.html',
})
export class CharacterFormComponent implements OnInit {
  characterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private createCharactersService: createCharactersService
  ) {
    this.characterForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      affiliation_id: ['', Validators.required],
      alias: ['', Validators.required],
      animeDebut: ['', Validators.required],
      birthday: ['', Validators.required],
      grade_id: ['', Validators.required], 
      height: ['', Validators.required],
      mangaDebut: ['', Validators.required],
      occupation_id: ['', Validators.required],
      weight: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.characterForm.valid) {
      const characterData: Character = this.characterForm.value;

      this.createCharactersService.createCharacter(characterData).subscribe(
        (response: any) => {
          console.log('Personaje creado', response);
        },
        (error: any) => {
          console.error('Error al crear personaje', error);
        }
      );
    }
  }
}