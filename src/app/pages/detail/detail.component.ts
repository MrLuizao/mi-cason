import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  isMobile: boolean = false;

  modalArray: any;
  linkWhats!: string;
  message: string = '';

  alberca: boolean = false;
  quazona: boolean = false;
  asadores: boolean = false;
  cafeteria: boolean = false;
  cancha: boolean = false;
  gimnasio: boolean = false;
  gymexterior: boolean = false;
  ludoteca: boolean = false;
  palapa: boolean = false;
  petZone: boolean = false;
  jogging: boolean = false;
  vigilancia: boolean = false;
  lounge: boolean = false;
  infantil: boolean = false;
  areasVerde: boolean = false;
  ciclovia: boolean = false;
  zonaPet: boolean = false;
  terraza: boolean = false;

  kitchen: boolean = false;
  bedroom: boolean = false;
  laundry: boolean = false;

  cctv: boolean = false;
  comercial: boolean = false;
  salon: boolean = false;
  eco: boolean = false;

  constructor(  private behaviorSrv: DataBehaviorService, 
                public seoService: SeoService,
                public platform: Platform, ) {window.scrollTo(0,0)}

  ngOnInit(): void {
    if(this.platform.ANDROID || this.platform.IOS){
      this.isMobile = true;
    }

    this.behaviorSrv.$getObjectSource.subscribe( (resp: any) =>{
      this.modalArray = resp
      console.log('modalArray:', this.modalArray);
      this.message = 'Hola, me gustaría conocer más detalles del desarrollo de'+' '+this.modalArray.name;
      this.linkWhats = `https://api.whatsapp.com/send?phone=+52${this.modalArray.contactPhone}&text=${this.message}` ;

      this.findAmenities();
    }).unsubscribe();

  }

  findAmenities(){

    let amenities = this.modalArray.amenities;
    console.log('amenities',amenities);
    
    this.alberca = amenities.Alberca;
    this.quazona = amenities.Aquazona;
    this.asadores = amenities.Asadores;
    this.cafeteria = amenities.Cafetería;
    this.cancha = amenities.Cancha;
    this.gimnasio = amenities.Gimnasio;
    this.gymexterior = amenities['Gym exterior'];
    this.ludoteca = amenities.Lúdoteca;
    this.palapa = amenities.Palapa;
    this.petZone = amenities['Pet zone'];
    this.jogging = amenities['Pista de Jogging'] || amenities['Pista de jogging'];
    this.vigilancia = amenities.Vigilancia || amenities['Caseta de vigilancia'] || amenities['Caseta de Vigilancia'];
    this.lounge = amenities['Zona Lounge'];
    this.infantil = amenities['Área infantil'] || amenities['Área Infantil'];
    this.areasVerde = amenities['Áreas verdes'] || amenities['Áreas Verdes'];
    this.ciclovia = amenities['Ciclovías'];
    this.zonaPet = amenities['Zona Pet'];
    this.terraza = amenities['Terraza'];
    this.kitchen = amenities['Cocina Integral'];
    this.bedroom = amenities['Recámara con Terraza'];
    this.laundry = amenities['Área de Lavado'];

    this.cctv = amenities['CCTV'];
    this.comercial = amenities['Área comercial'];
    this.salon = amenities['Salón de fiestas'];
    this.eco = amenities['Ecotecnologías'];

  }

  gtagEvent(){
    this.seoService.gtagReportConversion('detailPage')
  }

}
