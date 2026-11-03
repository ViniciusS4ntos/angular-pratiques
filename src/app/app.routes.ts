import { Routes } from '@angular/router';
import { Ola } from './componentes/ola/ola';
import { TelaTeste } from './componentes/tela-teste/tela-teste';

export const routes: Routes = [
    { path: 'ola', component: Ola },
    { path: 'teste-tela', component: TelaTeste },
    { path: 'tela-teste', component: TelaTeste },
];
