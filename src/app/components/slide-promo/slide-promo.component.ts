import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-slide-promo',
  templateUrl: './slide-promo.component.html',
  styleUrls: ['./slide-promo.component.css']
})
export class SlidePromoComponent implements OnInit {

  listArray: any;

  isMobile: boolean = false;
  arrayFirst: any;
  arraySecond: any;
  arrayThird: any;
  linkWhats: any;
  messageWhats: any;

  constructor(  public platform: Platform,
                private behaviorSrv: DataBehaviorService,
                public dialog: MatDialog,
                private route: Router,
                public seoService: SeoService,
                private fireService: FirestoreService) { }

  ngOnInit( ) {
    this.messageWhats = 'Hola, me gustaría conocer más acerca de los desarrollos'
    this.linkWhats = `https://api.whatsapp.com/send?phone=+525633212320&text=${this.messageWhats}`;
    
    if(this.platform.ANDROID || this.platform.IOS){
      this.isMobile = true;
    }
    
    this.fireService.getDataComplete('data-complete').subscribe( (resp:any) => {    
      this.listArray = resp[0].data;
      console.log('this.listArray:', this.listArray);
    });

    // setTimeout( ()=>{
    //   this.sortOrderByPrice();
    // }, 3000);
  }

  tapToDescription(args: any){    
    this.behaviorSrv.bindingObjectData(args)
    this.route.navigateByUrl('detail')
  }

  openLinkWhats(indexParam: any){
    console.log(indexParam);
    this.seoService.gtagReportConversion('promoCards');
    let message = 'Hola, me gustaría conocer más detalles del desarrollo de'+' '+indexParam.name;
    window.open(`https://api.whatsapp.com/send?phone=+52${indexParam.contactPhone}&text=${message}`, '_blank');
  }

  eventListenSeo(){
    this.seoService.gtagReportConversion('promoBanner')
  }

  sortOrderByPrice(){

    this.listArray.sort((a:any,b:any) => (a.costNew > b.costNew) ? 1 : -1);
    console.log(this.listArray);
  }

}
