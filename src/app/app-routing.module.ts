import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjudaComponent } from './ajuda/ajuda.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EncontradosComponent } from './feed/encontrados/encontrados.component';
import { FeedComponent } from './feed/feed.component';
import { PerdidosComponent } from './feed/perdidos/perdidos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecuperarsenhaComponent } from './login/recuperarsenha/recuperarsenha.component';
import { EditarPerfilComponent } from './perfil/editar-perfil/editar-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'recuperar-senha', component:RecuperarsenhaComponent},
  {path: 'sobre-nos', component:SobreNosComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'editar-perfil', component:EditarPerfilComponent},
  {path: 'feed', component:FeedComponent},
  {path: 'ajuda', component:AjudaComponent},
  {path: 'perdidos', component: PerdidosComponent},
  {path: 'encontrados', component: EncontradosComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
