import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from './../Usuarios/usuario';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  userCadastro : Usuario = {};

  constructor() { }

  ngOnInit(): void {
  }

}
