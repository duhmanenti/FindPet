import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from './../Usuarios/usuario';
<<<<<<< HEAD
=======

>>>>>>> 3351246ecc1aeb32415a39d723e6ce64d3dc2eea

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  userCadastro : Usuario = {};

  userCadastro : Usuario = {};
  constructor() { }

  ngOnInit(): void {
  }

}
