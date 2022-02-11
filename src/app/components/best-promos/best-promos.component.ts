import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-best-promos',
  templateUrl: './best-promos.component.html',
  styleUrls: ['./best-promos.component.css']
})
export class BestPromosComponent implements OnInit {

  completeArray: any;

  constructor(  private fireService: FirestoreService,
                private behaviorSrv: DataBehaviorService,
                private route: Router ) { }

  ngOnInit(): void {
    this.fireService.getDataByGroups('data-complete').subscribe( (resp:any) => {
      this.completeArray = resp[0].data;
    })
  }

  viewDetails(args:any){
    this.behaviorSrv.bindingObjectData(args)
    this.route.navigateByUrl('detail')
  }

  goContactDialog() {
    this.route.navigateByUrl('contact')
  }

}
