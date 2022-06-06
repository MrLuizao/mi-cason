import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  arrayResult: any;
  nameCity: any;

  constructor(  private bindService: DataBehaviorService,
                private fireService: FirestoreService,
                private route: Router ) { }

  ngOnInit(): void {
    this.bindService.$getFindSource.subscribe( (res:any) =>{
      console.log('$getFindSource',res);
      this.arrayResult = res;
      this.nameCity = this.arrayResult[0].zone;
    })
  }

  tapToDetails(args: any){   
    let navExtras: NavigationExtras = {
      queryParams:{ 
        desarrollo: args.id
      }
    }
    this.route.navigate(['/detail'], navExtras)
  }

}
