import { reactiveRoutes } from './reactive/reactive.routes';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.routes').then((m) => m.reactiveRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes') //mas corto porque si se exporta as default
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes').then((m) => m.countryRoutes), //mas corto porque si se exporta as default
  },
  {
    path:'**',
    redirectTo: 'reactive'
  }
];
