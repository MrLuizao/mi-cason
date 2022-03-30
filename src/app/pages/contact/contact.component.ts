import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompleteSnackComponent } from 'src/app/components/re-use/complete-snack/complete-snack.component';
import { ErrorSnackComponent } from 'src/app/components/re-use/error-snack/error-snack.component';
import { IncompleteSnackComponent } from 'src/app/components/re-use/incomplete-snack/incomplete-snack.component';
import { ContactFormModel } from 'src/app/models/contact-form.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SeoService } from 'src/app/services/seo.service';

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
  gtag:any;

  constructor(  private fireService: FirestoreService,
                private _snackBar: MatSnackBar,
                public seoService: SeoService,
                public dialog: MatDialog ) { window.scrollTo(0,0) }

  ngOnInit(): void {
  }


  sendContactForm(form: NgForm){ 

    this.sendDataToSeo();

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

  sendDataToSeo(){
    this.seoService.gtagReportConversion('contactPage')
  }

  saveDataManually(){

    let sendObject = {
      data: [
        {
          "price": "3,291,000",
          "zone": "CDMX",
          "image": "https://i.ibb.co/6rdW9gP/portrait-terraverde.jpg",
          "isReady": true,
          "kitchen": true,
          "isNew": true,
          "title": "Concepto innovador de extraordinaria arquitectura.",
          "description": "DEPARTAMENTO DE  2 RECÁMARAS CON 2  BAÑOS COMPLETOS, SE ENTREGAN EQUIPADOS, EL DESARROLLO CUENTA CON AMENIDADES.",
          "bedrooms": "2",
          "amenities": {
              "Lúdoteca": true,
              "Cafetería": false,
              "Palapa": false,
              "Alberca": false,
              "Cancha": false,
              "Áreas verdes": false,
              "Gym exterior": true,
              "Vigilancia": true,
              "Área infantil": true,
              "Pista de Jogging": false,
              "Gimnasio": false,
              "Zona Lounge": true,
              "Asadores": false,
              "Pet zone": true,
              "Aquazona": false
          },
          "name": "Terraverde Tarango",
          "costPrev": "3,949,200",
          "ubication": "Álvaro Obregón",
          "cardSubtitle": "SKY PARK con exclusivas amenidades.",
          "contactPhone": "5574189420",
          "image4": "https://i.ibb.co/GnVNwHc/IMG-7971.jpg",
          "image3": "https://i.ibb.co/b2Yqj6L/IMG-7965.jpg",
          "costNew": 2671000,
          "mtsGround": "VERTICAL",
          "maxPrice": "3,281,000",
          "image2": "https://i.ibb.co/g7dYLdC/IMG-7959.jpg",
          "closets": false,
          "mtsInmueble": "78.9",
          "id": "1",
          "modelName": null,
          "minPrice": "2,671,000"
        },
        {
            "mtsGround": "89.2",
            "bedrooms": "2",
            "minPrice": "765,000",
            "mtsInmueble": "61",
            "id": "2",
            "image4": "https://i.ibb.co/SwLys2t/mean-home-4.jpg",
            "ubication": "Tequesquitengo",
            "cardSubtitle": "El precio incluye avalúo, escrituracion, administración y 2 años de mantenimiento.",
            "maxPrice": "819,400",
            "kitchen": false,
            "costPrev": "983,289",
            "price": "819,400",
            "image": "https://i.ibb.co/1Jn5Mq4/portrait-teques.jpg",
            "title": "Puedes tener tu propio jardín o Roof garden, tú eliges.",
            "modelName": null,
            "description": "Cómodos departamentos de 61 m2, cuentan con jardín o roof garden, 2 recámaras con opción a 3 y amplia área de lavado.",
            "isReady": false,
            "zone": "Morelos",
            "amenities": {
                "aquaZone": false,
                "courts": false,
                "gymExterior": false,
                "palapa": true,
                "steakhouse": false,
                "coffeBar": false,
                "Áreas verdes": true,
                "Alberca": true,
                "petZone": false,
                "gym": false,
                "childArea": true,
                "loungeBar": true,
                "vigilance": false,
                "playroom": false,
                "joggin": false
            },
            "image2": "https://i.ibb.co/F3ChRy0/mean-home-3.jpg",
            "name": "Villas Teques",
            "contactPhone": "5633201453",
            "closets": false,
            "isNew": true,
            "costNew": 819400,
            "image3": "https://i.ibb.co/y41WwFM/mean-home-1.jpg"
        },
        {
            "bedrooms": "2",
            "maxPrice": "1,200,000",
            "cardSubtitle": "Deja de buscar, el lugar que siempre has soñado llegó.",
            "zone": "Morelos",
            "ubication": "Tlayacapan",
            "minPrice": "1,200,00",
            "costPrev": "1,320,000",
            "amenities": {
                "Alberca": true,
                "steakhouse": true,
                "courts": false,
                "coffeBar": false,
                "vigilance": false,
                "playroom": false,
                "childArea": true,
                "Áreas verdes": true,
                "aquaZone": false,
                "gymExterior": false,
                "palapa": true,
                "joggin": false,
                "gym": false,
                "loungeBar": false,
                "petZone": false
            },
            "id": "3",
            "closets": false,
            "mtsGround": "48.5",
            "image": "https://i.ibb.co/NNb3k2G/portrait-lasflores.jpg",
            "image3": "https://i.ibb.co/SR2m3Zd/FOTO-ALBERCA.jpg",
            "mtsInmueble": "69",
            "modelName": null,
            "kitchen": true,
            "name": "Las Flores",
            "title": "Magia y encanto en tu nueva vivienda.",
            "description": "CASAS DE 2 ö 3 RECÁMARAS, 3 BAÑOS COMPLETOS, 46 VIVIENDAS POR CLÚSTERMÁXIM, 45% DE ÁREAS VERDES, ÁREAS COMERCIALES, RECREATIVAS Y DEPORTIVAS.",
            "isReady": true,
            "isNew": false,
            "costNew": 1200000,
            "contactPhone": "5633201453",
            "price": "819,400",
            "image2": "https://i.ibb.co/SR7WvDQ/LAS-FLORES-INT-ESTANCIA.jpg",
            "image4": "https://i.ibb.co/rygsKjh/LAS-FLORES-INT-COCINA.jpg"
        },
        {
            "amenities": {
                "Áreas verdes": true,
                "Área infantil": true,
                "Zona Lounge": false,
                "Gym exterio": true,
                "Lúdoteca": false,
                "Pet zone": false,
                "Vigilancia": true,
                "Asadores": false,
                "Cancha": true,
                "Aquazona": false,
                "Gimnasio": true,
                "Alberca": true,
                "Palapa": false,
                "Pista de Jogging": true,
                "Cafetería": true
            },
            "mtsInmueble": "88",
            "description": "CASAS DE 3 RECÁMARAS,2  BAÑOS, TERRAZA A CUBIERTO, CUARTO DE LAVADO, Y SALA DE TV . INCLUYE COCINA INTEGRAL Y PERSIANAS. ESTACIONAMIENTO PARA VISITAS Y MÚLTIPLES AMENIDADES",
            "maxPrice": "1,440,140",
            "costPrev": "1,728,168",
            "title": "El lugar que siempre soñaste te espera con los brazos abiertos",
            "image": "https://i.ibb.co/q9BYQCt/azalea-portrait.jpg",
            "costNew": 1440140,
            "isNew": true,
            "bedrooms": "3",
            "mtsGround": "67.9",
            "image3": "https://i.ibb.co/Wk1rtGM/PHOTO-2021-11-12-11-29-50-4.jpg",
            "ubication": "Yecapixtla",
            "kitchen": true,
            "cardSubtitle": "La seguridad de un patrimonio ajustado a tu bolsillo.",
            "name": "Los Huertos / Mod. Azalea",
            "image2": "https://i.ibb.co/DLKy6Q4/PHOTO-2021-11-12-11-29-50-5.jpg",
            "price": "819,400",
            "contactPhone": "5633201453",
            "minPrice": "1,440,140",
            "isReady": false,
            "zone": "Morelos",
            "id": "111",
            "modelName": "Modelo Azalea",
            "image4": "https://i.ibb.co/3CXjqnG/PHOTO-2021-11-12-11-29-50-3.jpg",
            "closets": false
        },
        {
            "isNew": true,
            "image2": "https://i.ibb.co/0htfnmp/image-4.jpg",
            "image4": "https://i.ibb.co/mRRVQ9n/image-2.jpg",
            "name": "Xochicalli",
            "bedrooms": "2",
            "closets": false,
            "mtsGround": "Vertical",
            "title": "Cerca de plazas comerciales, escuelas y hospitales",
            "description": "TERRAZA A CUBIERTO, CUARTO DE LAVADO, Y SALA DE TV . INCLUYE COCINA INTEGRAL Y PERSIANAS. ESTACIONAMIENTO PARA VISITAS ",
            "image": "https://i.ibb.co/tp77WrW/xochicalli-portrait.jpg",
            "image3": "https://i.ibb.co/yFfL1Zb/image-3.jpg",
            "price": "819,400",
            "amenities": {
                "Asadores": false,
                "Pista de Jogging": false,
                "Lúdoteca": false,
                "Cancha": false,
                "Pet zone": false,
                "Áreas verdes": false,
                "Palapa": false,
                "Vigilancia": true,
                "Zona Lounge": false,
                "Aquazona": false,
                "Gym exterio": false,
                "Cafetería": false,
                "Gimnasio": false,
                "Área infantil": false,
                "Alberca": false
            },
            "costPrev": "1,500,000",
            "contactPhone": "5633194603",
            "zone": "CDMX",
            "mtsInmueble": "51",
            "id": "111",
            "maxPrice": "1,250,000",
            "kitchen": false,
            "isReady": false,
            "minPrice": "1,250,000",
            "costNew": 1250000,
            "cardSubtitle": "Tu vivienda en la CDMX",
            "ubication": "Tlahuac"
        },
        {
            "title": "Clima siempre cálido",
            "image": "https://i.ibb.co/8X1PXTx/gardenia-portrait.jpg",
            "name": "Los Huertos / Mod. Gardenia",
            "price": "819,400",
            "description": "CASAS DE 2 RECÁMARAS,LA PRINCIPAL CON TERRAZA,  1 Y 1/2  BAÑOS,Y ROOF GARDEN, CON MÚLTIPLES AMENIDADES.",
            "image4": "https://i.ibb.co/ggfkK6S/PHOTO-2021-11-12-11-25-58-1.jpg",
            "image3": "https://i.ibb.co/wS4YYqD/PHOTO-2021-11-12-11-25-57-1.jpg",
            "zone": "Morelos",
            "minPrice": "1,388,590",
            "cardSubtitle": "Deja de buscar, el lugar que siempre has soñado llegó.",
            "costPrev": "1,666,308",
            "maxPrice": "1,388,590",
            "id": "11",
            "mtsGround": "54.3",
            "mtsInmueble": "74.2",
            "image2": "https://i.ibb.co/HLcZRJN/PHOTO-2021-11-12-11-25-57.jpg",
            "contactPhone": "5633201453",
            "costNew": 1388590,
            "isNew": true,
            "isReady": false,
            "ubication": "Yecapixtla",
            "amenities": {
                "Pista de Jogging": true,
                "Alberca": true,
                "Asadores": false,
                "Pet zone": false,
                "Lúdoteca": false,
                "Palapa": false,
                "Áreas verdes": true,
                "Zona Lounge": false,
                "Área infantil": true,
                "Vigilancia": false,
                "Cancha": true,
                "Gym exterio": false,
                "Gimnasio": true,
                "Cafetería": true,
                "Aquazona": false
            },
            "kitchen": true,
            "bedrooms": "2",
            "modelName": "Modelo Gardenia",
            "closets": false
        },
        {
            "kitchen": true,
            "price": "819,400",
            "minPrice": "1,289,740",
            "image": "https://i.ibb.co/z4323sM/dalia-portrait.jpg",
            "name": "Los Huertos / Mod. Dalia",
            "maxPrice": "1,289,740",
            "title": "¿Te gustaría vivir en un lugar cerca de la naturleza, rodeado de confort y seguridad?",
            "costNew": 1289740,
            "ubication": "Yecapixtla",
            "contactPhone": "5633201453",
            "costPrev": "1,547,688",
            "closets": false,
            "cardSubtitle": "El lugar ideal de descanso para ti y tu familia.",
            "id": "22",
            "isReady": true,
            "isNew": true,
            "amenities": {
                "Pet zone": false,
                "Lúdoteca": false,
                "Alberca": true,
                "Zona Lounge": false,
                "Vigilancia": true,
                "Asadores": false,
                "Gym exterio": true,
                "Gimnasio": true,
                "Área infantil": true,
                "Pista de Jogging": true,
                "Aquazona": false,
                "Cancha": true,
                "Áreas verdes": true,
                "Palapa": false,
                "Cafetería": true
            },
            "image2": "https://i.ibb.co/mBMDqyd/PHOTO-2021-11-12-11-20-24.jpg",
            "image3": "https://i.ibb.co/BGt0PS2/PHOTO-2021-11-12-11-20-24-3.jpg",
            "mtsInmueble": "66.5",
            "image4": "https://i.ibb.co/48JgWLP/PHOTO-2021-11-12-11-20-24-2.jpg",
            "zone": "Morelos",
            "bedrooms": "2",
            "description": "RECAMARA PRICIPAL CON TERRAZA, AREA DE LAVADO   Y ROOF GARDEN. INCLUYE COCINA INTEGRAL Y PERSIANAS. ESTACIONAMIENTO PARA VISITAS ",
            "modelName": "Modelo Dalia",
            "mtsGround": "54.3"
        },
        {
            "costPrev": "1,479,972",
            "image2": "https://i.ibb.co/7VxZ162/PHOTO-2021-11-12-11-16-32-2.jpg",
            "price": "819,400",
            "contactPhone": "5633201453",
            "amenities": {
                "Vigilancia": false,
                "Cancha": true,
                "Zona Lounge": false,
                "Gimnasio": true,
                "Asadores": false,
                "Gym exterio": true,
                "Pet zone": false,
                "Lúdoteca": false,
                "Áreas verdes": true,
                "Área infantil": true,
                "Pista de Jogging": true,
                "Alberca": true,
                "Aquazona": false,
                "Cafetería": true,
                "Palapa": false
            },
            "description": "CASAS DE 2 RECÁMARAS, 1 Y 1/2  BAÑOS,CON MÚLTIPLES AMENIDADES.",
            "isReady": true,
            "mtsInmueble": "75.5",
            "maxPrice": "1,233,310",
            "isNew": false,
            "title": "¿Te gustaría vivir en un lugar donde se respira aire puro?",
            "zone": "Morelos",
            "modelName": "Modelo Amapola",
            "name": "Los Huertos / Mod. Amapola",
            "minPrice": "1,233,310",
            "kitchen": true,
            "costNew": 1233310,
            "id": "33",
            "mtsGround": "67.9",
            "bedrooms": "2",
            "ubication": "Yecapixtla",
            "closets": false,
            "cardSubtitle": "La mejor inversión para tu bienestar ",
            "image3": "https://i.ibb.co/QQsNfV6/PHOTO-2021-11-12-11-16-32-5.jpg",
            "image": "https://i.ibb.co/Q8tDZDL/amapola-portrait.jpg",
            "image4": "https://i.ibb.co/z7Zb6tr/PHOTO-2021-11-12-11-16-33.jpg"
        },
        {
          "amenities": {
            "Áreas verdes": true,
              "Vigilancia": false,
              "Cancha": false,
              "Zona Lounge": false,
              "Gimnasio": false,
              "Asadores": false,
              "Gym exterio": false,
              "Pet zone": false,
              "Lúdoteca": false,
              "Área infantil": false,
              "Pista de Jogging": false,
              "Alberca": false,
              "Aquazona": false,
              "Cafetería": false,
              "Palapa": false
          },
          "bedrooms": "3 y 1/2",
          "cardSubtitle": "Nunca había sido tan fácil adquirir una vivienda.",
          "contactPhone": "5633201453",
          "costNew": 2700000,
          "costPrev": "3,240,000",
          "description": "CASAS DE 2 PLANTAS, 3 RECÁMARAS, 3 Y 1/2 BAÑOS, ESTANCIA, COCINA INTEGRAL, ESTACIONAMIENTO Y ROOF GARDEN (con pergolado y asador). ",
          "id": "444",
          "image": "https://i.ibb.co/hMC2x0f/Angeles-portrait.jpg",
          "image2": "https://i.ibb.co/8XmK3qD/Angeles-1.jpg",
          "image3": "https://i.ibb.co/KX2Zmdk/Angeles-2.jpg",
          "image4": "https://i.ibb.co/ZM9W7xd/Angeles-3.jpg",
          "maxPrice": "3,240,000",
          "minPrice": "2,700,000",
          "mtsGround": "77",
          "mtsInmueble": "174.9",
          "name": "Resid. Los Ángeles II",
          "title": "Diseñados especialmente para cubrir tus necesidades y las de tus seres queridos.",
          "ubication": "Santa Cruz Xoxocotlán",
          "zone": "Oaxaca",

          "price": "",
          "modelName": "",
          "isReady": null,
          "isNew": null,
          "kitchen": null,
          "closets": null,
        },
        {
          "amenities": {
            "Recámara con Terraza": true,
            "Cocina Integral": true,
            "Área de Lavado": true,
            "Caseta de Vigilancia": true
          },
          "bedrooms": "2",
          "cardSubtitle": "Exclusivos Departamentos, Increíble Ubicación",
          "contactPhone": "5633201453",
          "costNew": 2392950,
          "costPrev": "2,871,540",
          "description": "EDIFICIO DE 2 TORRES CON SOLO 21 DEPARTAMENTOS DE 2  RECÁMARAS, COCINA SE ENTREGA CON TARJA, ESTUFA. CAMPAÑA Y MOBILIARIO, 1 BAÑO COMPLETO, ÁREA DE LAVADO.",
          "id": "555",
          "image": "https://i.ibb.co/mt2CbTC/EC-fachada.jpg",
          "image2": "https://i.ibb.co/BwstGgj/Eje-central-1.jpg",
          "image3": "https://i.ibb.co/RN4kjgV/Eje-central-2.jpg",
          "image4": "https://i.ibb.co/tMRB28d/Eje-central-3.jpg",
          "maxPrice": "2,871,540",
          "minPrice": "2,392,950",
          "mtsGround": "56",
          "mtsInmueble": "6 Niveles",
          "name": "Conjunto Eje Central",
          "title": "Exclusivos departamentos cerca del Metro Lázaro Cárdenas",
          "ubication": "Col.Obrea - Alcaldía Cuauhtemoc",
          "zone": "CDMX",

          "price": "",
          "modelName": "",
          "isReady": null,
          "isNew": null,
          "kitchen": null,
          "closets": null,
        },
        {
          "amenities": {
            "Áreas Verdes": true,
            "Alberca": true,
            "Palapa": true,
            "Cancha": true,
            "Área Infantil": true,
            "Ciclovías": true,

            // "Recámara con Terraza": true,
            // "Cocina Integral": true,
            // "Área de Lavado": true,
            // "Caseta de Vigilancia": true
          },
          "bedrooms": "2",
          "cardSubtitle": "Plusvalía e Inversión segura",
          "contactPhone": "5633201453",
          "costNew": 634000,
          "costPrev": "760,800",
          "description": "Departamentos con alberca de 2 o 3 recámaras, áreas verdes, parques, amenidades y zonas comerciales.",
          "id": "555",
          "image": "https://i.ibb.co/JHkhYgB/Aldea-portrait.jpg",
          "image2": "https://i.ibb.co/s504Lsg/aldea-2.jpg",
          "image3": "https://i.ibb.co/n1ztHBc/aldea-3.jpg",
          "image4": "https://i.ibb.co/yV17d6k/aldea-4.jpg",
          "maxPrice": "760,800",
          "minPrice": "634,000",
          "mtsGround": "48.8",
          "mtsInmueble": "54",
          "name": "Aldea Tulum",
          "title": "5 Módelos a elegir (HOLBOX, LUUM, SOL, ARRECIFE Y KANAN)",
          "ubication": "Carr. Tulum-Chetumal km 221",
          "zone": "Quintana Roo",

          // "price": "",
          // "modelName": "",
          // "isReady": null,
          // "isNew": null,
          // "kitchen": null,
          // "closets": null,
        },
        {
          "amenities": {
            "Palapa": true,
            "Áreas Verdes": true,
            "Asadores": true,

            // "Alberca": true,
            // "Cancha": true,
            // "Área Infantil": true,
            // "Ciclovías": true,
            // "Recámara con Terraza": true,
            // "Cocina Integral": true,
            // "Área de Lavado": true,
            // "Caseta de Vigilancia": true
          },
          "bedrooms": "2",
          "cardSubtitle": "¡¡Entrega inmediata!!",
          "contactPhone": "5633201453",
          "costNew": 477500,
          "costPrev": "573,000",
          "description": "Departamentos con 2 recámaras en desarrollo con parques y asadores.",
          "id": "82982",
          "image": "https://i.ibb.co/BLhy4P7/Cielo-portrait.jpg",
          "image2": "https://i.ibb.co/zJHvKz5/cielo-2.jpg",
          "image3": "https://i.ibb.co/BrDsWWL/cielo-3.jpg",
          "image4": "https://i.ibb.co/Kj678zZ/cielo-4.jpg",
          "maxPrice": "573,000",
          "minPrice": "477,500",
          "mtsGround": "48.7",
          "mtsInmueble": "54",
          "name": "Cielo Nuevo",
          "title": "Dos modelos a elegir en excelente ubicación.",
          "ubication": "Municipo Benito Juarez",
          "zone": "Quintana Roo",
        },
        {
          "amenities": {
            // "Palapa": true,
            // "Asadores": true,
            // "Área Infantil": true,
            // "Ciclovías": true,
            // "Recámara con Terraza": true,
            // "Cocina Integral": true,
            // "Área de Lavado": true,

            "Áreas Verdes": true,
            "Alberca": true,
            "Cancha": true,
            "Caseta de Vigilancia": true,
            "Pista de jogging": true,
            "Aquazona": true,
            "Ciclovías": true
          },
          "bedrooms": "2",
          "cardSubtitle": "Estrena vivienda con Alberca y Aquaparque",
          "contactPhone": "5633201453",
          "costNew": 626900,
          "costPrev": "752,280",
          "description": "Departamentos con 2 recámaras en desarrollo con aquaparque, casa club, parques, estaciones para hacer ejercicio al aire libre, canchas de futbol, basquetbol, volibol, ciclovía y pista para correr. ",
          "id": "213122",
          "image": "https://i.ibb.co/mBxj1Gv/Lakin-portrait.jpg",
          "image2": "https://i.ibb.co/YPS84gn/lankin-2.jpg",
          "image3": "https://i.ibb.co/C50bT80/lankin-3.jpg",
          "image4": "https://i.ibb.co/RQXwb5q/lankin-4.jpg",
          "maxPrice": "752,280",
          "minPrice": "626,900",
          "mtsGround": "43.7",
          "mtsInmueble": " - ",
          "name": "Privadas Lakin",
          "title": "El mejor lugar para disfrutar y divertirte.",
          "ubication": "Arco Norte Esq. Paseo Kanab",
          "zone": "Quintana Roo",
        },
        {
          "amenities": {
            "Caseta de vigilancia": true,
            "Áreas Verdes": true,
            "Alberca": true,
            "Palapa": true,
            "Área infantil": true,
            "Ciclovías": true
            // "Asadores": true,
            // "Área Infantil": true,
            // "Ciclovías": true,
            // "Recámara con Terraza": true,
            // "Cocina Integral": true,
            // "Área de Lavado": true,
            // "Cancha": true,
            // "Caseta de Vigilancia": true,
            // "Pista de jogging": true,
            // "Aquazona": true,
            // "Ciclovías": true
          },
          "bedrooms": "2",
          "cardSubtitle": "Vive en un pedacito de la Rivera Maya",
          "contactPhone": "5633201453",
          "costNew": 569000,
          "costPrev": "682,000",
          "description": "Departamentos con 2 recámaras en desarrollo con parques, ciclovía, juegos infantiles y alberca con palapa.",
          "id": "31432",
          "image": "https://i.ibb.co/9qZ8vhD/Eden-portrait.jpg",
          "image2": "https://i.ibb.co/PrTmx3k/eden-2.jpg",
          "image3": "https://i.ibb.co/y8N7P5n/eden-3.jpg",
          "image4": "https://i.ibb.co/kxYLcCj/eden-4.jpg",
          "maxPrice": "682,000",
          "minPrice": "569,000",
          "mtsGround": "49.8",
          "mtsInmueble": " - ",
          "name": "El Edén",
          "title": "Asegura tu patrimonio en una de las zonas de mayor plusvalía en México.",
          "ubication": "Playa del Carmen",
          "zone": "Quintana Roo",
        },
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
          },
          "bedrooms": "2",
          "cardSubtitle": "Vacaciones inolvidables cada fin de semana",
          "contactPhone": "5633201453",
          "costNew": 908000,
          "costPrev": "1,089,600",
          "description": "Casas de 2 o 3 recámaras con múltiples amenidades para ti y tu familia.",
          "id": "79501",
          "image": "https://i.ibb.co/bLcs8kr/Aquasol-portrait.png",
          "image2": "https://i.ibb.co/WKjxgTs/Aquasol-2.png",
          "image3": "https://i.ibb.co/Q8WmMZh/Aquasol-3.png",
          "image4": "https://i.ibb.co/6vFdRh0/Aquasol-4.png",
          "maxPrice": "1,089,600",
          "minPrice": "908,000",
          "mtsGround": "50",
          "mtsInmueble": "69",
          "name": "Aquasol",
          "title": "Vive tranquilo, se cuenta con filtros de acceso a la entrada del desarrollo y en cada privada.",
          "ubication": " Tlayecac",
          "zone": "Morelos",
        },
        {
          "amenities": {
            "Terraza": true,
            "Caseta de vigilancia": true,            
            "Áreas Verdes": true,
            "Zona Pet": true,
            "Gimnasio": true,
            "CCTV": true,
            "Área comercial": true,
            "Salón de fiestas": true,
            "Ecotecnologías": true
          },
          "bedrooms": "2",
          "cardSubtitle": "Exclusividad, Calidad y Ubicación.",
          "contactPhone": "5633201453",
          "costNew": 3286099,
          "costPrev": "3,943,319",
          "description": "Departamentos de 2 recámaras con 2 baños, con opción a roof garden privado.",
          "id": "79501",
          "image": "https://i.ibb.co/BLL8WFf/lago-portrait.jpg",
          "image2": "https://i.ibb.co/NFDC9KH/cadu-lago-2.jpg",
          "image3": "https://i.ibb.co/fGj3Vsg/cadu-lago-3.jpg",
          "image4": "https://i.ibb.co/K5wKHDd/Cadu-lago-4.jpg",
          "maxPrice": "1,089,600",
          "minPrice": "3,286,099",
          "mtsGround": "65",
          "mtsInmueble": "100",
          "name": "Torre Lago",
          "title": "El desarrollo cuenta con lobby y areas comunes al aire libre con jardin y pet zone.",
          "ubication": "Alcaldía Miguel Hidalgo",
          "zone": "CDMX",
        },
        {
          "amenities": {
            "Terraza": true,
            "Caseta de vigilancia": true,            
            "Áreas Verdes": true,
            "Palapa": true,
            "Cancha": true,
            "Área Infantil": true,
            "Asadores": true,
            "Ciclovías": true,
            "Ecotecnologías": true
          },
          "bedrooms": "2",
          "cardSubtitle": "Diseño integral para un mejor estilo de vida.",
          "contactPhone": "5633201453",
          "costNew": 445100,
          "costPrev": "534,120",
          "description": "Vive en un pueblito mágico dentro de una comunidad sostenible. ",
          "id": "798781",
          "image": "https://i.ibb.co/hdGfnFB/Portrait-zumpango.jpg",
          "image2": "https://i.ibb.co/cDjW52y/Zumpango-2.jpg",
          "image3": "https://i.ibb.co/P1rvNb8/zumpango-3.jpg",
          "image4": "https://i.ibb.co/4jt2DBb/Zumpango-4.jpg",
          "maxPrice": "534,120",
          "minPrice": "445,100",
          "mtsGround": " - ",
          "mtsInmueble": " - ",
          "name": "Privadas del Parque",
          "title": "¡Tu eliges!  Departamento, casa duplex o unifamiliar.  ",
          "ubication": "Zumpango",
          "zone": "Estado de México",
        },
        {
          "amenities": {
            "Área infantil": true,
          },
          "bedrooms": "2",
          "cardSubtitle": "Bienestar y comodidad de tu familia.",
          "contactPhone": "5633201453",
          "costNew": 357000,
          "costPrev": "428,400",
          "description": "Casas de un nivel con 2 recámaras, estancia, baño, cocina y estacionamiento",
          "id": "798781",
          "image": "https://i.ibb.co/tc6ZKzm/Portrait-LA-PAZ.png",
          "image2": "https://i.ibb.co/XCkv8GM/LA-PAZ-2.jpg",
          "image3": "https://i.ibb.co/hRMQFcY/LA-PAZ-3.jpg",
          "image4": "https://i.ibb.co/gSvrspj/LA-PAZ-4.jpg",
          "maxPrice": "428,400",
          "minPrice": "357,000",
          "mtsGround": "43",
          "mtsInmueble": "105",
          "name": "La Paz",
          "title": "Ubicado a 5 minutos de la zona industrial de Torreón",
          "ubication": "Blvd. Manuel de Jesús Clouthier, Torreon",
          "zone": "Coahuila",
        },
        {
          "amenities": {
            "Área infantil": true,
            "Asadores": true
          },
          "bedrooms": "3",
          "cardSubtitle": "El lugar ideal para el nacimiento de tu hogar.",
          "contactPhone": "5633201453",
          "costNew": 935000,
          "costPrev": "1,122,000",
          "description": "Casas de dos niveles con 3 recámaras, estancia, baños, cocina con equipamiento y estacionamiento. (3 MODELOS)",
          "id": "23481",
          "image": "https://i.ibb.co/h2MXHkg/Arezzo-portrait.jpg",
          "image2": "https://i.ibb.co/QM12V8w/Arezzo-2.jpg",
          "image3": "https://i.ibb.co/rsVw9Kf/Arezzo-3.jpg",
          "image4": "https://i.ibb.co/smPcFcm/Arezzo-4.jpg",
          "maxPrice": "1,122,000",
          "minPrice": "935,000",
          "mtsGround": "86",
          "mtsInmueble": "113",
          "name": "Arezzo",
          "title": "Déjate enamorar por  la armonía y diseño contemporáneo.",
          "ubication": "Circuito Livorno, Torreon",
          "zone": "Coahuila",
        },
        {
          "amenities": {
            "Área infantil": true,
            "Asadores": true,
            "Caseta de vigilancia": true           
          },
          "bedrooms": "3",
          "cardSubtitle": "Excelente ubcación al norte de la ciudad.",
          "contactPhone": "5633201453",
          "costNew": 925000,
          "costPrev": "1,110,000",
          "description": "Casas de dos niveles con 3 recámaras, estancia, baños, cocina con equipamiento y estacionamiento.",
          "id": "15322906",
          "image": "https://i.ibb.co/hXjW2v0/Marques-portrait.jpg",
          "image2": "https://i.ibb.co/kBhXpXH/marques-2.jpg",
          "image3": "https://i.ibb.co/vDbfYqv/marques-3.jpg",
          "image4": "https://i.ibb.co/QJdzX4K/marques-4.jpg",
          "maxPrice": "1,110,000",
          "minPrice": "925,000",
          "mtsGround": "86",
          "mtsInmueble": "144",
          "name": "Rincón del Marqués",
          "title": "Concepto en forma de circuitos, para fomentar la convivencia y confianza entre vecinos. ",
          "ubication": "Calle Bordolesa, Torreon",
          "zone": "Coahuila"
        },
        {
          "amenities": {
            "gymExterior": true,
            "Áreas Verdes": true,
            "Palapa": true,
            "Área Infantil": true,
            "Ciclovías": true,         
            "Asadores": true,
            "Caseta de vigilancia": true,            
            "Ecotecnologías": true     
          },
          "bedrooms": "3",
          "cardSubtitle": "Un mejor estilo de vida.",
          "contactPhone": "5633201453",
          "costNew": 1110000,
          "costPrev": "1,332,000",
          "description": "Viviendas de 3 recámaras, 2 baño completo, cocina, estancia y un lugar de estacionamiento.",
          "id": "1922911",
          "image": "https://i.ibb.co/FhGTJ0d/Arboleda-portrait.jpg",
          "image2": "https://i.ibb.co/JzsZNnw/arboleda-2.png",
          "image3": "https://i.ibb.co/dbY6ct2/arboleda-3.png",
          "image4": "https://i.ibb.co/vQR2TXr/arboleda-4.jpg",
          "maxPrice": "1,332,000",
          "minPrice": "1,110,000",
          "mtsGround": "70",
          "mtsInmueble": " - ",
          "name": "Arboleda Ixtapaluca",
          "title": "En cada condominio área de juegos,  asador y aparatos de ejercicio.",
          "ubication": "Santa Barbara, Ixtapaluca",
          "zone": "Estado de México"
        },

        ///LAS TORRES///
        {
          "amenities": {
            "Caseta de vigilancia": true,            
            "Ecotecnologías": true,     
            "Áreas Verdes": true,
            "Cancha": true,
            "Área Infantil": true,
            "Pista de Jogging": true,
            "gymExterior": true,
          },
          "bedrooms": "2",
          "cardSubtitle": "Departamentos con ubicación privilegiada.",
          "contactPhone": "5633201453",
          "costNew": 840000,
          "costPrev": "1,008,000",
          "description": "Departamentos de 2 ó 3 recámaras, cocina, estancia, baño y un lugar de estacionamiento.",
          "id": "992782993",
          "image": "https://i.ibb.co/LJHR9rq/Las-torres-portrait.jpg",
          "image2": "https://i.ibb.co/5LNtq75/Las-torres-2.jpg",
          "image3": "https://i.ibb.co/hW6cgRN/Las-torres-3.jpg",
          "image4": "https://i.ibb.co/XSWLH9V/Las-torres-4.jpg",
          "maxPrice": "1,008,000",
          "minPrice": "840,000",
          "mtsGround": "51",
          "mtsInmueble": " - ",
          "name": "Arboleda Ixtapaluca",
          "title": "Sustentabilidad en cada una de las viviendas.",
          "ubication": "Santa Barbara, Ixtapaluca",
          "zone": "Estado de México"
        }

      ]
    }

    this.fireService.manuallyUpload(sendObject).then( (resp)=>{
    // this.fireService.singleManuallyUpdate().then( (resp)=>{
      console.log('resp', resp);   
    }).catch( (error) =>{
      console.error('error:', error);      
    });
  }


}
