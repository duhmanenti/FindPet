import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from 'rxjs/operators';

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
  sair(){
    return this.afAuth.signOut();
  }
  recuperarsenha(user : User){
    return this.afAuth.sendPasswordResetEmail(user.email!);
  }

  getAuth(){
    return this.afAuth;
 }

  isAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }
}
