import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { MockDataService } from 'src/app/services/mock-data.service';
import { DialogDescriptionComponent } from '../material-components/dialog-contact/dialog-description.component';

@Component({
  selector: 'app-slide-promo',
  templateUrl: './slide-promo.component.html',
  styleUrls: ['./slide-promo.component.css']
})
export class SlidePromoComponent implements OnInit {

  arrayFirst: any;
  arraySecond: any;
  arrayThird: any;

  constructor(  private mockSrv: MockDataService,
                private behaviorSrv: DataBehaviorService,
                public dialog: MatDialog,
                private route: Router) { }

  ngOnInit( ) {

    this.mockSrv.getMockData().subscribe( (resp: any) =>{
      console.log(resp);
      
      this.arrayFirst = resp.data.firstGroup
      this.arraySecond = resp.data.secondGroup
      this.arrayThird = resp.data.thirdGroup
    });
  }

  tapToDescription(args: any){    
    this.behaviorSrv.bindingObjectData(args)
    this.route.navigateByUrl('detail')
    // this.dialog.open(DialogDescriptionComponent);
  }


}
