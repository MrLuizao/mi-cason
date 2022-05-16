import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';
import { AboutUsComponent } from '../material-components/dialogs/about-us/about-us.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(  public dialog: MatDialog, 
                public seoService: SeoService,
                private route: Router) { }

  ngOnInit(): void {
  }

  openAboutUsModal(){
    this.dialog.open(AboutUsComponent);
  }

  goToConditionsTerms(){
    this.route.navigateByUrl('terms-conditions')
  }

  goToPrivacyNotice(){
    this.route.navigateByUrl('privacy-notice')
  }

  triggerSeoService(){
    this.seoService.gtagReportConversion('footerPage')
  }

  goToArcoRights(){
    this.route.navigateByUrl('arco-rights')
  }

  goToBlogPage(){
    this.route.navigateByUrl('blog')
  }

  navigateToSimulator(){
    window.open('https://originacion.fovissste.com.mx/originacion/cgi-bin/predictamen/predictamen_gob.aspx', '_blank')
  }
}
