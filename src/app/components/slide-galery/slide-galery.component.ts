import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { MockDataService } from 'src/app/services/mock-data.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-slide-galery',
  templateUrl: './slide-galery.component.html',
  styleUrls: ['./slide-galery.component.css']
})
export class SlideGaleryComponent implements OnInit {

  arrayOne: any;
  arrayTwo: any;
  arrayThree: any;

  linkWhats!: string;
  constructor(  private mockSrv: MockDataService,
                public seoService: SeoService ) { }

  ngOnInit( ) {

    this.mockSrv.getMockMeanPromo().subscribe( (resp: any) =>{
      console.log(resp);
      
      this.arrayOne = resp.slideOne
      this.arrayTwo = resp.slideTwo
      this.arrayThree = resp.slideThree
      
    });
 
  }

  contactAsesor(param: any){
    this.seoService.gtagReportConversion('home')

    let message = 'Hola, me gustaría conocer más detalles del desarrollo'+' '+param.name;
    this.linkWhats =`https://api.whatsapp.com/send?phone=+52${param.contactPhone}&text=${message}` ;
  }

}
