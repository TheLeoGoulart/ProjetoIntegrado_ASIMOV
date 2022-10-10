import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { AddUsuarioComponent } from './add-usuario';
import { UsuarioListComponent } from './usuario-list';
import { EditSkateComponent } from './edit-skate';
import { AddSkateComponent } from './add-skate';
import { SkateListComponent } from './skate-list';
import { EditUsuarioComponent } from './edit-usuario';
import { SignInComponent } from './sign-in';
import { ForgotPasswordComponent } from './forgot-password';
import { VerifyEmailComponent } from './verify-email';
import { ClienteComponent } from './cliente/cliente.component';

// route guard
import { AuthGuard } from './shared';

const routes: Routes = [
  { path: '', redirectTo: '/ver-skate', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'registrar-usuario', component: AddUsuarioComponent,  canActivate: [AuthGuard] },
  { path: 'ver-usuario', component: UsuarioListComponent, canActivate: [AuthGuard]  },
  { path: 'editar-usuario/:id', component: EditUsuarioComponent, canActivate: [AuthGuard]  },
  { path: 'registrar-skate', component: AddSkateComponent,  canActivate: [AuthGuard] },
  { path: 'ver-skate', component: SkateListComponent, canActivate: [AuthGuard]  },
  { path: 'editar-skate/:id', component: EditSkateComponent, canActivate: [AuthGuard]  },
  { path: 'cliente', component: ClienteComponent,  },
];

@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}