import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,pipe } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('moodle-gamification');
    this.items = this.itemsCollection.valueChanges();
  }
  getTodos():Observable<any>{
    return this.items;
  }
  // getMetaTodos():Observable<any>{
  //   this.items=this.itemsCollection.snapshotChanges().pipe(
  //     map((actions:any) => actions.map((
  //       (a:any) => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;
  //         return {id ,...data}
  //       }
  //     )))
  //   );
  //   return this.items
  // }




}
