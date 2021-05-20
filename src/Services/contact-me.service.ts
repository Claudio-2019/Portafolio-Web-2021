import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContactMeModel } from "src/Models/ContactMe";

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

  constructor(private FirestoreAccess:AngularFirestore) { }

  CreatePost(Request:ContactMeModel){
    return this.FirestoreAccess.collection('requestFromPortafolio').add(Request);
  }
}
