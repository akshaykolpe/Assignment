import { StorageService } from './services/storage.service';
import { TagInputModule } from 'ngx-chips';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { ModalService } from 'src/app/services/modal.service';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgxMaskModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [ModalService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
