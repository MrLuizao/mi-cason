import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public title: Title, public seo: SeoService) { }

  ngOnInit(): void { 
    let title: string = "MiCason";
    this.title.setTitle(title);

    this.seo.generateTags({
      title: "MiCason",
      description: "Portal inmobiliario",
      slug: "home"
    });
  }

}
