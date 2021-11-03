import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormModel } from 'src/app/models/contact-form.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.css']
})
export class DialogContactComponent implements OnInit {

  contactFormModel: ContactFormModel = new ContactFormModel();

  constructor( private fireService: FirestoreService) { }

  ngOnInit(): void {
  }

  sendContactForm(form: NgForm){   
    if(form.invalid){ return }
    // console.log('form', form);
    // console.log('contactForm', this.contactFormModel);

    this.fireService.createDataContactForm(this.contactFormModel).then( (resp)=>{
      console.log('resp',resp);    
    }).catch( (error) =>{
      console.log('error:', error);
    });
  }

}
