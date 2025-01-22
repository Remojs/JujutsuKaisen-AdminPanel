import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { CharactersComponent } from "../features/characters/characters.component";

const MaterialModules=[MatCardModule]
const Components=[ToolbarComponent]
// const Features=[CharactersComponent]

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModules, Components ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onClickNewCharacter(): void{
    console.log('Works!')
  }
}
