import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  arrayResult: any;

  constructor( private bindService: DataBehaviorService ) { }

  ngOnInit(): void {
    this.bindService.$getFindSource.subscribe( (res:any) =>{
      console.log('$getFindSource',res);
      this.arrayResult = res;
    })
  }

}
