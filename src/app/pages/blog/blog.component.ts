import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList: any;

  constructor(  private route: Router ) { }

  ngOnInit(): void {
    this.blogList = [
      {
        author: 'Luis'
      },
      {
        author: 'Luis 2'
      },
      {
        author: 'Luis 3'
      }
    ]
  }

  goDetailBlog(){
    this.route.navigateByUrl('blog-detail')
  }

}
