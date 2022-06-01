import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionList } from '@angular/material/list';
import { AmenitiesModel, RealStateDevModel } from 'src/app/models/real-state-dev.model';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { ConfirmAlertComponent } from '../Dialogs/confirm-alert/confirm-alert.component';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  @ViewChild('amenitiesList')
  amenitiesList!: MatSelectionList;

  formModel: RealStateDevModel = new RealStateDevModel();
  // amenities: AmenitiesModel = new AmenitiesModel();;
  amenities: any;

  constructor(  private behaviorSrv: DataBehaviorService,
                public dialog: MatDialog ) { }

  ngOnInit(): void {}

  onChanges(evt: any){
    console.log(evt);
  }

  updateDataForm(form: NgForm){

    if(form.invalid){
      console.log('invalid form?',form.invalid);
      return
    }
    this.formModel.maxPrice = this.formModel.costPrev;
    this.formModel.minPrice = this.formModel.costNew.toString();
    
    if(this.amenitiesList._value === undefined){
      this.amenities = []
    }else{
      this.amenities = this.amenitiesList._value
    }

    let newObject = {
      ...this.formModel,
      amenities:this.amenities
    }
    this.behaviorSrv.setUpdateObject(newObject)
    this.dialog.open(ConfirmAlertComponent)

  }

  // updateDataList(){
  //   let newObject = {
  //     // "bedrooms":  this.formModel.bedrooms,
  //     // "cardSubtitle": "LVR",
  //     // "contactPhone": "LVR",
  //     // "costNew": 755000,
  //     // "costPrev": "906,000",
  //     // "description": "LVR",
  //     // "id": Math.random(),
  //     // "image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
  //     // "image2": "https://i.ibb.co/hKYtzKh/arroyo-2.jpg",
  //     // "image3": "https://i.ibb.co/F8bQB2j/arroyo-3.jpg",
  //     // "image4": "https://i.ibb.co/ZcgnMhr/arroyo-4.jpg",
  //     // "maxPrice": "906,000",
  //     // "minPrice": "755,000",
  //     // "mtsGround": "52",
  //     // "mtsInmueble": "52",
  //     // "name": "Residencial Arroyo",
  //     // "title": "Tú eliges, ¡casa o departamento!",
  //     // "ubication": "Xochitepec",
  //     // "zone": "Morelos",

  //     // 'amenities' : this.amenities
      
  //     // "amenities": {
  //     //   // "Ecotecnologías": true,
  //     //   "Palapa": this.amenities.palapa,
  //     //   // "Gimnasio": true,
  //     //   // "Asadores": true,
  //     //   "Alberca": true,
  //     //   "Caseta de vigilancia": true,            
  //     //   // "vigilance": true,
  //     //   // "Gym exterio": true,
  //     //   // "Gym exterior": true,
  //     //   "Áreas Verdes": true,
  //     //   // "Área Infantil": true,
  //     //   // "Cancha": true,
  //     //   "Asadores": true,
  //     //   // "aquaZone": false,
  //     //   // "courts": false,
  //     //   // "gymExterior": false,
  //     //   // "palapa": true,
  //     //   // "steakhouse": false,
  //     //   // "coffeBar": false,
  //     //   // "Áreas verdes": true,
  //     //   // "petZone": false,
  //     //   // "gym": false,
  //     //   // "childArea": true,
  //     //   // "loungeBar": true,
  //     //   // "playroom": false,
  //     //   // "joggin": false
  //     // },
  //   }
  //   this.behaviorSrv.setUpdateObject(newObject)
  //   this.dialog.open(ConfirmAlertComponent)
  // }

}
