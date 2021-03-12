import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

import { User } from '../usuario/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth:AngularFireAuth) { }

  login(user:User){
    return this.afAuth.signInWithEmailAndPassword(user.email!,user.senha!)

  }
  cadastro(user:User){
    return this.afAuth.createUserWithEmailAndPassword(user.email!, user.senha!);

  }


}
