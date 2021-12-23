import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockDataService } from 'src/app/services/mock-data.service';

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

  constructor(  private mockSrv: MockDataService,
                private bindService: DataBehaviorService,
                public platform: Platform,
                private behaviorSrv: DataBehaviorService,
                public dialog: MatDialog,
                private route: Router,
                private fireService: FirestoreService) { }

  ngOnInit( ) {
    
    if(this.platform.ANDROID || this.platform.IOS){
      this.isMobile = true;
    }
    
    this.fireService.getDataByGroups('data-complete').subscribe( (resp:any) => {    
      this.listArray = resp[0].data;
      console.log('this.listArray:', this.listArray);
    })
  }

  tapToDescription(args: any){    
    this.behaviorSrv.bindingObjectData(args)
    this.route.navigateByUrl('detail')
  }

  openLinkWhats(indexParam: any){
    console.log(indexParam);
    let message = 'Hola, me gustaría conocer más detalles del desarrollo de'+' '+indexParam.name;
    window.open(`https://api.whatsapp.com/send?phone=+52${indexParam.contactPhone}&text=${message}`, '_blank');
  }

}
