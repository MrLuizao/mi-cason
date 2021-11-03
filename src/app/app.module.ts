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
import { DialogContactComponent } from './components/material-components/dialog-contact/dialog-contact.component'
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


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
    DialogContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
