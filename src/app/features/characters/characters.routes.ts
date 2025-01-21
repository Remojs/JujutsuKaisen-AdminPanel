import { Routes } from '@angular/router';

const charactersRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./characters.component').then(m => m.CharactersComponent),
    }
];

export default charactersRoute;