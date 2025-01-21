import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { MatCardModule } from '@angular/material/card';

const MaterialModules=[MatCardModule]

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, MaterialModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onClickNewCharacter(): void{
    console.log('Works!')
  }
}
