import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompleteSnackComponent } from 'src/app/components/re-use/complete-snack/complete-snack.component';
import { ErrorSnackComponent } from 'src/app/components/re-use/error-snack/error-snack.component';
import { IncompleteSnackComponent } from 'src/app/components/re-use/incomplete-snack/incomplete-snack.component';
import { ContactFormModel } from 'src/app/models/contact-form.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.css']
})
export class DialogContactComponent implements OnInit {

  contactFormModel: ContactFormModel = new ContactFormModel();
  isLoading: boolean = false;
  typeAlert: string = '';
  durationInSeconds = 3;

  constructor(  private fireService: FirestoreService,
                private _snackBar: MatSnackBar,
                public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  sendContactForm(form: NgForm){ 
    if(form.invalid){ 
      this.typeAlert = 'incomplete' 
      this.openSnackAlert(this.typeAlert);
      return 
    }

    this.isLoading = true;

    this.fireService.createDataContactForm(this.contactFormModel).then( (resp)=>{
      this.typeAlert = 'correct' 
      this.isLoading = false;  
      this.openSnackAlert(this.typeAlert);
      this.dialog.closeAll();

    }).catch( (error) =>{
      console.error('error:', error);
      this.typeAlert = 'error' 
      this.isLoading = false;  
      this.openSnackAlert(this.typeAlert);
      
    });
  }

  openSnackAlert( paramSnack: string){
    
    switch(paramSnack) {

      case 'incomplete' :
        this._snackBar.openFromComponent(IncompleteSnackComponent, {
          verticalPosition: 'top',
          duration: this.durationInSeconds * 1000
        });
      break;

      case 'correct' :
        this._snackBar.openFromComponent(CompleteSnackComponent, {
          verticalPosition: 'top',
          duration: this.durationInSeconds * 1000
        });
      break;

      case 'error' :
        this._snackBar.openFromComponent(ErrorSnackComponent, {
          verticalPosition: 'top',
          duration: this.durationInSeconds * 1000
        });
      break;

    }
  }


}
