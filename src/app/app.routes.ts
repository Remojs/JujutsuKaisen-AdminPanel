import { Routes } from '@angular/router';
import { NotfoundComponent } from '@components/notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full' }, // Redirige al listado de personajes por defecto
    { path: 'characters', loadChildren: () => import('@features/characters/characters.routes') }, // Módulo de personajes
    { path: 'affiliations', loadChildren: () => import('@features/affiliation/affiliation.routes') }, // Módulo de afiliaciones
    { path: 'occupations', loadChildren: () => import('@features/occupations/occupations.routes') }, // Módulo de ocupaciones
    { path: 'grades', loadChildren: () => import('@features/grades/grades.routes') }, // Módulo de grados
    { path: 'cursed-techniques', loadChildren: () => import('@features/cursed-techniques/cursed-techniques.routes') }, // Módulo de técnicas malditas

    { path: 'notfound', component: NotfoundComponent, data: { message: 'Page Not Found' } }, // Página de error 404 personalizada
    { path: '**', redirectTo: '/notfound' } // Redirige al componente 404

];