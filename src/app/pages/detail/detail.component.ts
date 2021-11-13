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
  message: string = '';

  constructor( private behaviorSrv: DataBehaviorService ) { }

  ngOnInit(): void {

    this.behaviorSrv.$getObjectSource.subscribe( (resp: any) =>{
      this.modalArray = resp
      console.log('modalArray:', this.modalArray);
      this.message = 'Hola, quiero me gustaría conocer más detalles del desarrollo de'+' '+this.modalArray.name;
      this.linkWhats = `https://api.whatsapp.com/send?phone=+52${this.modalArray.contactPhone}&text=${this.message}` ;

    }).unsubscribe();
  }

}
