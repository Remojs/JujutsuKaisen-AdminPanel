import { Component, output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

const MaterialModules = [
  MatToolbarModule, MatIconModule, MatButtonModule
]

@Component({
  selector: 'app-toolbar',
  imports: [MaterialModules, RouterModule,],
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/">
        <mat-icon>person</mat-icon>
        <span>Characters</span>
      </a>
      <a mat-button routerLink="/cursed-techniques">
        <mat-icon>star</mat-icon>
        <span>Cursed Techniques</span>
      </a>
      <a mat-button routerLink="/occupations">
        <mat-icon>work</mat-icon>
        <span>Occupations</span>
      </a>
      <a mat-button routerLink="/affiliations">
        <mat-icon>groups</mat-icon>
        <span>Affiliations</span>
      </a>
      <a mat-button routerLink="/grades">
        <mat-icon>whatshot</mat-icon>
        <span>Grades</span>
      </a>
      <span class='spacer'></span>
      <a mat-button routerLink="/characters/create">
        <mat-icon>add_box</mat-icon>
        <span>Add</span>
      </a>
    </mat-toolbar>
`,
  styles: ``
})
export class ToolbarComponent {

}
