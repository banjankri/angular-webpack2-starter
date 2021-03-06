/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';

import { authRoutes } from './features/auth/auth.routing';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  ...authRoutes,
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
  { path: 'search', loadChildren: './features/search/index#ActivitiesListModule' },
  { path: 'details', loadChildren: './features/plant/index#PlantDetailsModule' },
  { path: '**', component: NotFound404Component }
];
