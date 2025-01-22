import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {MatInput} from '@angular/material/input'


const MaterialModules=[MatLabel, MatFormField, MatInput]


@Component({
  selector: 'app-filter',
  imports: [FormsModule, MaterialModules],
  template: `
    <mat-form-field>
      <mat-label>{{label()}}</mat-label>
      <input matInput type="text" [(ngModel)]='filter' [placeholder]="placeholder()"> 
      <!-- codigo del search con su directiva matInput -->
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  filter = model('')
  label = input<string>('Filter');
  placeholder = input<string>('Ex. name');
}
