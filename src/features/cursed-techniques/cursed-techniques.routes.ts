import { Routes } from '@angular/router';

const cursedTechniquesRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./cursed-techniques.component').then(m => m.CursedTechniquesComponent),
    }
];

export default cursedTechniquesRoute;