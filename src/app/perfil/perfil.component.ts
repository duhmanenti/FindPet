import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../servicos/auth.service';
import { UsuarioService } from '../servicos/usuario.service';
import { User } from '../usuario/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario : User = {};
  userId!: string;
  userSubscription!: Subscription;
  imgSubscription!: Subscription;
  entrarSair!: boolean;
  servicosSubscription!: Subscription;
   
   constructor(
     public afs : AngularFirestore, 
     public afAuth : AngularFireAuth,
     public storage : AngularFireStorage,
     public router : Router,
     public loginService : AuthService,
     public usuarioService : UsuarioService,
     public active : ActivatedRoute
     ) { }
 
   ngOnInit() {
     if(this.afAuth.currentUser != null){
       this.entrarSair = true;
     }else this.entrarSair = false;
  
     this.userSubscription = this.usuarioService.getUsuario(this.userId).subscribe(data => {
       this.usuario = data!; 
     });
     this.imgSubscription = this.storage.ref('Usuarios/' + this.userId + '/fotoPerfil.jpg').getDownloadURL().subscribe(data => {
       this.usuario.foto = data;
     });
   }
 
   ngOnDestroy(){ 
     this.userSubscription.unsubscribe();
     this.servicosSubscription.unsubscribe();
   }

   async sair(){
     try{
       await this.loginService.sair().then(
         (success) => {this.router.navigate(['/home'])});
      }catch(error){
        console.error(error);
     }
   }
 
 }