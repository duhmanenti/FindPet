import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth} from "@angular/fire/auth";

import { User } from '../usuario/user';
import { AuthService } from '../servicos/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  public userCadastro: User = {};
  mensagemErro : string = "";

  constructor(
    public router: Router,
    public authService:AuthService,
    public afAuth:AngularFireAuth,
    public afs:AngularFirestore
    ) { }

  ngOnInit(): void {
  }

  async cadastro(){
    try{
      const novoUsuario = await this.authService.cadastro(this.userCadastro).then(
        (success) => {this.router.navigate(['/feed'])});
    }catch(error){
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.mensagemErro = "E-mail Já Cadastrado!";
        break;
        case 'auth/invalid-email':
          this.mensagemErro = "E-mail Inválido!";
        break;
      }
    }
  }
}