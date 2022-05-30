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

  amenities: any;

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
    this.amenities = this.modalArray.amenities;
    console.log('amenities', this.amenities);
  }

  gtagEvent(){
    this.seoService.gtagReportConversion('detailPage')
  }

}
