import { Routes } from '@angular/router';

const charactersRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./characters.component').then(m => m.CharactersComponent),
    },
    {
        path: 'create',
        loadComponent: () => import('./components/characters-form/characters-form.component').then(m => m.CharacterFormComponent),
    }
];

export default charactersRoute;