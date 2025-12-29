import { Routes } from '@angular/router';
import { Home } from './public/home/home';
import { Guide } from './public/guide/guide';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'guide',
    component: Guide,
  },
];
