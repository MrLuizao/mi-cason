import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  arrayResult: any;

  constructor(  private bindService: DataBehaviorService,
                private route: Router ) { }

  ngOnInit(): void {
    this.bindService.$getFindSource.subscribe( (res:any) =>{
      console.log('$getFindSource',res);
      this.arrayResult = res;
    })
  }

  tapToDetails(args: any){    
    this.bindService.bindingObjectData(args)
    this.route.navigateByUrl('detail')
  }

}
