import { Routes } from '@angular/router';

const affiliationRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./affiliation.component').then(m => m.AffiliationComponent),
    }
];

export default affiliationRoute;