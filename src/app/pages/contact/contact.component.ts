import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompleteSnackComponent } from 'src/app/components/re-use/complete-snack/complete-snack.component';
import { ErrorSnackComponent } from 'src/app/components/re-use/error-snack/error-snack.component';
import { IncompleteSnackComponent } from 'src/app/components/re-use/incomplete-snack/incomplete-snack.component';
import { ContactFormModel } from 'src/app/models/contact-form.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactFormModel: ContactFormModel = new ContactFormModel();
  isLoading: boolean = false;
  typeAlert: string = '';
  durationInSeconds = 3;
  
  constructor(  private fireService: FirestoreService,
                private _snackBar: MatSnackBar,
                public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  sendContactForm(form: NgForm){ 
    if(form.invalid){ 
      this.typeAlert = 'incomplete' 
      this.openSnackAlert(this.typeAlert);
      return 
    }

    this.isLoading = true;

    this.fireService.createDataContactForm(this.contactFormModel).then( (resp)=>{
      this.typeAlert = 'correct' 
      this.isLoading = false;  
      this.openSnackAlert(this.typeAlert);
      this.dialog.closeAll();

    }).catch( (error) =>{
      console.error('error:', error);
      this.typeAlert = 'error' 
      this.isLoading = false;  
      this.openSnackAlert(this.typeAlert);
      
    });
  }

  openSnackAlert( paramSnack: string){
    
    switch(paramSnack) {

      case 'incomplete' :
        this._snackBar.openFromComponent(IncompleteSnackComponent, {
          verticalPosition: 'bottom',
          duration: this.durationInSeconds * 1000
        });
      break;

      case 'correct' :
        this._snackBar.openFromComponent(CompleteSnackComponent, {
          verticalPosition: 'bottom',
          duration: this.durationInSeconds * 1000
        });
      break;

      case 'error' :
        this._snackBar.openFromComponent(ErrorSnackComponent, {
          verticalPosition: 'bottom',
          duration: this.durationInSeconds * 1000
        });
      break;

    }
  }

  // saveDataManually(){

  //   let sendObject = {
  //     "data": [
  //       {
  //           "id": "1",
  //           "isNew": true,
  //           "isReady": false,
  //           "image": "https://i.ibb.co/fD1KsMZ/portrait-teques.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Tequesquitengo",
  //           "location": "Morelos",
  //           "costPrev": "819,400",
  //           "costNew": "765,000",
  //           "contactPhone": "5522542000",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "2",
  //           "isNew": true,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/56/30/61/38/1200x1200/128644638.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Casa Carrara Plus",
  //           "location": "CDMX",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "3",
  //           "isNew": false,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/resize/18/00/51/21/45/86/1200x1200/41230398.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "La Asuncion Metepec",
  //           "location": "Edo. de México",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "11",
  //           "isNew": true,
  //           "isReady": false,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/52/74/82/14/1200x1200/72901682.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Bakeira Condado Del Valle",
  //           "location": "Toluca",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "22",
  //           "isNew": true,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/56/30/61/38/1200x1200/128644638.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Casa Carrara Plus",
  //           "location": "CDMX",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "33",
  //           "isNew": false,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/resize/18/00/51/21/45/86/1200x1200/41230398.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "La Asuncion Metepec",
  //           "location": "Edo. de México",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "111",
  //           "isNew": true,
  //           "isReady": false,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/52/74/82/14/1200x1200/72901682.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Bakeira Condado Del Valle",
  //           "location": "Toluca",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "222",
  //           "isNew": true,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/56/30/61/38/1200x1200/128644638.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Casa Carrara Plus",
  //           "location": "CDMX",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "333",
  //           "isNew": false,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/resize/18/00/51/21/45/86/1200x1200/41230398.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "La Asuncion Metepec",
  //           "location": "Edo. de México",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //         "id": "1",
  //         "isNew": true,
  //         "isReady": false,
  //         "image": "https://i.ibb.co/fD1KsMZ/portrait-teques.jpg",
  //         "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //         "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //         "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //         "name": "Tequesquitengo",
  //         "location": "Morelos",
  //         "costPrev": "819,400",
  //         "costNew": "765,000",
  //         "contactPhone": "5522542000",
  //         "price": "819,400",
  //         "title": "¡Gran oportunidad!",
  //         "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "2",
  //           "isNew": true,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/56/30/61/38/1200x1200/128644638.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Casa Carrara Plus",
  //           "location": "CDMX",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "3",
  //           "isNew": false,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/resize/18/00/51/21/45/86/1200x1200/41230398.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "La Asuncion Metepec",
  //           "location": "Edo. de México",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "11",
  //           "isNew": true,
  //           "isReady": false,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/52/74/82/14/1200x1200/72901682.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Bakeira Condado Del Valle",
  //           "location": "Toluca",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "22",
  //           "isNew": true,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/56/30/61/38/1200x1200/128644638.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Casa Carrara Plus",
  //           "location": "CDMX",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "33",
  //           "isNew": false,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/resize/18/00/51/21/45/86/1200x1200/41230398.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "La Asuncion Metepec",
  //           "location": "Edo. de México",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "111",
  //           "isNew": true,
  //           "isReady": false,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/52/74/82/14/1200x1200/72901682.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Bakeira Condado Del Valle",
  //           "location": "Toluca",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "222",
  //           "isNew": true,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/18/00/56/30/61/38/1200x1200/128644638.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "Casa Carrara Plus",
  //           "location": "CDMX",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       },
  //       {
  //           "id": "333",
  //           "isNew": false,
  //           "isReady": true,
  //           "image": "https://img10.naventcdn.com/avisos/resize/18/00/51/21/45/86/1200x1200/41230398.jpg",
  //           "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
  //           "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
  //           "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
  //           "name": "La Asuncion Metepec",
  //           "location": "Edo. de México",
  //           "costPrev": "2,100,000",
  //           "costNew": "1,700,000",
  //           "contactPhone": "7225595400",
  //           "price": "819,400",
  //           "title": "¡Gran oportunidad!",
  //           "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
  //       }
  //     ]
  //   }

  //   this.fireService.manuallyUpload(sendObject).then( (resp)=>{
  //     console.log('resp', resp);   
  //   }).catch( (error) =>{
  //     console.error('error:', error);      
  //   });
  // }

}
