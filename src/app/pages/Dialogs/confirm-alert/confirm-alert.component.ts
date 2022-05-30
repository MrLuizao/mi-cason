import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.css']
})
export class ConfirmAlertComponent implements OnInit {

  objectToPush: any;
  dataArray: any;
  
  constructor(  private behaviorSrv: DataBehaviorService,
                public dialog: MatDialog,
                private fireService: FirestoreService  ) { }

  ngOnInit(): void {
    
    this.behaviorSrv.$getobjectUpdate.subscribe( (data)=>{
      this.objectToPush = data;

      this.fireService.getDataComplete('data-complete').subscribe ( (resp:any) => {    
        let objectsList = resp[0].data;

        objectsList.push(this.objectToPush)
  
        this.dataArray = {
          data: objectsList
        }
    
      });
    }).unsubscribe();
  }

  confirmUpdateData(){
    this.fireService.addItemToCollection( this.dataArray ).then( (resp)=>{
      location.reload(); 
    }).catch( (error) =>{
      console.error('error:', error);      
    });


  }

}
