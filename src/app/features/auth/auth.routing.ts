import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { MembersComponent } from './members.component';
import { AuthGuard } from '../../services/auth.service';
import { SignupComponent } from './signup.component';
import { EmailComponent } from './email.component';

export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }
];
