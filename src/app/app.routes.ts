import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/components/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallPageComponent } from './pages/dragonball/dragonball-page.components';

export const routes: Routes = [


  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragonBallPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }


];
