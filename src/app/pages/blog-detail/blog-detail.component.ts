import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataBehaviorService } from 'src/app/services/data-behavior.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  dataBlog: any;
  constructor( private behaviourSrv: DataBehaviorService ) {  window.scrollTo(0,0) }

  ngOnInit(): void {
    this.behaviourSrv.$getDetailBlog.subscribe( (resp)=>{
      console.log('$getDetailBlog',resp);
      this.dataBlog = resp;
    }).unsubscribe();
  }

}
