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
        title: '',
        subtitle: '',
        textBody: '',
        image:'',
        author: '',
        link:''
      },
      {
        title: '',
        subtitle: '',
        textBody: '',
        image:'',
        author: '',
        link:''
      },
      {
        title: '',
        subtitle: '',
        textBody: '',
        image:'',
        author: '',
        link:''
      }
    ]
  }

  goDetailBlog(){
    this.route.navigateByUrl('blog-detail')
  }


}
