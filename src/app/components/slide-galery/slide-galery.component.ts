import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';

@Component({
  selector: 'app-slide-galery',
  templateUrl: './slide-galery.component.html',
  styleUrls: ['./slide-galery.component.css']
})
export class SlideGaleryComponent implements OnInit {

  arrayOne: any;
  arrayTwo: any;
  arrayThree: any;

  constructor( private mockSrv: MockDataService ) { }

  ngOnInit( ) {

    this.mockSrv.getMockMeanPromo().subscribe( (resp: any) =>{
      console.log(resp);
      
      this.arrayOne = resp.slideOne
      this.arrayTwo = resp.slideTwo
      this.arrayThree = resp.slideThree

    });
  }

  contactAsesor(param: string){
    alert('phone' +' '+ param)
  }

}
