import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FeedComponent } from './feed/feed.component';
import { RecuperarsenhaComponent } from './login/recuperarsenha/recuperarsenha.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { EditarPerfilComponent } from './perfil/editar-perfil/editar-perfil.component';
import { HomeComponent } from './home/home.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { PerdidosComponent } from './feed/perdidos/perdidos.component';
import { EncontradosComponent } from './feed/encontrados/encontrados.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    PerfilComponent,
    FeedComponent,
    RecuperarsenhaComponent,
    SobreNosComponent,
    EditarPerfilComponent,
    HomeComponent,
    AjudaComponent,
    PerdidosComponent,
    EncontradosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
