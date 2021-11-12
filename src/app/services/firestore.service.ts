import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ContactFormModel } from '../models/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore ) { }

  getDataByGroups(path: any){

    return this.firestore.collection(path).valueChanges();

  }

  createDataContactForm( dataForm: ContactFormModel){
    
    const CONTACT_FORM = {...dataForm};  
    
    return this.firestore.collection('contact-form').add( CONTACT_FORM )

  }


  manuallyUpload( object: any){

    const OBJECT_UPLOAD = {...object};  
    
    return this.firestore.collection('data-complete').add( OBJECT_UPLOAD )

  }


}
