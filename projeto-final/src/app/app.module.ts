import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { SignInComponent } from './sign-in';
import { SignUpComponent } from './sign-up';
import { ForgotPasswordComponent } from './forgot-password';
import { VerifyEmailComponent } from './verify-email';

import { AuthService } from "./shared/services/auth.service"
import { ReactiveFormsModule } from '@angular/forms';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { AddSkateComponent } from './add-skate/add-skate.component';
import { EditSkateComponent } from './edit-skate/edit-skate.component';
import { SkateListComponent } from './skate-list/skate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AddUsuarioComponent,
    EditUsuarioComponent,
    UsuarioListComponent,
    AddSkateComponent,
    EditSkateComponent,
    SkateListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }