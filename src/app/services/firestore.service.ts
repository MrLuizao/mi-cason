import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ContactFormModel } from '../models/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore ) { }

  getDataComplete(path: any){
    return this.firestore.collection(path).valueChanges();
  }

  createDataContactForm( dataForm: ContactFormModel){
    
    const CONTACT_FORM = {...dataForm};  
    
    return this.firestore.collection('contact-form').add( CONTACT_FORM )

  }

  addItemToCollection( newObject: any){
    return this.firestore.collection('data-complete').doc('7gkMf4t4XQYEbDqHqjDS').set( newObject )
  }

  singleManuallyUpdate(){
    // const OBJECT_UPLOAD = {...object};  
    return this.firestore.collection('data-complete').doc('7gkMf4t4XQYEbDqHqjDS').update(
      
        {
          "amenities": {
      
            "Terraza": true,
            "Caseta de vigilancia": true,            
            "Áreas Verdes": true,
            "Alberca": true,
            "Palapa": true,
            "Cancha": true,
            "Área Infantil": true,
            "Aquazona": true,
            "Gym Exterior": true,
            "Asadores": true,
            "Zona Pet": true,
            "Ciclovías": true
          }
        }
      
    )
  }

}
