import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardRoutes, DashboardComponent } from './dashboard';
import { ListarTarefaComponent, TarefaRoutes } from './tarefas';
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
  { path: 'tarefas', component: ListarTarefaComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
