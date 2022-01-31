import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SelectErrorSnackComponent } from '../re-use/select-error-snack/select-error-snack.component';

@Component({
  selector: 'app-finder-portrait',
  templateUrl: './finder-portrait.component.html',
  styleUrls: ['./finder-portrait.component.css']
})
export class FinderPortraitComponent implements OnInit {

  dataInput: string = 'Selecciona una opción';
  arrayData: any;
  foundItem: any;
  durationInSeconds = 3;

  constructor(  private route: Router,
                private fireService: FirestoreService,
                private bindService: DataBehaviorService,
                private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  dataChanged(param:any) {
    this.dataInput = param;
  }

  searchItem(){

    if(this.dataInput === 'Selecciona una opción'){
      this._snackBar.openFromComponent(SelectErrorSnackComponent, {
        verticalPosition: 'top',
        duration: this.durationInSeconds * 1000
      });
      return
    }

    this.fireService.getDataByGroups('data-complete').subscribe( (resp:any) => {
      this.arrayData = resp[0].data;
      // this.bindService.bindingCompleteData(this.arrayData);

      this.foundItem = this.arrayData.filter( (item:any) => item.zone === this.dataInput);

      this.bindService.bindingDataFind(this.foundItem);
      
      this.route.navigateByUrl('results')
    })
  }

}
