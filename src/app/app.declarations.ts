import { LoginComponent } from './features/auth/login.component';
import { EmailComponent } from './features/auth/email.component';
import { SignupComponent } from './features/auth/signup.component';
import { MembersComponent } from './features/auth/members.component';

import { SearchComponent } from './features/search/search.component';
import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';

export const APP_DECLARATIONS = [
  DashboardComponent,
  LoginComponent,
  EmailComponent,
  SignupComponent,
  MembersComponent,
  NotFound404Component,
  SearchComponent
];
