import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { editCharactersService } from '@features/characters/services/editCharacters.service';
import { Character } from '@features/characters/models/characters.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-character',
  imports: [ReactiveFormsModule], // Importa ReactiveFormsModule para el formulario reactivo
  templateUrl: './character-edit.component.html',
})
export class EditCharacterComponent implements OnInit {
  characterForm: FormGroup; // Formulario reactivo
  characterId: number; // ID del personaje a editar

  constructor(
    private fb: FormBuilder, // Para construir formularios reactivos
    private editCharactersService: editCharactersService, // Servicio para editar personajes
    private route: ActivatedRoute, // Para acceder a parámetros de la ruta
    private router: Router // Para redirigir después de la acción
  ) {
    this.characterId = +this.route.snapshot.paramMap.get('id')!; // Obtiene el ID de la URL
    this.characterForm = this.fb.group({ // Crea el formulario reactivo con validaciones
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

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.characterForm.valid) { // Verifica si el formulario es válido
      const characterData: Partial<Character> = this.characterForm.value; // Toma los valores del formulario

      // Llama al servicio para actualizar el personaje
      this.editCharactersService.editCharacter(this.characterId, characterData).subscribe(
        (response) => {
          console.log('Personaje actualizado', response);
          this.router.navigate(['/characters']); // Redirige a la lista de personajes
        },
        (error) => {
          console.error('Error al actualizar personaje', error); // Maneja errores en la actualización
        }
      );
    }
  }
}
