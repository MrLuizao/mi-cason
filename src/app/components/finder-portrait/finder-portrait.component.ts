import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-finder-portrait',
  templateUrl: './finder-portrait.component.html',
  styleUrls: ['./finder-portrait.component.css']
})
export class FinderPortraitComponent implements OnInit {

  dataInput: string = 'Selecciona una opción';
  arrayData: any;
  foundItem: any;

  constructor(  private route: Router,
                private fireService: FirestoreService,
                private bindService: DataBehaviorService) { }

  ngOnInit(): void {
  }

  dataChanged(param:any) {
    this.dataInput = param;
  }

  testFindItem(){

    this.fireService.getDataByGroups('data-complete').subscribe( (resp:any) => {
      this.arrayData = resp[0].data;

      this.foundItem = this.arrayData.filter( (item:any) => item.location === this.dataInput);

      this.bindService.bindingDataFind(this.foundItem);
      
      this.route.navigateByUrl('results')
    })
  }

}
