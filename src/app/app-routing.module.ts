import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArcoRightsComponent } from './pages/arco-rights/arco-rights.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyNoticeComponent } from './pages/privacy-notice/privacy-notice.component';
import { ResultsComponent } from './pages/results/results.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { UploadsComponent } from './pages/uploads/uploads.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'detail', component: DetailComponent},
  
  { path: 'contact', component: ContactComponent},
  { path: 'results', component: ResultsComponent},
  { path: 'privacy-notice', component: PrivacyNoticeComponent},
  { path: 'terms-conditions', component: TermsConditionsComponent},
  { path: 'arco-rights', component: ArcoRightsComponent},

  { path: 'blog', component: BlogComponent},
  { path: 'blog-detail', component: BlogDetailComponent},

  { path: 'uploads', component: UploadsComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

