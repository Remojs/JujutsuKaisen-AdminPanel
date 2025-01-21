import { Routes } from '@angular/router';

const gradesRoute: Routes = [
    {
        path: '',
        loadComponent: () => import('./grades.component').then(m => m.GradesComponent),
    }
];

export default gradesRoute;