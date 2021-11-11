import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContactComponent } from '../material-components/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(  public dialog: MatDialog,
                private route: Router ) { }

  ngOnInit(): void {
  }


  openDialog() {
    // this.dialog.open(DialogContactComponent);
    this.route.navigateByUrl('contact')
  }
  
}
