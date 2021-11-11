import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  modalArray: any;
  linkWhats!: string;

  constructor( private behaviorSrv: DataBehaviorService ) { }

  ngOnInit(): void {

    this.behaviorSrv.$getObjectSource.subscribe( (resp: any) =>{
      this.modalArray = resp
      console.log('modalArray:', this.modalArray);
      this.linkWhats = `https://api.whatsapp.com/send?phone=+52${this.modalArray.contactPhone}` ;
    }).unsubscribe();
  }

}
