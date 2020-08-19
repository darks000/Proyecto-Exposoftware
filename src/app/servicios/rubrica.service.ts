import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Rubrica} from '../interfaces/rubrica';

@Injectable({
  providedIn: 'root'
})

export class RubricaService {

  private RubricaCollection: AngularFirestoreCollection<Rubrica>;
  private ListaRubricas: Observable<Rubrica[]>;

  constructor(db: AngularFirestore) {

    this.RubricaCollection = db.collection<Rubrica>('Rubricas');
    this.ListaRubricas = this.RubricaCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ... data};
        });
      })
    );
   }

   getRubricas(){
     return this.ListaRubricas;
   }

   getRubrica(id:string){
     return this.RubricaCollection.doc<Rubrica>(id).valueChanges();
   }

   updateRubrica(rubric:Rubrica, id:string){
     return this.RubricaCollection.doc(id).update(rubric);
   }

   addRubrica(rubric:Rubrica){
     return this.RubricaCollection.add(rubric);
   }

   deleteRubrica(id:string){
     return this.RubricaCollection.doc(id).delete();
   }

}
