import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { AddUsuarioComponent } from './add-usuario';
import { UsuarioListComponent } from './usuario-list';
import { EditUsuarioComponent } from './edit-usuario';
import { SignInComponent } from './sign-in';
import { SignUpComponent } from './sign-up';
import { ForgotPasswordComponent } from './forgot-password';
import { VerifyEmailComponent } from './verify-email';

// route guard
import { AuthGuard } from './shared';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'registrar-usuario', component: AddUsuarioComponent,  canActivate: [AuthGuard] },
  { path: 'ver-usuario', component: UsuarioListComponent, canActivate: [AuthGuard]  },
  { path: 'editar-usuario/:id', component: EditUsuarioComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}