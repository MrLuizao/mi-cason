import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FinderPortraitComponent } from './components/finder-portrait/finder-portrait.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
import { SlidePromoComponent } from './components/slide-promo/slide-promo.component';
import { TrendsSectionComponent } from './components/trends-section/trends-section.component';
import { SlideGaleryComponent } from './components/slide-galery/slide-galery.component';
import { PackagesSectionComponent } from './components/packages-section/packages-section.component';
import { SlideActivitiesComponent } from './components/slide-activities/slide-activities.component';
import { BestPromosComponent } from './components/best-promos/best-promos.component';
import { RatingSectionComponent } from './components/rating-section/rating-section.component';
import { PricesSectionComponent } from './components/prices-section/prices-section.component';
import { GetAppComponent } from './components/get-app/get-app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/re-use/loading/loading.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { IncompleteSnackComponent } from './components/re-use/incomplete-snack/incomplete-snack.component';
import { ErrorSnackComponent } from './components/re-use/error-snack/error-snack.component';
import { CompleteSnackComponent } from './components/re-use/complete-snack/complete-snack.component';
import { DialogDescriptionComponent } from './components/material-components/dialogs/description/dialog-description.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResultsComponent } from './pages/results/results.component';
import { SelectErrorSnackComponent } from './components/re-use/select-error-snack/select-error-snack.component';
import { AboutUsComponent } from './components/material-components/dialogs/about-us/about-us.component';
import { DialogContactComponent } from './components/material-components/dialogs/dialog-contact/dialog-contact.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FinderPortraitComponent,
    PromoBannerComponent,
    SlidePromoComponent,
    TrendsSectionComponent,
    SlideGaleryComponent,
    PackagesSectionComponent,
    SlideActivitiesComponent,
    BestPromosComponent,
    RatingSectionComponent,
    PricesSectionComponent,
    GetAppComponent,
    FooterComponent,
    DialogContactComponent,
    LoadingComponent,
    IncompleteSnackComponent,
    ErrorSnackComponent,
    CompleteSnackComponent,
    DialogDescriptionComponent,
    HomeComponent,
    DetailComponent,
    ContactComponent,
    ResultsComponent,
    SelectErrorSnackComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    PdfViewerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
