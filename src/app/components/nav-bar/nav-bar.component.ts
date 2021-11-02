import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContactComponent } from '../material-components/dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(DialogContactComponent);
  }
  
}
