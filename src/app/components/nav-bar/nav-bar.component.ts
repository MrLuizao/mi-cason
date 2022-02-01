import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(  public dialog: MatDialog,
                public seoService: SeoService,
                private route: Router ) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.route.navigateByUrl('contact')
  }

  navigatePop(){
    this.route.navigateByUrl('home');
  }

  saveClickToSeo(){
    this.seoService.gtagReportConversion('whatsApp-btn')
  }
}
