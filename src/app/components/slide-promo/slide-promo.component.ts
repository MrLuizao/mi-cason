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

  // browserPc!: boolean;
  isMobile: boolean = false;
  arrayFirst: any;
  arraySecond: any;
  arrayThird: any;

  constructor(  private mockSrv: MockDataService,
                public platform: Platform,
                private behaviorSrv: DataBehaviorService,
                public dialog: MatDialog,
                private route: Router,
                private fireService: FirestoreService) { }

  ngOnInit( ) {
    console.log('SE ESTÁ EJECUTANDO EN:',this.platform);

    if(this.platform.ANDROID || this.platform.IOS){
      this.isMobile = true;
    }
    
    this.fireService.getDataByGroups('data-by-groups').subscribe( (resp:any) => {
      console.log('getDataByGroups', resp[0]);
      this.arrayFirst = resp[0].data.firstGroup
      this.arraySecond = resp[0].data.secondGroup
      this.arrayThird = resp[0].data.thirdGroup
    })
  }

  tapToDescription(args: any){    
    this.behaviorSrv.bindingObjectData(args)
    this.route.navigateByUrl('detail')
  }


}
