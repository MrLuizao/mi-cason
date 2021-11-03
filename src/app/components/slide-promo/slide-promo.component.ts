import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-slide-promo',
  templateUrl: './slide-promo.component.html',
  styleUrls: ['./slide-promo.component.css']
})
export class SlidePromoComponent implements OnInit {

  arrayFirst: any;
  arraySecond: any;
  arrayThird: any;

  constructor( private mockSrv: MockDataService) { }

  ngOnInit( ) {

    this.mockSrv.getMockData().subscribe( (resp: any) =>{
      console.log(resp);
      
      this.arrayFirst = resp.firstGroup
      this.arraySecond = resp.secondGroup
      this.arrayThird = resp.thirdGroup
    });
  }

  tapToDescription(id: any){
    alert('este es el id ' + id)
  }




}
