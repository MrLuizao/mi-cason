import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-slide-promo',
  templateUrl: './slide-promo.component.html',
  styleUrls: ['./slide-promo.component.css']
})
export class SlidePromoComponent implements OnInit {

  arrayFirst: any;
  arraySecond: any;
  arrayThird: any;

  constructor( private mockSrv: MockDataService, private firestore: AngularFirestore) { 
    // this.firestore.collection('testLvr').add({
    //   "id": 'test',
    //   "name": 'example'
    // });
  }

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
