import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
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

  constructor(  public route: ActivatedRoute,
                public seoService: SeoService,
                private fireService: FirestoreService,
                public platform: Platform, ) {window.scrollTo(0,0)}

  ngOnInit(): void {
    if(this.platform.ANDROID || this.platform.IOS){
      this.isMobile = true;
    }

    this.route.queryParams.subscribe( params =>{

      let idToFind = params.desarrollo;
      this.fireService.consultById(idToFind).subscribe( (resp: any)=>{
        let filter = resp.data.filter( (item:any)=> idToFind === item.id);
        this.modalArray = filter[0];
        console.log(this.modalArray);

        this.message = 'Hola, me gustaría conocer más detalles del desarrollo de'+' '+this.modalArray.name;
        this.linkWhats = `https://api.whatsapp.com/send?phone=+52${this.modalArray.contactPhone}&text=${this.message}` ;

        this.findAmenities();
      })
    });

    // this.behaviorSrv.$getObjectSource.subscribe( (resp: any) =>{
    //   this.modalArray = resp
    //   console.log('modalArray:', this.modalArray);
    //   this.message = 'Hola, me gustaría conocer más detalles del desarrollo de'+' '+this.modalArray.name;
    //   this.linkWhats = `https://api.whatsapp.com/send?phone=+52${this.modalArray.contactPhone}&text=${this.message}` ;

    //   this.findAmenities();
    // }).unsubscribe();

  }

  findAmenities(){
    this.amenities = this.modalArray.amenities;
  }

  gtagEvent(){
    this.seoService.gtagReportConversion('detailPage')
  }

}
