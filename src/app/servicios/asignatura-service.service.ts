import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Asignatura} from '../interfaces/asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private asignaturaCollection: AngularFirestoreCollection<Asignatura>;
  private ListaAsignaturas: Observable<Asignatura[]>;

  constructor(db: AngularFirestore) {

    this.asignaturaCollection = db.collection<Asignatura>('asignaturas');
    this.ListaAsignaturas = this.asignaturaCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ... data};
        });
      })
    );
   }

   getAsignaturas(){
     return this.ListaAsignaturas;
   }

   getAsignatura(id:string){
     return this.asignaturaCollection.doc<Asignatura>(id).valueChanges();
   }

   updateAsignatura(asig:Asignatura, id:string){
     return this.asignaturaCollection.doc(id).update(asig);
   }

   addAsignatura(asig:Asignatura){
     return this.asignaturaCollection.add(asig);
   }

   deleteAsignatura(id:string){
     return this.asignaturaCollection.doc(id).delete();
   }

}
