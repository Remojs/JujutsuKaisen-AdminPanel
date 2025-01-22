import { Routes } from '@angular/router';

const charactersRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./characters.component').then(m => m.CharactersComponent),
    },
    {
        path: 'create',
        loadComponent: () => import('./components/characters-form/characters-form.component').then(m => m.CharacterFormComponent),
    },
    {
        path: ':id',
        loadComponent: () => import('./components/character-detail/character-detail.component').then(m => m.CharacterDetailComponent),
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./components/character-edit/character-edit.component').then(m => m.EditCharacterComponent),
    }
];

export default charactersRoute;