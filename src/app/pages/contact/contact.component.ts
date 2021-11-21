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
                public dialog: MatDialog ) { window.scrollTo(0,0) }

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
      data: [
        {
          "description": "DEPARTAMENTO DE  2 RECÁMARAS CON 2  BAÑOS COMPLETOS, SE ENTREGAN EQUIPADOS, EL DESARROLLO CUENTA CON AMENIDADES.",
          "image3": "https://i.ibb.co/b2Yqj6L/IMG-7965.jpg",
          "zone": "CDMX",
          "name": "Terraverde Tarango",
          "modelName": null,
          "contactPhone": "5574189420",
          "id": "1",
          "price": "3,291,000",
          "image": "https://i.ibb.co/6rdW9gP/portrait-terraverde.jpg",
          "costNew": "3,291,000",
          "isNew": true,
          "image2": "https://i.ibb.co/g7dYLdC/IMG-7959.jpg",
          "ubication": "PROLONGACIÓN 5 DE MAYO No. 2081, COL. EX HACIENDA TARANGO, ALVARO OBREGON",
          "title": "Concepto innovador de extraordinaria arquitectura.",
          "cardSubtitle": "SKY PARK con exclusivas amenidades.",
          "isReady": true,
          "image4": "https://i.ibb.co/GnVNwHc/IMG-7971.jpg",
          "costPrev": "3,949,200",
          "mtsInmueble": "78.9",
          "mtsGround": "VERTICAL",
          "bedrooms": "2",
          "closets": false,
          "kitchen": true,
          "amenities": {
            "Áreas verdes": false,
            "Alberca": false,
            "Palapa": false,
            "Cancha": false,
            "Área infantil": true,
            "Gimnasio": false,
            "Pista de Jogging": false,
            "Cafetería": false,
            "Aquazona": false,
            "Zona Lounge": true,
            "Gym exterior": true,
            "Lúdoteca": true,
            "Asadores": false,
            "Pet zone": true,
            "Vigilancia": true,
          }
        },
        {
          "costNew": "765,000",
          "image": "https://i.ibb.co/1Jn5Mq4/portrait-teques.jpg",
          "contactPhone": "5574189420",
          "cardSubtitle": "El lugar más fresco para ejercer tu crédito",
          "ubication": "Tequesquitengo, Morelos.",
          "modelName": null,
          "isReady": false,
          "costPrev": "819,400",
          "id": "2",
          "isNew": true,
          "zone": "Morelos",
          "title": "Puedes tener tu propio jardín o Roof garden, tú eliges.",
          "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
          "price": "819,400",
          "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado.",
          "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
          "name": "Villas Teques",
          "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
          "mtsInmueble": "61",
          "mtsGround": "89.2",
          "bedrooms": "2",
          "closets": false,
          "kitchen": false,
          "amenities": {
            "Áreas verdes": true,
            "Alberca": true,
            "palapa": true,
            "courts": false,
            "childArea": true,
            "gym": false,
            "joggin": false,
            "coffeBar": false,
            "aquaZone": false,
            "loungeBar": true,
            "gymExterior": false,
            "playroom": false,
            "steakhouse": false,
            "petZone": false,
            "vigilance": false,
          }
        },
        {
          "ubication": "AUTOPISTA LA PERA-CUAUTLA KM 22.7, OACALCO, MORELOS.",
          "costNew": "1,100,000",
          "image3": "https://i.ibb.co/SR2m3Zd/FOTO-ALBERCA.jpg",
          "cardSubtitle": "Deja de buscar, el lugar que siempre has soñado llegó.",
          "price": "819,400",
          "isNew": false,
          "isReady": true,
          "image4": "https://i.ibb.co/rygsKjh/LAS-FLORES-INT-COCINA.jpg",
          "description": "CASAS DE 2 ö 3 RECÁMARAS, 3 BAÑOS COMPLETOS, 46 VIVIENDAS POR CLÚSTERMÁXIM, 45% DE ÁREAS VERDES, ÁREAS COMERCIALES, RECREATIVAS Y DEPORTIVAS.",
          "zone": "Morelos",
          "image2": "https://i.ibb.co/SR7WvDQ/LAS-FLORES-INT-ESTANCIA.jpg",
          "name": "Las Flores",
          "modelName": null,
          "costPrev": "1,320,000",
          "contactPhone": "5633201453",
          "image": "https://i.ibb.co/NNb3k2G/portrait-lasflores.jpg",
          "id": "3",
          "title": "Magia y encanto en tu nueva vivienda.",
          "mtsInmueble": "69",
          "mtsGround": "48.5",
          "bedrooms": "2",
          "closets": false,
          "kitchen": true,
          "amenities": {
            "Áreas verdes": true,
            "Alberca": true,
            "palapa": true,
            "courts": false,
            "childArea": true,
            "gym": false,
            "joggin": false,
            "coffeBar": false,
            "aquaZone": false,
            "loungeBar": false,
            "gymExterior": false,
            "playroom": false,
            "steakhouse": true,
            "petZone": false,
            "vigilance": false,
          }
        },

        {
            "description": "CASAS DE 2 RECÁMARAS,LA PRINCIPAL CON TERRAZA,  1 Y 1/2  BAÑOS,Y ROOF GARDEN, CON MÚLTIPLES AMENIDADES.",
            "costPrev": "1,666,308",
            "image": "https://i.ibb.co/8X1PXTx/gardenia-portrait.jpg",
            "image4": "https://i.ibb.co/ggfkK6S/PHOTO-2021-11-12-11-25-58-1.jpg",
            "cardSubtitle": "Deja de buscar, el lugar que siempre has soñado llegó.",
            "costNew": "1,388,590",
            "id": "11",
            "contactPhone": "5633201453",
            "zone": "Morelos",
            "title": "Clima siempre cálido",
            "name": "Los Huertos",
            "modelName": "Modelo Gardenia",
            "isNew": true,
            "image2": "https://i.ibb.co/HLcZRJN/PHOTO-2021-11-12-11-25-57.jpg",
            "price": "819,400",
            "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
            "image3": "https://i.ibb.co/wS4YYqD/PHOTO-2021-11-12-11-25-57-1.jpg",
            "isReady": false,
            "mtsInmueble": "74.2",
            "mtsGround": "54.3",
            "bedrooms": "2",
            "closets": false,
            "kitchen": true,
            "amenities": {
              "Áreas verdes": true,
              "Alberca": true,
              "Palapa": false,
              "Cancha": true,
              "Área infantil": true,
              "Gimnasio": true,
              "Pista de Jogging": true,
              "Cafetería": true,
              "Aquazona": false,
              "Zona Lounge": false,
              "Gym exterio": false,
              "Lúdoteca": false,
              "Asadores": false,
              "Pet zone": false,
              "Vigilancia": false
            }

        },
        {
            "contactPhone": "5633201453",
            "cardSubtitle": "El lugar ideal de descanso para ti y tu familia.",
            "name": "Los Huertos",
            "modelName": "Modelo Gardenia",
            "costPrev": "1,547,688",
            "image4": "https://i.ibb.co/mBMDqyd/PHOTO-2021-11-12-11-20-24.jpg",
            "image2": "https://i.ibb.co/48JgWLP/PHOTO-2021-11-12-11-20-24-2.jpg",
            "description": "",
            "zone": "Morelos",
            "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
            "isReady": true,
            "image": "https://i.ibb.co/z4323sM/dalia-portrait.jpg",
            "isNew": true,
            "costNew": "1,289,740",
            "image3": "https://i.ibb.co/BGt0PS2/PHOTO-2021-11-12-11-20-24-3.jpg",
            "id": "22",
            "title": "¿Te gustaría vivir en un lugar cerca de la naturleza, rodeado de confort y seguridad?",
            "price": "819,400",
            "mtsInmueble": "66.5",
            "mtsGround": "54.3",
            "bedrooms": "2",
            "closets": false,
            "kitchen": true,
            "amenities": {
              "Áreas verdes": true,
              "Alberca": true,
              "Palapa": false,
              "Cancha": true,
              "Área infantil": true,
              "Gimnasio": true,
              "Pista de Jogging": true,
              "Cafetería": true,
              "Aquazona": false,
              "Zona Lounge": false,
              "Gym exterio": true,
              "Lúdoteca": false,
              "Asadores": false,
              "Pet zone": false,
              "Vigilancia": true
            }

        },
        {
            "name": "Los Huertos",
            "modelName": "Modelo Amapola",
            "contactPhone": "5633201453",
            "image2": "https://i.ibb.co/7VxZ162/PHOTO-2021-11-12-11-16-32-2.jpg",
            "isNew": false,
            "image4": "https://i.ibb.co/z7Zb6tr/PHOTO-2021-11-12-11-16-33.jpg",
            "price": "819,400",
            "description": "CASAS DE 2 RECÁMARAS, 1 Y 1/2  BAÑOS,CON MÚLTIPLES AMENIDADES.",
            "costNew": "1,233,310",
            "isReady": true,
            "title": "¿Te gustaría vivir en un lugar donde se respira aire puro?",
            "zone": "Morelos",
            "image": "https://i.ibb.co/Q8tDZDL/amapola-portrait.jpg",
            "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
            "cardSubtitle": "La mejor inversión para tu bienestar ",
            "id": "33",
            "costPrev": "1,479,972",
            "image3": "https://i.ibb.co/QQsNfV6/PHOTO-2021-11-12-11-16-32-5.jpg",
            "mtsInmueble": "75.5",
            "mtsGround": "67.9",
            "bedrooms": "2",
            "closets": false,
            "kitchen": true,
            "amenities": {
              "Áreas verdes": true,
              "Alberca": true,
              "Palapa": false,
              "Cancha": true,
              "Área infantil": true,
              "Gimnasio": true,
              "Pista de Jogging": true,
              "Cafetería": true,
              "Aquazona": false,
              "Zona Lounge": false,
              "Gym exterio": true,
              "Lúdoteca": false,
              "Asadores": false,
              "Pet zone": false,
              "Vigilancia": false
            }
        },

        {
          "costPrev": "1,728,168",
          "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
          "id": "111",
          "description": "TERRAZA A CUBIERTO, CUARTO DE LAVADO, Y SALA DE TV . INCLUYE COCINA INTEGRAL Y PERSIANAS. ESTACIONAMIENTO PARA VISITAS ",
          "costNew": "1,440,140",
          "image3": "https://i.ibb.co/Wk1rtGM/PHOTO-2021-11-12-11-29-50-4.jpg",
          "zone": "Morelos",
          "image4": "https://i.ibb.co/3CXjqnG/PHOTO-2021-11-12-11-29-50-3.jpg",
          "image": "https://i.ibb.co/q9BYQCt/azalea-portrait.jpg",
          "name": "Los Huertos",
          "modelName": "Modelo Azalea",
          "title": "El lugar que siempre soñaste te espera con los brazos abiertos",
          "image2": "https://i.ibb.co/DLKy6Q4/PHOTO-2021-11-12-11-29-50-5.jpg",
          "contactPhone": "5633201453",
          "isNew": true,
          "price": "819,400",
          "isReady": false,
          "cardSubtitle": "La seguridad de un patrimonio ajustado a tu bolsillo.",
          "mtsInmueble": "88",
          "mtsGround": "67.9",
          "bedrooms": "3",
          "closets": false,
          "kitchen": true,
          "amenities": {
            "Áreas verdes": true,
            "Alberca": true,
            "Palapa": false,
            "Cancha": true,
            "Área infantil": true,
            "Gimnasio": true,
            "Pista de Jogging": true,
            "Cafetería": true,
            "Aquazona": false,
            "Zona Lounge": false,
            "Gym exterio": true,
            "Lúdoteca": false,
            "Asadores": false,
            "Pet zone": false,
            "Vigilancia": true
          }
        },
        {
          "costPrev": "1,250,000",
          "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
          "id": "111",
          "description": "TERRAZA A CUBIERTO, CUARTO DE LAVADO, Y SALA DE TV . INCLUYE COCINA INTEGRAL Y PERSIANAS. ESTACIONAMIENTO PARA VISITAS ",
          "costNew": "1,440,140",
          "image3": "https://i.ibb.co/Wk1rtGM/PHOTO-2021-11-12-11-29-50-4.jpg",
          "zone": "Morelos",
          "image4": "https://i.ibb.co/3CXjqnG/PHOTO-2021-11-12-11-29-50-3.jpg",
          "image": "https://i.ibb.co/q9BYQCt/azalea-portrait.jpg",
          "name": "Xochicalli",
          "title": "Cerca de plazas comerciales, escuelas y hospitales",
          "image2": "https://i.ibb.co/DLKy6Q4/PHOTO-2021-11-12-11-29-50-5.jpg",
          "contactPhone": "5633194603",
          "isNew": true,
          "price": "819,400",
          "isReady": false,
          "cardSubtitle": "Tu vivienda en la CDMX",
          "mtsInmueble": "51",
          "mtsGround": "Vertical",
          "bedrooms": "2",
          "closets": false,
          "kitchen": false,
          "amenities": {
            "Áreas verdes": false,
            "Alberca": false,
            "Palapa": false,
            "Cancha": false,
            "Área infantil": false,
            "Gimnasio": false,
            "Pista de Jogging": false,
            "Cafetería": false,
            "Aquazona": false,
            "Zona Lounge": false,
            "Gym exterio": false,
            "Lúdoteca": false,
            "Asadores": false,
            "Pet zone": false,
            "Vigilancia": true
          }
        },
        {
          "description": "DEPARTAMENTO DE  2 RECÁMARAS CON 2  BAÑOS COMPLETOS, SE ENTREGAN EQUIPADOS, EL DESARROLLO CUENTA CON AMENIDADES.",
          "image3": "https://i.ibb.co/b2Yqj6L/IMG-7965.jpg",
          "zone": "CDMX",
          "name": "Terraverde Tarango",
          "modelName": "Modelo 3 recamaras",
          "contactPhone": "5574189420",
          "id": "1",
          "price": "4,071,000",
          "image": "https://i.ibb.co/6rdW9gP/portrait-terraverde.jpg",
          "costNew": "4,071,000",
          "isNew": true,
          "image2": "https://i.ibb.co/g7dYLdC/IMG-7959.jpg",
          "ubication": "PROLONGACIÓN 5 DE MAYO No. 2081, COL. EX HACIENDA TARANGO, ALVARO OBREGON",
          "title": "Modelo 3 recamaras",
          "cardSubtitle": "SKY PARK con exclusivas amenidades.",
          "isReady": true,
          "image4": "https://i.ibb.co/GnVNwHc/IMG-7971.jpg",
          "costPrev": "3,949,200",
          "mtsInmueble": "119.7",
          "mtsGround": "VERTICAL",
          "bedrooms": "3",
          "closets": false,
          "kitchen": true,
          "amenities": {
            "Áreas verdes": false,
            "Alberca": false,
            "Palapa": false,
            "Cancha": false,
            "Área infantil": true,
            "Gimnasio": false,
            "Pista de Jogging": false,
            "Cafetería": false,
            "Aquazona": false,
            "Zona Lounge": true,
            "Gym exterior": true,
            "Lúdoteca": true,
            "Asadores": false,
            "Pet zone": true,
            "Vigilancia": true
          }
        }
      ]
    }
    // let sendObject = {
    //   data:{
    //     "firstGroup": [
    //       {
    //         "description": "DEPARTAMENTO DE  2 RECÁMARAS CON 2  BAÑOS COMPLETOS, SE ENTREGAN EQUIPADOS, EL DESARROLLO CUENTA CON AMENIDADES.",
    //         "image3": "https://i.ibb.co/b2Yqj6L/IMG-7965.jpg",
    //         "zone": "CDMX",
    //         "name": "Terraverde Tarango",
    //         "modelName": null,
    //         "contactPhone": "5574189420",
    //         "id": "1",
    //         "price": "3,291,000",
    //         "image": "https://i.ibb.co/6rdW9gP/portrait-terraverde.jpg",
    //         "costNew": "3,291,000",
    //         "isNew": true,
    //         "image2": "https://i.ibb.co/g7dYLdC/IMG-7959.jpg",
    //         "ubication": "PROLONGACIÓN 5 DE MAYO No. 2081, COL. EX HACIENDA TARANGO, ALVARO OBREGON",
    //         "title": "Concepto innovador de extraordinaria arquitectura.",
    //         "cardSubtitle": "SKY PARK con exclusivas amenidades.",
    //         "isReady": true,
    //         "image4": "https://i.ibb.co/GnVNwHc/IMG-7971.jpg",
    //         "costPrev": "3,949,200",
    //         "mtsInmueble": "78.9",
    //         "mtsGround": "VERTICAL",
    //         "bedrooms": "2",
    //         "closets": false,
    //         "kitchen": true,
    //         "amenities": {
    //           "Áreas verdes": false,
    //           "Alberca": false,
    //           "Palapa": false,
    //           "Cancha": false,
    //           "Área infantil": true,
    //           "Gimnasio": false,
    //           "Pista de Jogging": false,
    //           "Cafetería": false,
    //           "Aquazona": false,
    //           "Zona Lounge": true,
    //           "Gym exterior": true,
    //           "Lúdoteca": true,
    //           "Asadores": false,
    //           "Pet zone": true,
    //           "Vigilancia": true,
    //         }
    //       },
    //       {
    //         "costNew": "765,000",
    //         "image": "https://i.ibb.co/1Jn5Mq4/portrait-teques.jpg",
    //         "contactPhone": "5574189420",
    //         "cardSubtitle": "El lugar más fresco para ejercer tu crédito",
    //         "ubication": "Tequesquitengo, Morelos.",
    //         "modelName": null,
    //         "isReady": false,
    //         "costPrev": "819,400",
    //         "id": "2",
    //         "isNew": true,
    //         "zone": "Morelos",
    //         "title": "Puedes tener tu propio jardín o Roof garden, tú eliges.",
    //         "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
    //         "price": "819,400",
    //         "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado.",
    //         "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
    //         "name": "Villas Teques",
    //         "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg",
    //         "mtsInmueble": "61",
    //         "mtsGround": "89.2",
    //         "bedrooms": "2",
    //         "closets": false,
    //         "kitchen": false,
    //         "amenities": {
    //           "Áreas verdes": true,
    //           "Alberca": true,
    //           "palapa": true,
    //           "courts": false,
    //           "childArea": true,
    //           "gym": false,
    //           "joggin": false,
    //           "coffeBar": false,
    //           "aquaZone": false,
    //           "loungeBar": true,
    //           "gymExterior": false,
    //           "playroom": false,
    //           "steakhouse": false,
    //           "petZone": false,
    //           "vigilance": false,
    //         }
    //       },
    //       {
    //         "ubication": "AUTOPISTA LA PERA-CUAUTLA KM 22.7, OACALCO, MORELOS.",
    //         "costNew": "1,100,000",
    //         "image3": "https://i.ibb.co/SR2m3Zd/FOTO-ALBERCA.jpg",
    //         "cardSubtitle": "Deja de buscar, el lugar que siempre has soñado llegó.",
    //         "price": "819,400",
    //         "isNew": false,
    //         "isReady": true,
    //         "image4": "https://i.ibb.co/rygsKjh/LAS-FLORES-INT-COCINA.jpg",
    //         "description": "CASAS DE 2 ö 3 RECÁMARAS, 3 BAÑOS COMPLETOS, 46 VIVIENDAS POR CLÚSTERMÁXIM, 45% DE ÁREAS VERDES, ÁREAS COMERCIALES, RECREATIVAS Y DEPORTIVAS.",
    //         "zone": "Morelos",
    //         "image2": "https://i.ibb.co/SR7WvDQ/LAS-FLORES-INT-ESTANCIA.jpg",
    //         "name": "Las Flores",
    //         "modelName": null,
    //         "costPrev": "1,320,000",
    //         "contactPhone": "5633201453",
    //         "image": "https://i.ibb.co/NNb3k2G/portrait-lasflores.jpg",
    //         "id": "3",
    //         "title": "Magia y encanto en tu nueva vivienda.",
    //         "mtsInmueble": "69",
    //         "mtsGround": "48.5",
    //         "bedrooms": "2",
    //         "closets": false,
    //         "kitchen": true,
    //         "amenities": {
    //           "Áreas verdes": true,
    //           "Alberca": true,
    //           "palapa": true,
    //           "courts": false,
    //           "childArea": true,
    //           "gym": false,
    //           "joggin": false,
    //           "coffeBar": false,
    //           "aquaZone": false,
    //           "loungeBar": false,
    //           "gymExterior": false,
    //           "playroom": false,
    //           "steakhouse": true,
    //           "petZone": false,
    //           "vigilance": false,
    //         }
    //       }
    //     ],
    //     "secondGroup": [
    //       {
    //           "description": "CASAS DE 2 RECÁMARAS,LA PRINCIPAL CON TERRAZA,  1 Y 1/2  BAÑOS,Y ROOF GARDEN, CON MÚLTIPLES AMENIDADES.",
    //           "costPrev": "1,666,308",
    //           "image": "https://i.ibb.co/8X1PXTx/gardenia-portrait.jpg",
    //           "image4": "https://i.ibb.co/ggfkK6S/PHOTO-2021-11-12-11-25-58-1.jpg",
    //           "cardSubtitle": "Deja de buscar, el lugar que siempre has soñado llegó.",
    //           "costNew": "1,388,590",
    //           "id": "11",
    //           "contactPhone": "5633201453",
    //           "zone": "Morelos",
    //           "title": "Clima siempre cálido",
    //           "name": "Los Huertos",
    //           "modelName": "Modelo Gardenia",
    //           "isNew": true,
    //           "image2": "https://i.ibb.co/HLcZRJN/PHOTO-2021-11-12-11-25-57.jpg",
    //           "price": "819,400",
    //           "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
    //           "image3": "https://i.ibb.co/wS4YYqD/PHOTO-2021-11-12-11-25-57-1.jpg",
    //           "isReady": false,
    //           "mtsInmueble": "74.2",
    //           "mtsGround": "54.3",
    //           "bedrooms": "2",
    //           "closets": false,
    //           "kitchen": true,
    //           "amenities": {
    //             "Áreas verdes": true,
    //             "Alberca": true,
    //             "Palapa": false,
    //             "Cancha": true,
    //             "Área infantil": true,
    //             "Gimnasio": true,
    //             "Pista de Jogging": true,
    //             "Cafetería": true,
    //             "Aquazona": false,
    //             "Zona Lounge": false,
    //             "Gym exterio": false,
    //             "Lúdoteca": false,
    //             "Asadores": false,
    //             "Pet zone": false,
    //             "Vigilancia": false
    //           }

    //       },
    //       {
    //           "contactPhone": "5633201453",
    //           "cardSubtitle": "El lugar ideal de descanso para ti y tu familia.",
    //           "name": "Los Huertos",
    //           "modelName": "Modelo Gardenia",
    //           "costPrev": "1,547,688",
    //           "image4": "https://i.ibb.co/mBMDqyd/PHOTO-2021-11-12-11-20-24.jpg",
    //           "image2": "https://i.ibb.co/48JgWLP/PHOTO-2021-11-12-11-20-24-2.jpg",
    //           "description": "",
    //           "zone": "Morelos",
    //           "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
    //           "isReady": true,
    //           "image": "https://i.ibb.co/z4323sM/dalia-portrait.jpg",
    //           "isNew": true,
    //           "costNew": "1,289,740",
    //           "image3": "https://i.ibb.co/BGt0PS2/PHOTO-2021-11-12-11-20-24-3.jpg",
    //           "id": "22",
    //           "title": "¿Te gustaría vivir en un lugar cerca de la naturleza, rodeado de confort y seguridad?",
    //           "price": "819,400",
    //           "mtsInmueble": "66.5",
    //           "mtsGround": "54.3",
    //           "bedrooms": "2",
    //           "closets": false,
    //           "kitchen": true,
    //           "amenities": {
    //             "Áreas verdes": true,
    //             "Alberca": true,
    //             "Palapa": false,
    //             "Cancha": true,
    //             "Área infantil": true,
    //             "Gimnasio": true,
    //             "Pista de Jogging": true,
    //             "Cafetería": true,
    //             "Aquazona": false,
    //             "Zona Lounge": false,
    //             "Gym exterio": true,
    //             "Lúdoteca": false,
    //             "Asadores": false,
    //             "Pet zone": false,
    //             "Vigilancia": true
    //           }

    //       },
    //       {
    //           "name": "Los Huertos",
    //           "modelName": "Modelo Amapola",
    //           "contactPhone": "5633201453",
    //           "image2": "https://i.ibb.co/7VxZ162/PHOTO-2021-11-12-11-16-32-2.jpg",
    //           "isNew": false,
    //           "image4": "https://i.ibb.co/z7Zb6tr/PHOTO-2021-11-12-11-16-33.jpg",
    //           "price": "819,400",
    //           "description": "CASAS DE 2 RECÁMARAS, 1 Y 1/2  BAÑOS,CON MÚLTIPLES AMENIDADES.",
    //           "costNew": "1,233,310",
    //           "isReady": true,
    //           "title": "¿Te gustaría vivir en un lugar donde se respira aire puro?",
    //           "zone": "Morelos",
    //           "image": "https://i.ibb.co/Q8tDZDL/amapola-portrait.jpg",
    //           "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
    //           "cardSubtitle": "La mejor inversión para tu bienestar ",
    //           "id": "33",
    //           "costPrev": "1,479,972",
    //           "image3": "https://i.ibb.co/QQsNfV6/PHOTO-2021-11-12-11-16-32-5.jpg",
    //           "mtsInmueble": "75.5",
    //           "mtsGround": "67.9",
    //           "bedrooms": "2",
    //           "closets": false,
    //           "kitchen": true,
    //           "amenities": {
    //             "Áreas verdes": true,
    //             "Alberca": true,
    //             "Palapa": false,
    //             "Cancha": true,
    //             "Área infantil": true,
    //             "Gimnasio": true,
    //             "Pista de Jogging": true,
    //             "Cafetería": true,
    //             "Aquazona": false,
    //             "Zona Lounge": false,
    //             "Gym exterio": true,
    //             "Lúdoteca": false,
    //             "Asadores": false,
    //             "Pet zone": false,
    //             "Vigilancia": false
    //           }
    //       }
    //     ],
    //     "thirdGroup": [
    //       {
    //         "costPrev": "1,728,168",
    //         "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
    //         "id": "111",
    //         "description": "TERRAZA A CUBIERTO, CUARTO DE LAVADO, Y SALA DE TV . INCLUYE COCINA INTEGRAL Y PERSIANAS. ESTACIONAMIENTO PARA VISITAS ",
    //         "costNew": "1,440,140",
    //         "image3": "https://i.ibb.co/Wk1rtGM/PHOTO-2021-11-12-11-29-50-4.jpg",
    //         "zone": "Morelos",
    //         "image4": "https://i.ibb.co/3CXjqnG/PHOTO-2021-11-12-11-29-50-3.jpg",
    //         "image": "https://i.ibb.co/q9BYQCt/azalea-portrait.jpg",
    //         "name": "Los Huertos",
    //         "modelName": "Modelo Azalea",
    //         "title": "El lugar que siempre soñaste te espera con los brazos abiertos",
    //         "image2": "https://i.ibb.co/DLKy6Q4/PHOTO-2021-11-12-11-29-50-5.jpg",
    //         "contactPhone": "5633201453",
    //         "isNew": true,
    //         "price": "819,400",
    //         "isReady": false,
    //         "cardSubtitle": "La seguridad de un patrimonio ajustado a tu bolsillo.",
    //         "mtsInmueble": "88",
    //         "mtsGround": "67.9",
    //         "bedrooms": "3",
    //         "closets": false,
    //         "kitchen": true,
    //         "amenities": {
    //           "Áreas verdes": true,
    //           "Alberca": true,
    //           "Palapa": false,
    //           "Cancha": true,
    //           "Área infantil": true,
    //           "Gimnasio": true,
    //           "Pista de Jogging": true,
    //           "Cafetería": true,
    //           "Aquazona": false,
    //           "Zona Lounge": false,
    //           "Gym exterio": true,
    //           "Lúdoteca": false,
    //           "Asadores": false,
    //           "Pet zone": false,
    //           "Vigilancia": true
    //         }
    //       },
    //       {
    //         "costPrev": "1,250,000",
    //         "ubication": " CARRETERA LIBRAMIENTO YECAPIXTLA-OCUITUCO S/N TLACOTITLAN, YECAPIXTLA MORELOS",
    //         "id": "111",
    //         "description": "TERRAZA A CUBIERTO, CUARTO DE LAVADO, Y SALA DE TV . INCLUYE COCINA INTEGRAL Y PERSIANAS. ESTACIONAMIENTO PARA VISITAS ",
    //         "costNew": "1,440,140",
    //         "image3": "https://i.ibb.co/Wk1rtGM/PHOTO-2021-11-12-11-29-50-4.jpg",
    //         "zone": "Morelos",
    //         "image4": "https://i.ibb.co/3CXjqnG/PHOTO-2021-11-12-11-29-50-3.jpg",
    //         "image": "https://i.ibb.co/q9BYQCt/azalea-portrait.jpg",
    //         "name": "Xochicalli",
    //         "title": "Cerca de plazas comerciales, escuelas y hospitales",
    //         "image2": "https://i.ibb.co/DLKy6Q4/PHOTO-2021-11-12-11-29-50-5.jpg",
    //         "contactPhone": "5633194603",
    //         "isNew": true,
    //         "price": "819,400",
    //         "isReady": false,
    //         "cardSubtitle": "Tu vivienda en la CDMX",
    //         "mtsInmueble": "51",
    //         "mtsGround": "Vertical",
    //         "bedrooms": "2",
    //         "closets": false,
    //         "kitchen": false,
    //         "amenities": {
    //           "Áreas verdes": false,
    //           "Alberca": false,
    //           "Palapa": false,
    //           "Cancha": false,
    //           "Área infantil": false,
    //           "Gimnasio": false,
    //           "Pista de Jogging": false,
    //           "Cafetería": false,
    //           "Aquazona": false,
    //           "Zona Lounge": false,
    //           "Gym exterio": false,
    //           "Lúdoteca": false,
    //           "Asadores": false,
    //           "Pet zone": false,
    //           "Vigilancia": true
    //         }
    //       },
    //       {
    //         "description": "DEPARTAMENTO DE  2 RECÁMARAS CON 2  BAÑOS COMPLETOS, SE ENTREGAN EQUIPADOS, EL DESARROLLO CUENTA CON AMENIDADES.",
    //         "image3": "https://i.ibb.co/b2Yqj6L/IMG-7965.jpg",
    //         "zone": "CDMX",
    //         "name": "Terraverde Tarango",
    //         "modelName": "Modelo 3 recamaras",
    //         "contactPhone": "5574189420",
    //         "id": "1",
    //         "price": "4,071,000",
    //         "image": "https://i.ibb.co/6rdW9gP/portrait-terraverde.jpg",
    //         "costNew": "4,071,000",
    //         "isNew": true,
    //         "image2": "https://i.ibb.co/g7dYLdC/IMG-7959.jpg",
    //         "ubication": "PROLONGACIÓN 5 DE MAYO No. 2081, COL. EX HACIENDA TARANGO, ALVARO OBREGON",
    //         "title": "Modelo 3 recamaras",
    //         "cardSubtitle": "SKY PARK con exclusivas amenidades.",
    //         "isReady": true,
    //         "image4": "https://i.ibb.co/GnVNwHc/IMG-7971.jpg",
    //         "costPrev": "3,949,200",
    //         "mtsInmueble": "119.7",
    //         "mtsGround": "VERTICAL",
    //         "bedrooms": "3",
    //         "closets": false,
    //         "kitchen": true,
    //         "amenities": {
    //           "Áreas verdes": false,
    //           "Alberca": false,
    //           "Palapa": false,
    //           "Cancha": false,
    //           "Área infantil": true,
    //           "Gimnasio": false,
    //           "Pista de Jogging": false,
    //           "Cafetería": false,
    //           "Aquazona": false,
    //           "Zona Lounge": true,
    //           "Gym exterior": true,
    //           "Lúdoteca": true,
    //           "Asadores": false,
    //           "Pet zone": true,
    //           "Vigilancia": true
    //         }
    //       }
    //     ]
    //   }
    // }

    this.fireService.manuallyUpload(sendObject).then( (resp)=>{
      console.log('resp', resp);   
    }).catch( (error) =>{
      console.error('error:', error);      
    });
  }

}
