import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../usuario/user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosCollection:AngularFirestoreCollection<User>;

  constructor(private afs:AngularFirestore) {
    this.usuariosCollection = this.afs.collection<User>('Usuarios');
   }

   getUsuarios(user:User){
     return this.usuariosCollection.snapshotChanges().pipe(
       map(actions => {
         return actions.map(a => {
           const data =a.payload.doc.data() as User;
           const id = a.payload.doc.id;
           return {id, ...data};
         });
       })
       )

   }

   getUsuario(id : string){
    return this.usuariosCollection.doc<User>(id).valueChanges();
  }
}
