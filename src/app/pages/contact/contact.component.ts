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

  saveDataManually(){

    let sendObject = {
      "data": [
        {
          "id": "1",
          "isNew": true,
          "isReady": true,
          "image": "https://i.ibb.co/6rdW9gP/portrait-terraverde.jpg",
          "image2": "https://i.ibb.co/g7dYLdC/IMG-7959.jpg",
          "image3": "https://i.ibb.co/b2Yqj6L/IMG-7965.jpg",
          "image4": "https://i.ibb.co/GnVNwHc/IMG-7971.jpg",
          "name": "Terraverde Tarango",
          "zone": "CDMX",
          "ubication": "PROLONGACIÓN 5 DE MAYO No. 2081, COL. EX HACIENDA TARANGO, ALVARO OBREGON",
          "costPrev": "3,949,200",
          "costNew": "3,291,000",
          "contactPhone": "5522542000",
          "price": "3,291,000",
          "title": "SKY PARK con exclusivas amenidades.",
          "description": "DEPARTAMENTO DE 3 RECÁMARAS, 2  BAÑOS CON MÚLTIPLES AMENIDADES."
        },
        {
          "id": "2",
          "isNew": true,
          "isReady": false,
          "image": "https://i.ibb.co/fD1KsMZ/portrait-teques.jpg",
          "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
          "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
          "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
          "name": "Tequesquitengo",
          "zone": "Morelos",
          "ubication": "Tequesquitengo, Morelos.",
          "costPrev": "819,400",
          "costNew": "765,000",
          "contactPhone": "5522542000",
          "price": "819,400",
          "title": "¡Gran oportunidad!",
          "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado."
        },
        {
          "id": "3",
          "isNew": false,
          "isReady": true,
          "image": "https://i.ibb.co/SxSkLzb/portrait-lasflores.jpg",
          "image2": "https://i.ibb.co/SR7WvDQ/LAS-FLORES-INT-ESTANCIA.jpg",
          "image3": "https://i.ibb.co/SR2m3Zd/FOTO-ALBERCA.jpg",
          "image4": "https://i.ibb.co/rygsKjh/LAS-FLORES-INT-COCINA.jpg",
          "name": "Las Flores",
          "zone": "Morelos",
          "ubication": "AUTOPISTA LA PERA-CUAUTLA KM 22.7, OACALCO, MORELOS.",
          "costPrev": "1,320,000",
          "costNew": "1,100,000",
          "contactPhone": "5522542000",
          "price": "819,400",
          "title": "PALAPA, ALBERCA Y JARDINES",
          "description": "CASAS DE 2 ö 3 RECÁMARAS, 3 BAÑOS COMPLETOS, 46 VIVIENDAS POR CLÚSTERMÁXIM, 45% DE ÁREAS VERDES, ÁREAS COMERCIALES, RECREATIVAS Y DEPORTIVAS."    
        },
        {
          "id": "11",
          "isNew": true,
          "isReady": false,
          "image": "https://i.ibb.co/YBPVvF6/gardenia-portrait.jpg",
          "image2": "https://i.ibb.co/HLcZRJN/PHOTO-2021-11-12-11-25-57.jpg",
          "image3": "https://i.ibb.co/wS4YYqD/PHOTO-2021-11-12-11-25-57-1.jpg",
          "image4": "https://i.ibb.co/ggfkK6S/PHOTO-2021-11-12-11-25-58-1.jpg",
          "name": "Las Huertas",
          "zone": "Morelos",
          "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
          "costPrev": "1,666,308",
          "costNew": "1,388,590",
          "price": "819,400",
          "title": "Modelo Gardenia",
          "description": "CASAS DE 2 RECÁMARAS,LA PRINCIPAL CON TERRAZA,  1 Y 1/2  BAÑOS,Y ROOF GARDEN, CON MÚLTIPLES AMENIDADES."
        },
        {
          "id": "22",
          "isNew": true,
          "isReady": true,
          "image": "https://i.ibb.co/4jnB8cV/dalia-portrait.jpg",
          "image2": "https://i.ibb.co/48JgWLP/PHOTO-2021-11-12-11-20-24-2.jpg",
          "image3": "https://i.ibb.co/BGt0PS2/PHOTO-2021-11-12-11-20-24-3.jpg",
          "image4": "https://i.ibb.co/mBMDqyd/PHOTO-2021-11-12-11-20-24.jpg",
          "name": "Las Huertas",
          "zone": "Morelos",
          "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
          "costPrev": "1,547,688",
          "costNew": "1,289,740",
          "price": "819,400",
          "title": "Modelo Dalia",
          "description": "CASAS DE 2 RECÁMARAS,LA PRINCIPAL CON TERRAZA,  1 Y 1/2  BAÑOS,Y ROOF GARDEN, CON MÚLTIPLES AMENIDADES."
        },
        {
          "id": "33",
          "isNew": false,
          "isReady": true,
          "image": "https://i.ibb.co/dBfc9W3/amapola-portrait.jpg",
          "image2": "https://i.ibb.co/7VxZ162/PHOTO-2021-11-12-11-16-32-2.jpg",
          "image3": "https://i.ibb.co/QQsNfV6/PHOTO-2021-11-12-11-16-32-5.jpg",
          "image4": "https://i.ibb.co/z7Zb6tr/PHOTO-2021-11-12-11-16-33.jpg",
          "name": "Las Huertas",
          "zone": "Morelos",
          "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
          "costPrev": "1,479,972",
          "costNew": "1,233,310",
          "price": "819,400",
          "title": "Modelo Amapola",
          "description": "CASAS DE 2 RECÁMARAS, 1 Y 1/2  BAÑOS,CON MÚLTIPLES AMENIDADES."
        },
        {
          "id": "111",
          "isNew": true,
          "isReady": false,
          "image": "https://i.ibb.co/YTJjy3y/azalea-portrait.jpg",
          "image2": "https://i.ibb.co/DLKy6Q4/PHOTO-2021-11-12-11-29-50-5.jpg",
          "image3": "https://i.ibb.co/Wk1rtGM/PHOTO-2021-11-12-11-29-50-4.jpg",
          "image4": "https://i.ibb.co/3CXjqnG/PHOTO-2021-11-12-11-29-50-3.jpg",
          "name": "Las Huertas",
          "zone": "Morelos",
          "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
          "costPrev": "1,728,168",
          "costNew": "1,440,140",
          "price": "819,400",
          "title": "Modelo Azalea",
          "description": "TERRAZA A CUBIERTO, CUARTO DE LAVADO, Y SALA DE TV . INCLUYE COCINA INTEGRAL Y PERSIANAS. ESTACIONAMIENTO PARA VISITAS "
        }
      ]     
    }

    this.fireService.manuallyUpload(sendObject).then( (resp)=>{
      console.log('resp', resp);   
    }).catch( (error) =>{
      console.error('error:', error);      
    });
  }

}
