import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { map, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Affiliation } from './models/affiliation.model';
import { AffiliationService } from './services/affiliation.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [GridComponent, AsyncPipe, NgIf, MatProgressSpinnerModule],
  template: `
    <section *ngIf="affiliationData | async as affiliations">
      <app-grid 
        [displayedColumns]="displayedColumns" 
        [data]="affiliations" 
        (deleteCharacter)="onDeleteCharacter($event)"
      />
    </section>
    <p *ngIf="!(affiliationData | async)" class="center">
      <mat-progress-spinner mode="indeterminate" diameter="50"></mat-progress-spinner>
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AffiliationComponent implements OnInit {
  private affiliationService = inject(AffiliationService);

  displayedColumns = ['id', 'affiliationName', 'type', 'location', 'controlledBy', 'action'];
  affiliationData!: Observable<Affiliation[]>; // Se cambió a 'affiliationData'

  ngOnInit() {
    this.affiliationData = this.affiliationService.getAffiliations().pipe(
      map((affiliations: Affiliation[]) => {
        console.log('Datos recibidos:', affiliations);  // Verifica qué datos llegan
        return affiliations.map((aff) => ({
          id: aff.id,
          affiliationName: aff.affiliationName,
          type: aff.type,
          location: aff.location,
          controlledBy: aff.controlledBy,
        }));
      })
    );
  }

  onDeleteCharacter(id: number): void {}
}
