import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicos/auth.service';
import { User } from 'src/app/usuario/user';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.component.html',
  styleUrls: ['./recuperarsenha.component.css']
})
export class RecuperarsenhaComponent implements OnInit {
  userLogin : User = {};

  constructor(
    public login: AuthService,
    public router : Router,
    public afAuth : AngularFireAuth,
  ) { }

  ngOnInit():void {    
  }

  recuperarsenha(){
    try { 
       this.afAuth.sendPasswordResetEmail(this.userLogin.email!).then((success) =>{
        alert("O e-mail de recuperação de senha foi enviado!");
       });
    } catch (error) { 
      console.error(error); 
    }
  }

}
