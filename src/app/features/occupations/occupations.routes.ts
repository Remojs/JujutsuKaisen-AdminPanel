import { Routes } from '@angular/router';

const occupationsRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./occupations.component').then(m => m.OccupationsComponent),
    }
];

export default occupationsRoute;